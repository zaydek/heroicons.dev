import Apply from "lib/x/Apply"
import React from "react"

const ApplyTransition = ({ children, ...props }) => (
	<Apply className="transition duration-200 ease-in-out" {...props}>
		{children}
	</Apply>
)

export default ApplyTransition
