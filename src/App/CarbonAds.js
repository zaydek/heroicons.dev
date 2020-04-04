import React from "react"

import "./CarbonAds.css"

const CarbonAds = ({ className, src, ...props }) => {
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

	React.useEffect(() => {
		setTimeout(() => {
			ref.current.classList.add("opacity-100")
			setTimeout(() => {
				ref.current.classList.remove("opacity-0")
			}, 0)
		}, 1e3)
	}, [])

	return <div ref={ref} className={`opacity-0 transition duration-1000 ` + className} {...props} />
}

export default CarbonAds
