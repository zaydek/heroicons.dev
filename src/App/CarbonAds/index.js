import React from "react"

import "./index.css"

// Renders a Carbon Ads ad.
const CarbonAds = ({ src, onLoad, ...props }) => {
	const ref = React.useRef()

	// Mounts a Carbon Ads ad.
	React.useEffect(
		React.useCallback(() => {
			// <script async type="text/javascript" src={src} id="_carbonads_js">
			const script = document.createElement("script")
			script.async = true
			script.src = src
			script.id = "_carbonads_js"
			ref.current.appendChild(script)
			script.onload = onLoad
		}, [src, onLoad]),
		[src],
	)

	return <div ref={ref} {...props} />
}

export default CarbonAds
