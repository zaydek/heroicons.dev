import React from "react"

export const Case = ({ children }) => (
	children
)

// <Switch on={...}>
//   <Case case={...}>
//     ...
//   <Case>
//   <Case case={...}>
//     ...
//   <Case>
//   <Case case={...}>
//     ...
//   <Case>
// </Switch>
//
export const Switch = ({ on, children }) => {
	const child = children.find(each => each.props.case === on)
	if (!child) {
		throw new Error(`Switch: no such case; on=${on}`)
	}
	return child
}
