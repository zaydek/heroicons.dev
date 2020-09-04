import React from "react"
import toArray from "lib/x/toArray"

const Apply = ({ className, style, children }) => {
	if (!children) {
		throw new Error(`Apply: no such child; children=${children}`)
	}

	const child = toArray(children)[0]

	return React.cloneElement(child, {
		...child.props,
		className: className + (!child.props.className ? "" : " " + child.props.className),
		style: {
			...style,
			...child.props.style,
		},
	})
}

export default Apply
