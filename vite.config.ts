import react from "@vitejs/plugin-react"
import uno from "unocss/vite"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [
    uno(),
    react({
      fastRefresh: false,
    }),
  ],
  preview: { host: true, port: 3000 },
  server:  { host: true, port: 3000 },
})
