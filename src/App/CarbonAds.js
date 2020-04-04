import React from "react"
import ReactDOM from "react-dom"

import "./CarbonAds.css"

const CarbonAds = ({ src, ...props }) => {
	const ref = React.useRef()

	// Creates a Carbon Ads element for mounting to the DOM.
	//
	// <script async type="text/javascript" src={src} id="_carbonads_js"></script>
	React.useEffect(() => {
		const script = document.createElement("script")
		script.async = true
		script.src = src
		script.id = "_carbonads_js"
		ref.current.appendChild(script)
	}, [src])

	return <div ref={ref} {...props} />
}

export default CarbonAds
