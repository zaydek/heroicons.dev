// Converts kebab-case to camelCase.
function toCamelCase(kebabCaseStr) {
	return kebabCaseStr.split("-").map(each => each.slice(0, 1).toUpperCase() + each.slice(1)).join("")
}

export default toCamelCase
