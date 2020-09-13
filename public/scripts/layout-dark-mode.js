function themePreferenceDark() {
	const ok = (
		"themePreference" in localStorage &&
		localStorage.themePreference === "dark"
	)
	return ok
}

function prefersColorShemeDark() {
	const ok = (
		window.matchMedia &&
		window.matchMedia("(prefers-color-scheme: dark)").matches
	)
	return ok
}

;(() => {
	if (themePreferenceDark() || prefersColorShemeDark()) {
		const html = document.documentElement
		html.classList.add("dark")
	}
})()
