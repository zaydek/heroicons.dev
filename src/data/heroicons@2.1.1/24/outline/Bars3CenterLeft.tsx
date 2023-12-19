import { SVGAttributes } from "react"

// https://unpkg.com/heroicons@2.1.1/24/outline/bars-3-center-left.svg
export function Bars3CenterLeft(props: SVGAttributes<SVGElement>) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" {...props}>
		  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
		</svg>
	)
}
