import * as React from "react"

function FolderRemoveIcon(props) {
	// return <svg viewBox="0 0 20 20" fill="currentColor" {...props}><path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" /><path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11h4" /></svg>;
	// return (
	// 	<svg viewBox="0 0 20 20" fill="currentColor" {...props}>
	// 		<path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
	// 		<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11h4" />
	// 	</svg>
	// )
	return (
		<svg viewBox="0 0 20 20" fill="currentColor" {...props}>
			<path
				clipRule="evenodd"
				d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm4 6a1 1 0 000 2h4a1 1 0 000-2H8z"
				fillRule="evenodd"
			/>
		</svg>
	)
}

export default FolderRemoveIcon
