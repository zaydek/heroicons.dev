// Converts kebab-case to camelCase.
function toCamelCase(str) {
	return str.split("-").map(each => each.slice(0, 1).toUpperCase() + each.slice(1)).join("")
}

export default toCamelCase
