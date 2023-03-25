import "the-new-css-reset"
import "uno.css"

import "./css/base.scss"
import "./css/vars.scss"

import "./css/form.scss"
import "./css/layout.scss"
import "./css/typography.scss"

import { createRoot } from "react-dom/client"
import { App } from "./app"
import { ProgressBarProvider } from "./progress-bar"
import { SidebarProvider } from "./providers/sidebars"
import { StateProvider } from "./providers/state"

//// const root = document.getElementById("root")!
//// if (import.meta.env.DEV) {
//// 	console.log("[DEBUG] createRoot")
//// 	createRoot(root).render(<App />)
//// } else {
//// 	console.log("[DEBUG] hydrateRoot")
//// 	hydrateRoot(root, <App />)
//// }

function ProvidedApp() {
	return <>
		<ProgressBarProvider>
			<SidebarProvider>
				<StateProvider>
					<App />
				</StateProvider>
			</SidebarProvider>
		</ProgressBarProvider>
	</>
}

const root = document.getElementById("root")!
createRoot(root).render(<ProvidedApp />)
