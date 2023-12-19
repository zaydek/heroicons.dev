import { SVGAttributes } from "react"

// https://unpkg.com/heroicons@2.1.1/24/outline/arrow-down-right.svg
export function ArrowDownRight(props: SVGAttributes<SVGElement>) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" {...props}>
		  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25" />
		</svg>
	)
}
