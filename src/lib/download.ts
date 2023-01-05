// https://stackoverflow.com/a/18197341
export function download(filename: string, content: string) {
	// Create <a download={filename} href={encoded content}>
	const anchorElement = document.createElement("a")
	anchorElement.setAttribute("download", filename)
	anchorElement.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(content))
	anchorElement.style.display = "none"
	// Append and click
	document.body.appendChild(anchorElement)
	anchorElement.click()
	// Remove
	anchorElement.remove()
}
