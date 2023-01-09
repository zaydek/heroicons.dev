import "the-new-css-reset"
import "uno.css"

import "./css/base.scss"
import "./css/vars.scss"

import "./css/form.scss"
import "./css/layout.scss"
import "./css/typography.scss"

import { createRoot } from "react-dom/client"
import { App } from "./app"

//// const root = document.getElementById("root")!
//// if (import.meta.env.DEV) {
//// 	console.log("[DEBUG] createRoot")
//// 	createRoot(root).render(<App />)
//// } else {
//// 	console.log("[DEBUG] hydrateRoot")
//// 	hydrateRoot(root, <App />)
//// }

createRoot(document.getElementById("root")!)
	.render(<App />)
