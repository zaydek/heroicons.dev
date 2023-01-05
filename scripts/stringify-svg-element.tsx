import { toCamelCase } from "../src/lib/cases"

type Configuration = {
	strictJsx: boolean
	omitAttrs: string[]
}

function sortAttrs(attrs: NamedNodeMap) {
	const sorted = Object.values(attrs)
		.map(attr => attr.name)
		.sort((a, b) => {
			if (a === "aria-hidden" || a === "d") { return 1 }
			return a.codePointAt(0)! - b.codePointAt(0)!
		})
	return sorted
}

function stringifyAttrs(keys: string[], attrs: NamedNodeMap, config: Configuration) {
	let attrStr = ""
	for (const key of keys) {
		if (config.omitAttrs.includes(key)) { continue }
		const attr = attrs.getNamedItem(key)!
		if (attrStr !== "") { attrStr += " " }
		if (config.strictJsx) {
			attrStr += `${attr.name === "viewBox" || attr.name === "aria-hidden"
				? attr.name
				: toCamelCase(attr.name)}=${isNaN(+attr.value)
					? JSON.stringify(attr.value)
					: `{${attr.value}}`
				}`
		} else {
			attrStr += `${attr.name}=${JSON.stringify(attr.value)}`
		}
	}
	return attrStr
}

export function stringifySvgElement(element: Element, config: Configuration) {
	function recurse(element: Element, nesting: number) {
		const arr: string[] = []

		const tabs = "\t".repeat(nesting)
		// <foo>
		//  ^^^
		const tag = element.tagName
		// <foo bar>
		//      ^^^
		const sortedAttrs = sortAttrs(element.attributes)
		const sortedAttrStr = stringifyAttrs(sortedAttrs, element.attributes, config)
		if (element.children.length > 0) {
			arr.push(`${tabs}<${tag} ${sortedAttrStr}>`)
			for (const child of element.children) {
				arr.push(...recurse(child, nesting + 1))
			}
			arr.push(`${tabs}</${tag}>`)
		} else {
			if (config.strictJsx) {
				arr.push(`${tabs}<${tag} ${sortedAttrStr} />`)
			} else {
				arr.push(`${tabs}<${tag} ${sortedAttrStr}><${tag}>`)
			}
		}
		return arr
	}
	return recurse(element, 0).join("\n")
}
