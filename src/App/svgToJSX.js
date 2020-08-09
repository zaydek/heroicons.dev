// Converts SVG HTML to JSX.
function svgToJSX(svgStr) {
	let jsxStr = svgStr

	// <(svg|path)></(svg|path)> -> <(svg|path) />
	jsxStr = jsxStr.replace(/><\/[a-z]+>/g, " />")

	// <svg class="hello world" ...> -> <svg className="hello world" ...>
	jsxStr = jsxStr.replace(/class="/g, "className=\"")

	// <(svg|path) [a-z]+-[a-z]+ ...> -> <(svg|path) [a-z]+[A-Z]+ ...>
	jsxStr = jsxStr.replace(/fill-rule/g, "fillRule")
	jsxStr = jsxStr.replace(/clip-rule/g, "clipRule")
	jsxStr = jsxStr.replace(/stroke-linecap/g, "strokeLinecap")
	jsxStr = jsxStr.replace(/stroke-linejoin/g, "strokeLinejoin")
	jsxStr = jsxStr.replace(/stroke-width/g, "strokeWidth")

	// <path strokeWidth="2" ...> -> <path strokeWidth={2} ...>
	jsxStr = jsxStr.replace(/strokeWidth="(\d+)"/g, (_, strokeWidth) => {
		return `strokeWidth={${strokeWidth}}`
	})

	return jsxStr
}

export default svgToJSX
