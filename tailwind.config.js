const defaultTheme = require("tailwindcss/defaultTheme")
const defaultVariants = require("./tailwind-defaultVariants")

const tw = n => `${n * 4 / 16}rem`

module.exports = {
	// https://github.com/tailwindlabs/tailwindcss/releases#experimental-features
	experimental: {
		uniformColorPalette: true,
	},
	// future: {
	// 	removeDeprecatedGapUtilities: true,
	// },
	plugins: [
		require("@tailwindcss/ui"),
	],
	purge: [
		"./src/**/*.js",
	],
	theme: {
		extend: {
			borderRadius: {
				"1": tw(1),
				"2": tw(2),
				"3": tw(3),
				"4": tw(4),
				"5": tw(5),
				"6": tw(6),
			},
			boxShadow: {
				"px": defaultTheme.boxShadow.xs,
				"1":  defaultTheme.boxShadow.sm,
				"2":  defaultTheme.boxShadow.default,
				"3":  defaultTheme.boxShadow.md,
				"4":  defaultTheme.boxShadow.lg,
				"5":  defaultTheme.boxShadow.xl,
				"6":  defaultTheme.boxShadow["2xl"],

				"px-1": defaultTheme.boxShadow.xs + ", " + defaultTheme.boxShadow.sm,
				"px-2": defaultTheme.boxShadow.xs + ", " + defaultTheme.boxShadow.default,
				"px-3": defaultTheme.boxShadow.xs + ", " + defaultTheme.boxShadow.md,
				"px-4": defaultTheme.boxShadow.xs + ", " + defaultTheme.boxShadow.lg,
				"px-5": defaultTheme.boxShadow.xs + ", " + defaultTheme.boxShadow.xl,
				"px-6": defaultTheme.boxShadow.xs + ", " + defaultTheme.boxShadow["2xl"],
			},
			colors: {
				theme: "hsl(270, 100%, 50%)",
			},
			fontFamily: {
				sans: [...defaultTheme.fontFamily.sans.slice(0, 3), "Inter", ...defaultTheme.fontFamily.sans.slice(3)],
			},
		},
		screens: {
			sm: (640) + "px",
			md: (768) + "px",
			lg: (24 + 1024 + 24) + "px",
			xl: (24 + 1280 + 24) + "px",
		},
	},
	variants: {
		...defaultVariants,
		typography: [],

		backgroundColor: [...defaultVariants.backgroundColor, "group-hover", "group-focus"],
		scale: [...defaultVariants.scale, "group-hover", "group-focus"],
		textColor: [...defaultVariants.textColor, "group-hover", "group-focus"],
	},
}
