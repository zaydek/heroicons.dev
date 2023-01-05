import { SVGAttributes } from "react"

// https://unpkg.com/heroicons@1.0.6/outline/arrow-down.svg
export function ArrowDown(props: SVGAttributes<SVGElement>) {
	return (
		<svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
			<path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
		</svg>
	)
}
