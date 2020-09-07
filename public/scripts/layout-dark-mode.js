// https://github.com/tailwindlabs/tailwindcss/pull/2279#issuecomment-684997169
;(() => {
	const html = document.documentElement
	if (("themePreference" in localStorage) && localStorage.themePreference === "dark") {
		html.classList.add("dark")
	} else if (!("themePreference" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches) {
		html.classList.add("dark")
	}
})()
