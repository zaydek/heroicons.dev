// const plugin = require("tailwindcss/plugin")
const defaultTheme = require("tailwindcss/defaultTheme")
const defaultVariants = require("./defaultVariants")

function trimWhitespace(str) {
	return str.split(/\s+/).join(" ").trim()
}

module.exports = {
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
				"hero-sm": trimWhitespace(`
					0 0 0 1px rgba(0, 0, 0, 0.05),
					0 1px 2px 0 rgba(0, 0, 0, 0.05)
				`),
				"hero": trimWhitespace(`
					0 0 0 1px rgba(0, 0, 0, 0.05),
					0 1px 3px 0 rgba(0, 0, 0, 0.1),
					0 1px 2px 0 rgba(0, 0, 0, 0.06)
				`),
				"hero-md": trimWhitespace(`
					0 0 0 1px rgba(0, 0, 0, 0.05),
					0 4px 6px -1px rgba(0, 0, 0, 0.1),
					0 2px 4px -1px rgba(0, 0, 0, 0.06)
				`),
				"hero-lg": trimWhitespace(`
					0 0 0 1px rgba(0, 0, 0, 0.05),
					0 10px 15px -3px rgba(0, 0, 0, 0.1),
					0 4px 6px -2px rgba(0, 0, 0, 0.05)
				`),
				"hero-xl": trimWhitespace(`
					0 0 0 1px rgba(0, 0, 0, 0.05),
					0 20px 25px -5px rgba(0, 0, 0, 0.1),
					0 10px 10px -5px rgba(0, 0, 0, 0.04)
				`),
				"hero-2xl": trimWhitespace(`
					0 0 0 1px rgba(0, 0, 0, 0.05),
					0 25px 50px -12px rgba(0, 0, 0, 0.25)
				`),
			},
			fontFamily: {
				// eslint-disable-next-line quotes
				mono: ['"IBM Plex Mono"', ...defaultTheme.fontFamily.mono],
				sans: [...defaultTheme.fontFamily.sans.slice(0, 3), "Inter", ...defaultTheme.fontFamily.sans.slice(3)],
			},
			fontSize: {
				"3xs": "0.625rem",
				"2xs": "0.6875rem",
			},
		},
		screens: {
			xs: `${24 + 512 + 24}px`,
			// => @media (min-width: 560px) { ... }

			sm: `${24 + 640 + 24}px`,
			// => @media (min-width: 688px) { ... }

			md: `${24 + 768 + 24}px`,
			// => @media (min-width: 816px) { ... }

			lg: `${24 + 1024 + 24}px`,
			// => @media (min-width: 1072px) { ... }

			xl: `${24 + 1280 + 24}px`,
			// => @media (min-width: 1328px) { ... }
		},
	},
	variants: {
		...defaultVariants,
		typography: [],
	},
	plugins: [
		require("@tailwindcss/ui"),

		// plugin(((flag = "dark-mode", prefix = "dark") => {
		// 	return ({ addVariant, e }) => {
		// 		addVariant(prefix, ({ modifySelectors }) => {
		// 			modifySelectors(({ className }) => {
		// 				return `.${flag} .${e(`${prefix}:${className}`)}`
		// 			})
		// 		})
		// 		addVariant(`hover:${prefix}`, ({ modifySelectors }) => {
		// 			modifySelectors(({ className }) => {
		// 				return `.${flag} .${e(`hover:${prefix}:${className}`)}:hover`
		// 			})
		// 		})
		// 		addVariant(`focus:${prefix}`, ({ modifySelectors }) => {
		// 			modifySelectors(({ className }) => {
		// 				return `.${flag} .${e(`focus:${prefix}:${className}`)}:focus`
		// 			})
		// 		})
		// 	}
		// })()),
	],
}
