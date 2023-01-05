import { SVGAttributes } from "react"

// https://unpkg.com/heroicons@1.0.6/outline/chevron-left.svg
export function ChevronLeft(props: SVGAttributes<SVGElement>) {
	return (
		<svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
			<path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
		</svg>
	)
}
