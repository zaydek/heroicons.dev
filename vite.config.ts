import reactJs from "@vitejs/plugin-react"
import unoCss from "unocss/vite"
import { defineConfig } from "vite"

export default defineConfig({
	css: {
		modules: {
			localsConvention: "camelCase",
		},
	},
	plugins: [
		unoCss(),
		reactJs({
			fastRefresh: false,
		}),
	],
	preview: { host: true, port: 3000 },
	server:  { host: true, port: 3000 },
})
