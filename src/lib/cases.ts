import _ from "lodash"

export function toKebabCase(str: string) {
	//// return str.replace(/([a-z])([A-Z0-9])/g, "$1-$2") // -> column-1width
	////           .replace(/([0-9])([a-zA-Z])/g, "$1-$2") // -> column-1-width
	////           .toLowerCase()

	// Sanitize
	//// str = str.replace(/[^a-zA-Z0-9]+/g, "-")
	return _.kebabCase(str)
		.replace(/ /g, "")
}

export function toSnakeCase(str: string) {
	//// return str.replace(/([a-z])([A-Z0-9])/g, "$1_$2") // -> column_1width
	////           .replace(/([0-9])([a-zA-Z])/g, "$1_$2") // -> column_1_width
	////           .toLowerCase()

	// Sanitize
	//// str = str.replace(/[^a-zA-Z0-9]+/g, "_")
	return _.snakeCase(str)
		.replace(/ /g, "")
}

export function toCamelCase(str: string) {
	//// return str.replace(/[\s-]+([a-zA-Z])/g, (_, $1) => $1.toUpperCase())

	// Sanitize
	//// str = str.replace(/[^a-zA-Z0-9]+/g, "-")
	return _.camelCase(str)
		.replace(/ /g, "")
}

export function toTitleCase(str: string) {
	//// const str2 = toCamelCase(str)
	//// return str2.slice(0, 1).toUpperCase() + str2.slice(1)

	// Sanitize
	//// str = str.replace(/[^a-zA-Z0-9]+/g, "-")
	return _.startCase(str)
		.replace(/ /g, "")
}
