import { SVGAttributes } from "react"

// https://unpkg.com/heroicons@1.0.6/outline/chevron-double-down.svg
export function ChevronDoubleDown(props: SVGAttributes<SVGElement>) {
	return (
		<svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
			<path strokeLinecap="round" strokeLinejoin="round" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
		</svg>
	)
}
