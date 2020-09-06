import React from "react"

const DocumentTitle = ({ title, children }) => {
	React.useEffect(() => {
		const originalTitle = document.title
		document.title = title
		return () => {
			document.title = originalTitle
		}
	}, [title])

	return children || null
}

export default DocumentTitle
