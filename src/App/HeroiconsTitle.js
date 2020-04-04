import React from "react"

// Sets the document title (uses useEffect).
const DocumentTitle = ({ title, ...props }) => {
	React.useEffect(() => {
		if (!title) {
			// No-op
			return
		}
		document.title = title
	}, [title])
	return props.children || null
}

const HeroiconsTitle = ({ title, ...props }) => {
	return <DocumentTitle title={title || "Heroicons"} {...props} />
}

export default HeroiconsTitle
