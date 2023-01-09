import "the-new-css-reset"
import "uno.css"

import "./css/base.scss"
import "./css/vars.scss"

import "./css/form.scss"
import "./css/layout.scss"
import "./css/typography.scss"

import { createRoot, hydrateRoot } from "react-dom/client"
import { App } from "./app"

const root = document.getElementById("root")!
if (typeof window === "undefined") {
	hydrateRoot(root, <App />)
} else {
	createRoot(root).render(<App />)
}
