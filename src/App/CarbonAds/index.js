import React from "react"

import "./index.css"

// Renders a Carbon Ads ad.
const CarbonAds = ({ src, ...props }) => {
	const containerRef = React.useRef()

	const [done, setDone] = React.useState(false)

	// Mounts Carbon Ads to the DOM.
	//
	// <script async type="text/javascript" src={src} id="_carbonads_js">
	//
	React.useLayoutEffect(() => {
		const script = document.createElement("script")
		script.async = true
		script.src = src
		script.id = "_carbonads_js"
		containerRef.current.appendChild(script) // Takes precedence
		script.onload = () => {
			setDone(true)
		}
	}, [src])

	// // TODO: Use <Transition>
	// React.useEffect(() => {
	// 	if (!done) {
	// 		// No-op
	// 		return
	// 	}
	// 	setTimeout(() => {
	// 		ref.current.classList.add("opacity-100")
	// 		setTimeout(() => {
	// 			ref.current.classList.remove("opacity-0")
	// 		}, 0)
	// 	}, 1e3)
	// }, [done])
	//
	// // eslint-disable-next-line no-useless-concat
	// return <div ref={ref} className={"opacity-0 transition duration-1000" + ` ${className}`} {...props} />

	return <div ref={containerRef} {...props} />
}

export default CarbonAds
