import { variantImportant, variantVariables } from "@unocss/preset-mini/variants"
import transformerVariantGroup from "@unocss/transformer-variant-group"
import { Rule } from "unocss"
import { defineConfig } from "unocss/vite"

function convertSpaces(value: string) {
	return value.replace(/_/g, " ")
}

function extractCSSVariables(value: string) {
	return value.replace(/\$([a-zA-Z][a-zA-Z-0-9]*)/g, "var(--$1)")
}

function desugar(rawValue: undefined | string, { sign, px }: { sign?: string, px?: boolean } = {}): undefined | 0 | string {
	sign ??= ""   // TODO
	px   ??= true // TODO

	if (rawValue === undefined) { return undefined }

	const value = convertSpaces(extractCSSVariables(rawValue))
	if (value.startsWith("$")) {
		return value
	} else if (value.startsWith("[") && value.endsWith("]")) {
		return value.slice(1, -1)
	} else {
		if (px) {
			return sign + value + (Number.isNaN(+value) ? "" : "px")
		} else {
			return sign + value
		}
	}
}

const rules: Rule[] = [
	//// [/^((?:--|\$|-)?[a-z]+(?:-[a-z]+)*):(.+)$/, ([_, key, value]) => {
	//// 	if (
	//// 		key.startsWith("--")       || // CSS variables
	//// 		key.startsWith("$")        || // CSS variables (syntax sugar)
	//// 		key.startsWith("-webkit-") || // Safari and Chrome
	//// 		key.startsWith("-moz-")    || // Firefox
	//// 		key.startsWith("-ms-")     || // Microsoft Edge
	//// 		key.startsWith("-o-")      || // Opera
	//// 		key in cssSpec
	//// 	) {
	//// 		return { [key]: desugar(value) }
	//// 	}
	//// 	return {}
	//// }],

	[/^\[(-)?((?:$)?[a-z]+(?:-[a-z]+)*):(.+)\]$/, ([_, sign, key, value]) => {
	//// [/^$/, ([, sign, key, value]) => {
		return { [key]: desugar(value, { sign, px: false }) }
	}],

	/*
	 * Positioning
	 */
	["absolute", { "position": "absolute" }],
	["fixed",    { "position": "fixed"    }],
	["relative", { "position": "relative" }],
	["sticky",   { "position": "sticky"   }],

	[/^(-?)inset-(.+)$/,    ([_, sign, value]) => ({ "inset":   desugar(value, { sign }) })],
	[/^(-?)inset-x-(.+)$/,  ([_, sign, value]) => ({ "top":     "auto", "right": desugar(value, { sign }), "bottom": "auto", "left": desugar(value, { sign }) })],
	[/^(-?)inset-y-(.+)$/,  ([_, sign, value]) => ({ "top":     desugar(value, { sign }), "right": "auto", "bottom": desugar(value, { sign }), "left": "auto" })],
	[/^(-?)inset-t-(.+)$/,  ([_, sign, value]) => ({ "top":     desugar(value, { sign }), "right": desugar(value, { sign }), "bottom": "auto", "left": desugar(value, { sign }) })],
	[/^(-?)inset-r-(.+)$/,  ([_, sign, value]) => ({ "top":     desugar(value, { sign }), "right": desugar(value, { sign }), "bottom": desugar(value, { sign }), "left": "auto" })],
	[/^(-?)inset-b-(.+)$/,  ([_, sign, value]) => ({ "top":     "auto", "right": desugar(value, { sign }), "bottom": desugar(value, { sign }), "left": desugar(value, { sign }) })],
	[/^(-?)inset-l-(.+)$/,  ([_, sign, value]) => ({ "top":     desugar(value, { sign }), "right": "auto", "bottom": desugar(value, { sign }), "left": desugar(value, { sign }) })],
	[/^(-?)inset-tr-(.+)$/, ([_, sign, value]) => ({ "top":     desugar(value, { sign }), "right": desugar(value, { sign }), "bottom": "auto", "left": "auto" })],
	[/^(-?)inset-br-(.+)$/, ([_, sign, value]) => ({ "top":     "auto", "right": desugar(value, { sign }), "bottom": desugar(value, { sign }), "left": "auto" })],
	[/^(-?)inset-bl-(.+)$/, ([_, sign, value]) => ({ "top":     "auto", "right": "auto", "bottom": desugar(value, { sign }), "left": desugar(value, { sign }) })],
	[/^(-?)inset-tl-(.+)$/, ([_, sign, value]) => ({ "top":     desugar(value, { sign }), "right": "auto", "bottom": "auto", "left": desugar(value, { sign }) })],
	[/^(-?)t-(.+)$/,        ([_, sign, value]) => ({ "top":     desugar(value, { sign }) })],
	[/^(-?)r-(.+)$/,        ([_, sign, value]) => ({ "right":   desugar(value, { sign }) })],
	[/^(-?)b-(.+)$/,        ([_, sign, value]) => ({ "bottom":  desugar(value, { sign }) })],
	[/^(-?)l-(.+)$/,        ([_, sign, value]) => ({ "left":    desugar(value, { sign }) })],
	[/^z-(.+)$/,            ([_, value]) =>       ({ "z-index": desugar(value, { px: false }) })],

	/*
	 * Spacing
	 */
	[/^(-?)m-(.+)$/,        ([_, sign, value]) => ({ "margin":         desugar(value, { sign }) })],
	[/^(-?)my-(.+)$/,       ([_, sign, value]) => ({ "margin-top":     desugar(value, { sign }), "margin-bottom": desugar(value, { sign }) })],
	[/^(-?)mx-(.+)$/,       ([_, sign, value]) => ({ "margin-right":   desugar(value, { sign }), "margin-left":   desugar(value, { sign }) })],
	[/^(-?)mt-(.+)$/,       ([_, sign, value]) => ({ "margin-top":     desugar(value, { sign }) })],
	[/^(-?)mr-(.+)$/,       ([_, sign, value]) => ({ "margin-right":   desugar(value, { sign }) })],
	[/^(-?)mb-(.+)$/,       ([_, sign, value]) => ({ "margin-bottom":  desugar(value, { sign }) })],
	[/^(-?)ml-(.+)$/,       ([_, sign, value]) => ({ "margin-left":    desugar(value, { sign }) })],
	[/^p-(.+)$/,            ([_, value])       => ({ "padding":        desugar(value) })],
	[/^py-(.+)$/,           ([_, value])       => ({ "padding-top":    desugar(value), "padding-bottom": desugar(value) })],
	[/^px-(.+)$/,           ([_, value])       => ({ "padding-right":  desugar(value), "padding-left":   desugar(value) })],
	[/^pt-(.+)$/,           ([_, value])       => ({ "padding-top":    desugar(value) })],
	[/^pr-(.+)$/,           ([_, value])       => ({ "padding-right":  desugar(value) })],
	[/^pb-(.+)$/,           ([_, value])       => ({ "padding-bottom": desugar(value) })],
	[/^pl-(.+)$/,           ([_, value])       => ({ "padding-left":   desugar(value) })],

	/*
	 * Flexbox
	 */
	[/^justify-self-(.+)$/, ([_, value]) => ({ "justify-self": desugar(value, { px: false }) })],
	[/^align-self-(.+)$/,   ([_, value]) => ({ "align-self":   desugar(value, { px: false }) })],
	[/^flex-grow-(.+)$/,    ([_, value]) => ({ "flex-grow":    desugar(value, { px: false }) })],
	[/^flex-shrink-(.+)$/,  ([_, value]) => ({ "flex-shrink":  desugar(value, { px: false }) })],
	[/^flex-basis-(.+)$/,   ([_, value]) => ({ "flex-basis":   desugar(value) })],

	["flex",     { "display": "flex" }],
	["flex-row", { "flex-direction": "row" }],
	["flex-col", { "flex-direction": "column" }],

	[/^justify-(.+)$/,      ([_, value]) => ({ "justify-content": desugar(value, { px: false }) })],
	[/^align-(.+)$/,        ([_, value]) => ({ "align-items":     desugar(value, { px: false }) })],
	[/^flex-wrap-(.+)$/,    ([_, value]) => ({ "flex-wrap":       desugar(value, { px: false }) })],

	/*
	 * CSS Grid
	 */
	["grid", { "display": "grid" }],

	[/^grid-(\d+)$/,        ([_, value]) => ({ "display": "grid", "grid-template":         value === "1" ? "1fr" : `repeat(${desugar(value, { px: false })}, 1fr)` })],
	[/^grid-rows-(\d+)$/,   ([_, value]) => ({ "display": "grid", "grid-template-rows":    value === "1" ? "1fr" : `repeat(${desugar(value, { px: false })}, 1fr)` })],
	[/^grid-cols-(\d+)$/,   ([_, value]) => ({ "display": "grid", "grid-template-columns": value === "1" ? "1fr" : `repeat(${desugar(value, { px: false })}, 1fr)` })],

	/*
	 * Gap
	 */
	[/^gap-(.+)$/,          ([_, value]) => ({ "gap":        desugar(value) })],
	[/^gap-y-(.+)$/,        ([_, value]) => ({ "row-gap":    desugar(value) })],
	[/^gap-x-(.+)$/,        ([_, value]) => ({ "column-gap": desugar(value) })],

	/*
	 * Sizing
	 */
	[/^h-(.+)$/,            ([_, value]) => ({ "height":       desugar(value) })],
	[/^min-h-(.+)$/,        ([_, value]) => ({ "min-height":   desugar(value) })],
	[/^max-h-(.+)$/,        ([_, value]) => ({ "max-height":   desugar(value) })],
	[/^w-(.+)$/,            ([_, value]) => ({ "width":        desugar(value) })],
	[/^min-w-(.+)$/,        ([_, value]) => ({ "min-width":    desugar(value) })],
	[/^max-w-(.+)$/,        ([_, value]) => ({ "max-width":    desugar(value) })],
	[/^aspect-(.+)$/,       ([_, value]) => ({ "aspect-ratio": desugar(value, { px: false }) })],

	/*
	 * Border-radius
	 */
	[/^rounded-(.+)$/,      ([_, value]) => ({ "border-radius":              desugar(value) })],
	[/^rounded-t-(.+)$/,    ([_, value]) => ({ "border-top-left-radius":     desugar(value), "border-top-right-radius":    desugar(value) })],
	[/^rounded-r-(.+)$/,    ([_, value]) => ({ "border-top-right-radius":    desugar(value), "border-bottom-right-radius": desugar(value) })],
	[/^rounded-b-(.+)$/,    ([_, value]) => ({ "border-bottom-left-radius":  desugar(value), "border-bottom-right-radius": desugar(value) })],
	[/^rounded-l-(.+)$/,    ([_, value]) => ({ "border-bottom-left-radius":  desugar(value), "border-top-right-radius":    desugar(value) })],
	[/^rounded-tr-(.+)$/,   ([_, value]) => ({ "border-top-right-radius":    desugar(value) })],
	[/^rounded-br-(.+)$/,   ([_, value]) => ({ "border-bottom-right-radius": desugar(value) })],
	[/^rounded-bl-(.+)$/,   ([_, value]) => ({ "border-bottom-left-radius":  desugar(value) })],
	[/^rounded-tl-(.+)$/,   ([_, value]) => ({ "border-top-left-radius":     desugar(value) })],

	/*
	 * Decoration
	 */
	[/^color-(.+)$/,        ([_, value]) => ({ "color":            desugar(value, { px: false }) })],
	[/^bg-color-(.+)$/,     ([_, value]) => ({ "background-color": desugar(value, { px: false }) })],
	[/^bg-image-(.+)$/,     ([_, value]) => ({ "background-image": desugar(value, { px: false }) })],
	[/^shadow-(.+)$/,       ([_, value]) => ({ "box-shadow":       desugar(value, { px: false }) })],
]

////////////////////////////////////////////////////////////////////////////////

export default defineConfig({
	presets: [], // No-op UnoCSS
	rules,
	transformers: [
		transformerVariantGroup(),
	],
	variants: [
		variantImportant, // !key=typed(value) syntax
		variantVariables, // [selector]:key=typed(value) syntax
	],
})
