import { SVGAttributes } from "react"

// https://unpkg.com/heroicons@2.0.13/24/outline/arrow-small-right.svg
export function ArrowSmallRight(props: SVGAttributes<SVGElement>) {
	return (
		<svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
			<path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
		</svg>
	)
}
