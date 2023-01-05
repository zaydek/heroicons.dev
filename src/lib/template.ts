export function template(strings: TemplateStringsArray, ...keys: any[]) {
	const arr = []
	for (let index = 0; index < strings.length; index++) {
		arr.push(strings[index])
		arr.push(keys[index])
	}
	return arr.join("")
}
