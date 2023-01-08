import { SVGAttributes } from "react"

// https://unpkg.com/heroicons@2.0.13/24/outline/arrow-up-right.svg
export function ArrowUpRight(props: SVGAttributes<SVGElement>) {
	return (
		<svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
			<path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
		</svg>
	)
}
