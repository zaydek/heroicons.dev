import Apply from "lib/x/Apply"
import React from "react"

const ApplyTransition = ({ children }) => (
	<Apply className="transition duration-200 ease-in-out">
		{children}
	</Apply>
)

export default ApplyTransition
