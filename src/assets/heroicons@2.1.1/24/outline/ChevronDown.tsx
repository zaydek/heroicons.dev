import { SVGAttributes } from "react"

// https://unpkg.com/heroicons@2.1.1/24/outline/chevron-down.svg
export function ChevronDown(props: SVGAttributes<SVGElement>) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" {...props}>
		  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
		</svg>
	)
}
