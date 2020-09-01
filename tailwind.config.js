const defaultTheme = require("tailwindcss/defaultTheme")
const defaultVariants = require("./tailwind-defaultVariants")

// Converts 1tw -> 0.25rem.
function twToRem(tw) {
	return `${(tw * 4) / 16}rem`
}

module.exports = {
	// https://github.com/tailwindlabs/tailwindcss/releases#experimental-features
	experimental: {
		uniformColorPalette: true,
	},
	future: {
		removeDeprecatedGapUtilities: true,
	},
	plugins: [
		require("@tailwindcss/ui"),
	],
	purge: [
		"./src/**/*.js",
	],
	theme: {
		extend: {
			borderRadius: {
				"1": twToRem(1),
				"2": twToRem(2),
				"3": twToRem(3),
				"4": twToRem(4),
				"5": twToRem(5),
				"6": twToRem(6),
			},
			boxShadow: {
				"px": defaultTheme.boxShadow.px,
				"1":  defaultTheme.boxShadow.sm,
				"2":  defaultTheme.boxShadow.default,
				"3":  defaultTheme.boxShadow.md,
				"4":  defaultTheme.boxShadow.lg,
				"5":  defaultTheme.boxShadow.xl,
				"6":  defaultTheme.boxShadow["2xl"],
			},
			fontFamily: {
				sans: [...defaultTheme.fontFamily.sans.slice(0, 3), "Inter", ...defaultTheme.fontFamily.sans.slice(3)],
			},
			zIndex: {
				"-50": "-50",
				"-40": "-40",
				"-30": "-30",
				"-20": "-20",
				"-10": "-10",
			},
		},
		screens: {
			// /* eslint-disable no-multi-spaces */
			// sm: `${16 +  640 + 16}px`,
			// md: `${16 +  768 + 16}px`,
			// lg: `${16 + 1024 + 16}px`,
			// xl: `${16 + 1280 + 16}px`,
			// /* eslint-enable no-multi-spaces */

			/* eslint-disable no-multi-spaces */
			sm: `${16 +  640 + 16}px`,
			md: `${16 +  768 + 16}px`,
			lg: `${16 + 1024 + 16}px`,
			xl: `${16 + 1152 + 16}px`,
			/* eslint-enable no-multi-spaces */
		},
	},
	variants: {
		...defaultVariants,
		typography: [],
	},
}
