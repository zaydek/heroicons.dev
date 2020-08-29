const defaultTheme = require("tailwindcss/defaultTheme")
const defaultVariants = require("./tailwind-defaultVariants")

module.exports = {
	// https://github.com/tailwindlabs/tailwindcss/releases#experimental-features
	experimental: "all",
	// https://github.com/tailwindlabs/tailwindcss/releases#new-gap-utility-aliases
	future: {
		removeDeprecatedGapUtilities: true,
	},
	purge: [
		"./pages/**/*.js",
		"./src/**/*.js",
	],
	purge: [
		"./public/**/*.html",
		"./src/**/*.js",
	],
	theme: {
		extend: {
			borderRadius: {
				"75": "0.75rem", // DEPRECATE

				"1": "0.25rem",
				"2": "0.5rem",
				"3": "0.75rem",
				"4": "1rem",
				"5": "1.25rem",
				"6": "1.5rem",
				"7": "1.75rem",
				"8": "2rem",
			},
			// boxShadow: {
			// 	"solid-indigo": "0 0 0 3px #6875f5",
			// },
			fontFamily: {
				// mono: ["'IBM Plex Mono'", ...defaultTheme.fontFamily.mono],
				sans: [...defaultTheme.fontFamily.sans.slice(0, 3), "Inter", ...defaultTheme.fontFamily.sans.slice(3)],
			},
			zIndex: {
				"-10": "-10",
			},
		},
		screens: {
			sm: `${16 + 640 + 16}px`,
			// => @media (min-width: 672px) { ... }

			md: `${16 + 768 + 16}px`,
			// => @media (min-width: 752px) { ... }

			lg: `${16 + 1024 + 16}px`,
			// => @media (min-width: 1008px) { ... }

			xl: `${16 + 1280 + 16}px`,
			// => @media (min-width: 1264px) { ... }
		},
	},
	variants: {
		...defaultVariants,
		typography: [],
	},
	plugins: [
		require("@tailwindcss/ui"),
	],
}
