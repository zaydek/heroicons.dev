import React from "react"
import toArray from "lib/x/toArray"

const Apply = ({ className, style, children }) => {
	// if (!children) {
	// 	throw new Error(`Apply: no such child; children=${children}`)
	// }
	//
	// const child = toArray(children)[0]

	return React.cloneElement(children, {
		...children.props,
		className: className + (!children.props.className ? "" : " " + children.props.className),
		style: {
			...style,
			...children.props.style,
		},
	})
}

export default Apply
