import React from "react"

const Icon = React.forwardRef(({ svg: SVG, ...props }, ref) => (
	// eslint-disable-next-line react/jsx-pascal-case
	<SVG ref={ref} {...props} />
))

export default Icon
