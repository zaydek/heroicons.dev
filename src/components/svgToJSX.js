// Converts SVG HTML to JSX.
function svgToJSX(svgStr) {
	let jsxStr = svgStr
	jsxStr = jsxStr.replace(/><\/[a-z]+>/g, " />")
	jsxStr = jsxStr.replace(/class="/g, "className=\"")
	jsxStr = jsxStr.replace(/fill-rule/g, "fillRule")
	jsxStr = jsxStr.replace(/clip-rule/g, "clipRule")
	jsxStr = jsxStr.replace(/stroke-linecap/g, "strokeLinecap")
	jsxStr = jsxStr.replace(/stroke-linejoin/g, "strokeLinejoin")
	jsxStr = jsxStr.replace(/stroke-width/g, "strokeWidth")
	jsxStr = jsxStr.replace(/strokeWidth="(\d+)"/g, (_, strokeWidth) => {
		return `strokeWidth={${strokeWidth}}`
	})
	return jsxStr
}

export default svgToJSX
