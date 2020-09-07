import React from "react"

const Style = ({ className, style, children }) => (
	React.cloneElement(children, {
		...children.props,
		className: [
			className,
			children.props.className,
		].filter(Boolean).join(" "),
		style: {
			...style,
			...children.props.style,
		},
	})
)

export default Style
