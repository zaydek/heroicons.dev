module.exports = {
	dark: "class",
	experimental: {
		darkModeVariant: true,
	},
	plugins: [
		require("@tailwindcss/ui"),
	],
	variants: {
		opacity: ({ after }) => after(["group-hover", "group-focus"]),
		scale: ({ after }) => after(["group-hover", "group-focus"]),
		textColor: ({ after }) => after(["group-hover", "group-focus"]),
	},
}
