import React from "react"

const Apply = ({ className, style, children }) => (
	React.cloneElement(children, {
		...children.props,
		className: className + (!children.props.className ? "" : " " + children.props.className),
		style: {
			...style,
			...children.props.style,
		},
	})
)

export default Apply
