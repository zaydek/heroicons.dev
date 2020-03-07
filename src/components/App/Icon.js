import React from "react"

const Icon = React.forwardRef(({ prefersSolid, outline, solid, ...props }, ref) => {
	let Component = null
	if (prefersSolid) {
		Component = outline
	} else {
		Component = solid
	}
	return <Component ref={ref} {...props} />
})

export default Icon
