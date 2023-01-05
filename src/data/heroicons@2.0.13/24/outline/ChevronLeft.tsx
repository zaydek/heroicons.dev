import { SVGAttributes } from "react"

// https://unpkg.com/heroicons@2.0.13/24/outline/chevron-left.svg
export function ChevronLeft(props: SVGAttributes<SVGElement>) {
	return (
		<svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
			<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
		</svg>
	)
}
