import React from "react"

// https://codesandbox.io/s/dead-simple-usedarkmode-implementation-sl71k
function useDarkMode() {
	const [darkMode, setDarkMode] = React.useState(() => {
		return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
	})

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

	// Update <body>:
	const mounted = React.useRef()
	React.useLayoutEffect(() => {
		const handler = () => {
			if (!darkMode) {
				document.body.classList.remove("dark-mode")
			} else {
				document.body.classList.add("dark-mode")
			}
		}
		// useLayoutEffect:
		if (!mounted.current) {
			handler()
			mounted.current = false
			return
		}
		// useEffect:
		setTimeout(() => {
			handler()
		}, 0)
	}, [darkMode])

	// Update <html>:
	React.useEffect(() => {
		let backgroundColor = ""
		if (!darkMode) {
			// bg-gray-100
			backgroundColor = "#f7fafc"
		} else {
			// bg-gray-900
			backgroundColor = "#1a202c"
		}
		document.documentElement.style.backgroundColor = backgroundColor
	}, [darkMode])

	return [darkMode, setDarkMode]
}

export default useDarkMode
