import React from "react"

const Container = props => (
	<div className="py-32 flex flex-row justify-center min-h-full bg-gray-100">
		<div className="px-6 w-full max-w-screen-xl">
			{props.children}
		</div>
	</div>
)

export default Container
