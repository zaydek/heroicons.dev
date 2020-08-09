function testIOS() {
	return navigator.userAgent.match(/ipad|iphone/i)
}

// https://github.com/codex-src/heroicons-viewer/pull/4
function copyToClipboard(data) {
	const textarea = document.createElement("textarea")
	textarea.style.position = "absolute"
	textarea.style.left = "-9999px"
	textarea.style.top = "-9999px"
	textarea.value = data
	document.body.appendChild(textarea)
	const selection = document.getSelection()
	if (testIOS()) {
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

export default copyToClipboard
