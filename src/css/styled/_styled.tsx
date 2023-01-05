import { PropertiesFallback } from "csstype"
import { createElement, forwardRef, ForwardRefExoticComponent, useMemo } from "react"
import { toKebabCase } from "../../lib/cases"
import { filterSafeValues } from "../../lib/filter-safe-values"
import { createHash, createRandomFactory } from "../../lib/random"
import { unitless } from "./_unitless"

////////////////////////////////////////////////////////////////////////////////

//// // Use interface for TypeScript performance concerns
//// export interface StylePrimitive extends PropertiesFallback<number | string | null> {}

export type StylePrimitive = PropertiesFallback<number | string | null>

export type Style = StylePrimitive | {
	[key: string]: Style
}

export type StyledComponent<StyleConfig extends Style> = {
	<Props extends {}, Tag extends keyof JSX.IntrinsicElements = "div">
		(props:
			| ({ tag?: Tag } & JSX.IntrinsicElements[Tag])
			| ({ as?: (_: Props) => JSX.Element } & Props)
		): JSX.Element

	Forward:   ForwardRefExoticComponent<any>
	style:     StyleConfig
	className: string
}

const random = createRandomFactory()
const hash = () => createHash(random, { base: "base_36", length: 6 })

const cssCache = new Map<string, { className: string, arr: string[] }>()

function extractCSSVariables(value: string) {
	return value.replace(/\$([a-zA-Z][a-zA-Z-0-9]*)/g, "var(--$1)")
}

export function resolveOneValue(property: string, value: unknown) {
	if (typeof value === "number") {
		// Number
		if (property in unitless || (value >= 0 && value < 1)) {
			return value
		} else {
			return `${value}px`
		}
	} else if (typeof value === "string") {
		// String
		return extractCSSVariables(value)
	} else {
		return value
	}
}

export function resolveOneOrMoreValues(property: string, value: unknown) {
	if (Array.isArray(value)) {
		const delimiter = value[value.length - 1] === "COMMA" ? "COMMA" : null
		let arr: string[]
		if (delimiter === "COMMA") {
			// E.g. ["foo", "bar", "COMMA"]
			arr = value.slice(0, -1)
		} else {
			// E.g. ["foo", "bar"]
			arr = value
		}
		return arr.map(v => resolveOneValue(property, v))
			.join(delimiter === "COMMA" ? ", " : " ")
	}
	return resolveOneValue(property, value)
}

function vendorIfNeeded(str: string) {
	if (str.startsWith("Khtml")) {
		return str.replace("Khtml", "-khtml-")
	} else if (str.startsWith("Moz")) {
		return str.replace("Moz", "-moz-")
	} else if (str.startsWith("ms")) {
		return str.replace("ms", "-ms-")
	} else if (str.startsWith("O")) {
		return str.replace("O", "-o-")
	} else if (str.startsWith("Webkit")) {
		return str.replace("Webkit", "-webkit-")
	}
	return str
}

function convertStyleToCss(selector: string, style: Style) {
	const css: Record<string, unknown> = { [selector]: {} }
	for (const [key, value] of Object.entries(style)) {
		if (key.includes("&")) {
			const next = convertStyleToCss(selector, value)
			for (const [key2, value2] of Object.entries(next)) {
				css[key2.replaceAll(selector, key.replaceAll("&", selector))] = value2
			}
		} else if (key.includes("@media")) {
			css[key] = convertStyleToCss(selector, value)
		} else {
			if (value === null) { continue }
			// @ts-expect-error
			css[selector][toKebabCase(vendorIfNeeded(key))] =
				resolveOneOrMoreValues(key, value)
		}
	}
	return css
}

//// let str = ""
//// const fmt = "  ".repeat(nesting)
//// for (const [key, value] of Object.entries(css)) {
//// 	if (typeof value === "object") {
//// 		str += `\n${fmt}${key} {`
//// 		str += `  ${fmt}${convertCssToString(value as typeof css, nesting + 1)}`
//// 		str += `\n${fmt}}`
//// 	} else {
//// 		str += `\n${fmt}${key}: ${value};`
//// 	}
//// }

