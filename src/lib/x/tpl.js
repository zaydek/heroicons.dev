// https://dev.to/patarapolw/fake-tagged-template-string-literal-to-enable-syntax-highlighting-in-vscode-34g1
function tpl(arr, ...args) {
	return arr.map((each, x) => `${each}${args[x] || ""}`).join("")
}

export default tpl
