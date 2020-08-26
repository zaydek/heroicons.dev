// FIXME: Attempted import error: 'theme' is not exported
// from 'tailwindcss/js/tailwind.config.js' (imported as
// 'tailwindcss').
const tailwindcss = {
	theme: {
		screens: {
			xs: `${16 + 512 + 16}px`,
			// => @media (min-width: 540px) { ... }

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
}

export default tailwindcss
