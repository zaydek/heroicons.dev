import * as serviceWorker from "./serviceWorker"
import App from "App2/App"
import React from "react"
import ReactDOM from "react-dom"

import "debug.css"

import "stylesheets/tailwind.generated.css"
import "stylesheets/color-vars.css"

ReactDOM.render(<App />, document.getElementById("root"))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
