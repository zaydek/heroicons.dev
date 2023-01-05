import { SVGAttributes } from "react"

// https://unpkg.com/heroicons@1.0.6/solid/bookmark.svg
export function Bookmark(props: SVGAttributes<SVGElement>) {
	return (
		<svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
			<path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
		</svg>
	)
}
