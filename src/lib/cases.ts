export function toKebabCase(str: string) {
	return str.replace(/([a-z])([A-Z0-9])/g, "$1-$2") // -> column-1width
	          .replace(/([0-9])([a-zA-Z])/g, "$1-$2") // -> column-1-width
	          .toLowerCase()
}

export function toSnakeCase(str: string) {
	return str.replace(/([a-z])([A-Z0-9])/g, "$1_$2") // -> column_1width
	          .replace(/([0-9])([a-zA-Z])/g, "$1_$2") // -> column_1_width
	          .toLowerCase()
}

export function toCamelCase(str: string) {
	return str.replace(/[\s-]+([a-zA-Z])/g, (_, $1) => $1.toUpperCase())
}

export function toTitleCase(str: string) {
	const str2 = toCamelCase(str)
	return str2.slice(0, 1).toUpperCase() + str2.slice(1)
}
