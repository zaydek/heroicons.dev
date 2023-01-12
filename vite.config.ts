import reactJs from "@vitejs/plugin-react"
import unoCss from "unocss/vite"
import { defineConfig } from "vite"

export default defineConfig({
	plugins: [
		unoCss(),
		reactJs({
			babel: {
				"plugins": ["styled-jsx/babel"],
			},
		}),
	],
	preview: { host: true, port: 3000 },
	server:  { host: true, port: 3000 },
})
