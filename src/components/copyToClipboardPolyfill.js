// Tests for the presence of "iPhone" or "iPad" in the user
// agent string.
function testForiOS() {
	return navigator.userAgent.match(/iphone|ipad/i)
}

// Copies plaintext to the clipboard. Note that the
// navigator.clipboard.writeText **does not** work in Safari
// as of 13.0.x.
//
// https://github.com/codex-src/heroicons-viewer/pull/4
function copyToClipboardPolyfill(plaintext) {

	// Mount a <textarea>:
	const textarea = document.createElement("textarea")
	textarea.style.position = "absolute"
	textarea.style.left = "-9999px"
	textarea.style.top = "-9999px"
	textarea.value = plaintext
	document.body.appendChild(textarea)

	// Select and copy the <textarea> text:
	const selection = document.getSelection()
	if (testForiOS()) {
		const range = document.createRange()
		range.selectNodeContents(textarea)
		selection.removeAllRanges()
		selection.addRange(range)
		textarea.setSelectionRange(0, textarea.value.length)
	} else {
		textarea.select()
	}
	document.execCommand("copy")

	// Unmount <textarea>:
	selection.removeAllRanges()
	document.body.removeChild(textarea)

}

export default copyToClipboardPolyfill
