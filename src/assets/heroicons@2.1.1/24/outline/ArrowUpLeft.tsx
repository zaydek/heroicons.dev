import { SVGAttributes } from "react"

// https://unpkg.com/heroicons@2.1.1/24/outline/arrow-up-left.svg
export function ArrowUpLeft(props: SVGAttributes<SVGElement>) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" {...props}>
		  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 19.5-15-15m0 0v11.25m0-11.25h11.25" />
		</svg>
	)
}
