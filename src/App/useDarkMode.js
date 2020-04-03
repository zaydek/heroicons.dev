import React from "react"

// https://codesandbox.io/s/dead-simple-usedarkmode-implementation-sl71k
function useDarkMode() {
	const [darkMode, setDarkMode] = React.useState(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches)

	// Listen for dark mode (from the user):
	React.useEffect(() => {
		if (!window.matchMedia) {
			// No-op
			return
		}
		const media = window.matchMedia("(prefers-color-scheme: dark)")
		const handler = () => {
			setDarkMode(media.matches)
		}
		handler() // Once
		media.addListener(handler)
		return () => {
			media.removeListener(handler)
		}
	}, [])

	// Update body.dark-mode:
	React.useLayoutEffect(() => {
		if (!darkMode) {
			document.body.classList.remove("dark-mode")
		} else {
			document.body.classList.add("dark-mode")
		}
	}, [darkMode])

	return [darkMode, setDarkMode]
}

export default useDarkMode
