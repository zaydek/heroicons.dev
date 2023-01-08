import { SVGAttributes } from "react"

// https://unpkg.com/heroicons@2.0.13/24/outline/arrow-uturn-down.svg
export function ArrowUturnDown(props: SVGAttributes<SVGElement>) {
	return (
		<svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
			<path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-6 6m0 0l-6-6m6 6V9a6 6 0 0112 0v3" />
		</svg>
	)
}
