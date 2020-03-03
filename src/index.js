import * as serviceWorker from "./serviceWorker"
import App from "./components/App"
import React from "react"
import ReactDOM from "react-dom"

import "debug.css"
// import "stylesheets/reset-input.css"
import "stylesheets/tailwind.generated.css"

ReactDOM.render(<App />, document.getElementById("root"))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
