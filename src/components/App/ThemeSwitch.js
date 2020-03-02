import React, { useState } from "react"

export default function ThemeSwitch() {

	const DarkIcon = () => (
        <button className="bg-indigo-600 rounded-full p-2 text-white" onClick={() => toggleTheme(!isDark)}>
		<svg viewBox="0 0 20 20" fill="currentColor" class="w-8 h-8"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
        </button>
	)
	const LightIcon = () => (
        <button className="bg-indigo-600 rounded-full p-2 text-white" onClick={() => toggleTheme(!isDark)}>
		<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
        </button>
	)
	const [isDark, toggleTheme] = useState(false)

	if (isDark) {
		document.documentElement.classList.add("mode-dark")
		return (
			<DarkIcon />
		)
	} else {
		document.documentElement.classList.remove("mode-dark")
		return (
			<LightIcon />
		)
	}
}
