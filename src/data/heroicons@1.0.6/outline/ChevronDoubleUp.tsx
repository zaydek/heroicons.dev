import { SVGAttributes } from "react"

// https://unpkg.com/heroicons@1.0.6/outline/chevron-double-up.svg
export function ChevronDoubleUp(props: SVGAttributes<SVGElement>) {
	return (
		<svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
			<path strokeLinecap="round" strokeLinejoin="round" d="M5 11l7-7 7 7M5 19l7-7 7 7" />
		</svg>
	)
}
