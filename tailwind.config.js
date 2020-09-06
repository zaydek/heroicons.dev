const defaultTheme = require("tailwindcss/defaultTheme")
const defaultVariants = require("./tailwind-defaultVariants.1.8.3")

const tw = n => `${n * 4 / 16}rem`

module.exports = {
	// dark: "class",
	experimental: {
		// darkModeVariant: true,
		uniformColorPalette: true,
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
				"1": tw(1),
				"2": tw(2),
				"3": tw(3),
				"4": tw(4),
				"5": tw(5),
				"6": tw(6),
			},
			boxShadow: {
				"px": defaultTheme.boxShadow.xs,
				"1": defaultTheme.boxShadow.sm,
				"2": defaultTheme.boxShadow.default,
				"3": defaultTheme.boxShadow.md,
				"4": defaultTheme.boxShadow.lg,
				"5": defaultTheme.boxShadow.xl,
				"6": defaultTheme.boxShadow["2xl"],
				"px-1": defaultTheme.boxShadow.xs + ", " + defaultTheme.boxShadow.sm,
				"px-2": defaultTheme.boxShadow.xs + ", " + defaultTheme.boxShadow.default,
				"px-3": defaultTheme.boxShadow.xs + ", " + defaultTheme.boxShadow.md,
				"px-4": defaultTheme.boxShadow.xs + ", " + defaultTheme.boxShadow.lg,
				"px-5": defaultTheme.boxShadow.xs + ", " + defaultTheme.boxShadow.xl,
				"px-6": defaultTheme.boxShadow.xs + ", " + defaultTheme.boxShadow["2xl"],
			},
			colors: {
				theme: "hsl(270, 100%, 50%)",
				"dark-theme": "hsl(270, 100%, 43.75%)",
			},
			fontFamily: {
				sans: [
					...defaultTheme.fontFamily.sans.slice(0, 3),
					"Inter",
					...defaultTheme.fontFamily.sans.slice(3),
				],
			},
			opacity: {
				0: "0",
				6.25: "0.0625",
				12.5: "0.125",
				18.75: "0.1875",
				25: "0.25",
				75: "0.75",
				81.25: "0.8125",
				87.5: "0.875",
				93.75: "0.9375",
				100: "1",
			},
		},
		screens: {
			sm: (640) + "px",
			md: (768) + "px",
			lg: (24 + 1024 + 24) + "px",
			xl: (24 + 1280 + 24) + "px",
			dark: {
				raw: "(prefers-color-scheme: dark)",
			},
		},
	},
	variants: {
		...defaultVariants,
		opacity: [...defaultVariants.opacity, "group-hover", "group-focus"],
		scale: [...defaultVariants.scale, "group-hover", "group-focus"],
		textColor: [...defaultVariants.textColor, "group-hover", "group-focus"],
	},
}
