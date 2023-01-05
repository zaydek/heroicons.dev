import "the-new-css-reset"
import "uno.css"

import "./index.scss"

import ReactDOM from "react-dom/client"
import { App } from "./app"
import { ProgressBarProvider } from "./progress-bar"
import { StateProvider } from "./state"

ReactDOM
  .createRoot(document.getElementById("root")!)
  .render(<>
    <ProgressBarProvider>
      <StateProvider>
        <App />
      </StateProvider>
    </ProgressBarProvider>
  </>)