function convertCssToString(css: Record<string, unknown>) {
	function recurse(css: Record<string, unknown>, nesting: number) {
		let str = ""
		const fmt = "  ".repeat(nesting)
		for (const [key, value] of Object.entries(css)) {
			if (typeof value === "object") {
				str += `\n${fmt}${key} {`
				str += `  ${fmt}${recurse(value as typeof css, nesting + 1)}`
				str += `\n${fmt}}`
			} else {
				str += `\n${fmt}${key}: ${value};`
			}
		}
		return str
	}
	const str = recurse(css, 0)
	return str.trimStart() + "\n" // EOF
}

function convertStyleToStringArray(selector: string, style: Style) {
	const css = convertStyleToCss(selector, style)
	const arr: string[] = []
	for (const [key, value] of Object.entries(css)) {
		arr.push(convertCssToString({ [key]: value }))
	}
	return arr
}

function createStylesheetManager({ debug }: { debug: boolean }) {
	let sharedStylesheet: HTMLStyleElement | null = null
	if (!debug) {
		sharedStylesheet = document.createElement("style")
		document.head.append(sharedStylesheet)
	}
	return {
		create({ id }: { id?: string } = {}) {
			let stylesheet: HTMLStyleElement | null = null
			if (debug) {
				stylesheet = document.createElement("style")
				if (id !== undefined) { stylesheet.id = id }
				document.head.append(stylesheet)
			}
			const driver = (sharedStylesheet ?? stylesheet) as HTMLStyleElement
			return {
				append(...arr: string[]) {
					const nodes = arr.map(str => document.createTextNode(str))
					driver.append(...nodes)
					return () => {
						for (const node of nodes) {
							node.remove()
						}
					}
				},
				remove() {
					driver.remove()
				},
			}
		},
	}
}

const stylesheetManager = createStylesheetManager({ debug: true })
export const globalStylesheet = stylesheetManager.create({ id: "global-stylesheet" })

export function styled<StyleConfig extends Style>(style: StyleConfig, { key }: { key?: string } = {}): StyledComponent<StyleConfig> {
	style = filterSafeValues(style)

	const styledClassName = `styled${key === undefined ? "" : `-${key}`}-${hash()}`
	const arr = convertStyleToStringArray(`.${styledClassName}`, style)
	const stylesheet = stylesheetManager.create({ id: styledClassName })
	stylesheet.append(...arr)

	// @ts-expect-error
	const styled: StyledComponent<StyleConfig> = ({ as, tag, className, ...props }) => {
		return createElement(as ?? tag ?? "div", {
			...props,
			className: [
				styledClassName,
				className,
			].filter(Boolean).join(" "),
		})
	}

	styled.Forward = forwardRef(({ as, tag, className, ...props }, ref) => {
		return createElement(as ?? tag ?? "div", {
			ref,
			...props,
			className: [
				styledClassName,
				className,
			].filter(Boolean).join(" "),
		})
	})

	styled.style = style
	styled.className = styledClassName
	styled.toString = () => `.${styledClassName}`

	return styled
}

//// export function css(style: Style) {
//// 	style = filterSafeValues(style)
////
//// 	const jsonKey = JSON.stringify(style)
//// 	let className: string
//// 	let arr: string[]
//// 	const entry = cssCache.get(jsonKey)
//// 	if (entry === undefined) {
//// 		className = `css-${hash()}`
//// 		arr = convertStyleToStringArray(`.${className}`, style)
//// 		cssCache.set(jsonKey, { className: className, arr: arr })
//// 		globalStylesheet.append(...arr)
//// 	} else {
//// 		className = entry.className
//// 		arr = entry.arr
//// 	}
//// 	return className
//// }
////
//// // EXPERIMENTAL
//// export function css(style: Style) {
//// 	// eslint-disable-next-line react-hooks/rules-of-hooks
//// 	return useMemo(() => {
//// 		style = filterSafeValues(style) // eslint-disable-line react-hooks/exhaustive-deps
////
//// 		const jsonKey = JSON.stringify(style)
//// 		let className: string
//// 		let arr: string[]
//// 		const entry = cssCache.get(jsonKey)
//// 		if (entry === undefined) {
//// 			className = `styled-css-${hash()}`
//// 			arr = convertStyleToStringArray(`.${className}`, style)
//// 			cssCache.set(jsonKey, { className: className, arr: arr })
//// 			globalStylesheet.append(...arr)
//// 		} else {
//// 			className = entry.className
//// 			arr = entry.arr
//// 		}
//// 		return className
//// 	}, [])
//// }
