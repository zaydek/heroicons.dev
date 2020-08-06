import React from "react"

// <DocumentTitle title="...">
//   ...
// </DocumentTitle>
//
// OR
//
// <DocumentTitle title="..." />
//
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
