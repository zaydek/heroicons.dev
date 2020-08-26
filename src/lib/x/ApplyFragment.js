import Apply from "lib/x/Apply"
import React from "react"

const ApplyFragment = ({ className, style, children }) => (
	children.map(each => (
		<Apply className={className} style={style}>
			{each}
		</Apply>
	))
)

export default Apply
