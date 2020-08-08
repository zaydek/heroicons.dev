// Converts SVG HTML to JSX.
function svgToJSX(svgStr) {
	let jsxStr = svgStr

	// <svg ...></svg> -> <svg ... />
	jsxStr = jsxStr.replace(/><\/[a-z]+>/g, " />")

	// <svg class="hello world" ...> -> <svg className="hello world" ...>
	jsxStr = jsxStr.replace(/class="/g, "className=\"")

	// <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" ...>
	// -> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" ...>
	jsxStr = jsxStr.replace(/([a-z]+)-([a-z]+)/g, (_, a, b) => {
		return a + b.slice(0, 1).toUpperCase() + b.slice(1)
	})

	// <path strokeWidth="2" ...> -> <path strokeWidth={2} ...>
	jsxStr = jsxStr.replace(/strokeWidth={(\d+)}/g, (_, stokeWidth) => {
		return `strokeWidth=${strokeWidth}`
	})

	return jsxStr
}

export default svgToJSX
