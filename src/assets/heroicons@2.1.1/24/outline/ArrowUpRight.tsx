import { SVGAttributes } from "react"

// https://unpkg.com/heroicons@2.1.1/24/outline/arrow-up-right.svg
export function ArrowUpRight(props: SVGAttributes<SVGElement>) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" {...props}>
		  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
		</svg>
	)
}
