const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
	theme: {
		extend: {
			borderRadius: {
				"xl":  "1rem",
				"2xl": "2rem",
			},
			boxShadow: {
				"hero-sm": `
					0 0 0 1px rgba(0, 0, 0, 0.05),
					0 1px 2px 0 rgba(0, 0, 0, 0.05)
				`,
				"hero": `
					0 0 0 1px rgba(0, 0, 0, 0.05),
					0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)
				`,
				"hero-md": `
					0 0 0 1px rgba(0, 0, 0, 0.05),
					0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)
				`,
				"hero-lg": `
					0 0 0 1px rgba(0, 0, 0, 0.05),
					0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)
				`,
				"hero-xl": `
					0 0 0 1px rgba(0, 0, 0, 0.05),
					0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)
				`,
				"hero-2xl": `
					0 0 0 1px rgba(0, 0, 0, 0.05),
					0 25px 50px -12px rgba(0, 0, 0, 0.25)
				`,
			},
			fontFamily: {
				...defaultTheme.fontFamily,
				"sans-round": "'DM Sans', sans-serif",
			},
			letterSpacing: {
				"-px": "-0.0125em",
				"px":  "0.0125em",
			},
			// https://youtube.com/watch?v=jl_tdhBxc_Y
			spacing: {
				"1/1": "100%",
			},
			// https://feathericons.com
			strokeWidth: {
				hairline:  1,    // 100
				thin:      1.33, // 200
				light:     1.67, // 300
				normal:    2,    // 400
				medium:    2.33, // 500
				semibold:  2.67, // 600
				bold:      3,    // 700
				extrabold: 3.33, // 800
				black:     4,    // 900
			},
		},
	},
	variants: {
		zIndex: ["hover"],
	},
	plugins: [],
}
