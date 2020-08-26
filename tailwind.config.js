const defaultTheme = require("tailwindcss/defaultTheme")
const defaultVariants = require("./tailwind-defaultVariants")

function trimWhitespace(str) {
	return str.split(/\s+/).join(" ").trim()
}

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
				"75": "0.75rem",
			},
			boxShadow: {
				"solid-indigo": "0 0 0 3px #6875f5",

				"hero-sm": trimWhitespace(`
					${defaultTheme.boxShadow.xs},
					${defaultTheme.boxShadow.sm}
				`),
				"hero": trimWhitespace(`
					${defaultTheme.boxShadow.xs},
					${defaultTheme.boxShadow.default}
				`),
				"hero-md": trimWhitespace(`
					${defaultTheme.boxShadow.xs},
					${defaultTheme.boxShadow.md}
				`),
				"hero-lg": trimWhitespace(`
					${defaultTheme.boxShadow.xs},
					${defaultTheme.boxShadow.lg}
				`),
				"hero-xl": trimWhitespace(`
					${defaultTheme.boxShadow.xs},
					${defaultTheme.boxShadow.xl}
				`),
				"hero-2xl": trimWhitespace(`
					${defaultTheme.boxShadow.xs},
					${defaultTheme.boxShadow["2xl"]}
				`),
			},
			fontFamily: {
				mono: ["'IBM Plex Mono'", ...defaultTheme.fontFamily.mono],
				sans: [...defaultTheme.fontFamily.sans.slice(0, 3), "Inter", ...defaultTheme.fontFamily.sans.slice(3)],
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
