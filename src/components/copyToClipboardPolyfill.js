function testAppleiOS() {
	return navigator.userAgent.match(/iPhone|iPad/)
}

// https://github.com/codex-src/heroicons-viewer/pull/4
function copyToClipboardPolyfill(text) {
	const textarea = document.createElement("textarea")
	textarea.style.position = "absolute"
	textarea.style.left = "-9999px"
	textarea.style.top = "-9999px"
	textarea.value = text
	document.body.appendChild(textarea)
	const selection = document.getSelection()
	if (testAppleiOS()) {
		const range = document.createRange()
		range.selectNodeContents(textarea)
		selection.removeAllRanges()
		selection.addRange(range)
		textarea.setSelectionRange(0, textarea.value.length)
	} else {
		textarea.select()
	}
	document.execCommand("copy")
	selection.removeAllRanges()
	document.body.removeChild(textarea)
}

export default copyToClipboardPolyfill
