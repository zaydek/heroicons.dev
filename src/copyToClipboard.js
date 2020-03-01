const copyToClipboard = text => {
	let fakeElem = document.createElement("textarea")
	fakeElem.style.fontSize = "12pt"
	fakeElem.style.border = "0"
	fakeElem.style.padding = "0"
	fakeElem.style.margin = "0"
	fakeElem.style.position = "absolute"
	fakeElem.style.left = "-9999px"

	const yPosition = window.pageYOffset || document.documentElement.scrollTop
	fakeElem.style.top = `${yPosition}px`

	fakeElem.setAttribute("readonly", "")
	fakeElem.value = text

	document.body.appendChild(fakeElem)

	fakeElem.select()
	document.execCommand("copy")

	document.body.removeChild(fakeElem)
	fakeElem = null
}

export default copyToClipboard
