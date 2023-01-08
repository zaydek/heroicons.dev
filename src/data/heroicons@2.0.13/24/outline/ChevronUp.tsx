import { SVGAttributes } from "react"

// https://unpkg.com/heroicons@2.0.13/24/outline/chevron-up.svg
export function ChevronUp(props: SVGAttributes<SVGElement>) {
	return (
		<svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
			<path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
		</svg>
	)
}
