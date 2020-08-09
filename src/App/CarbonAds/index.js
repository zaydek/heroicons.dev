import React from "react"

import "./index.css"

// Renders a Carbon Ads ad.
const CarbonAds = ({ src, callback, ...props }) => {
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
			const id = setTimeout(callback, 1e3)
			return () => {
				clearTimeout(id)
			}
		}, [src, callback]),
		[src],
	)

	return <div ref={ref} {...props} />
}

export default CarbonAds
