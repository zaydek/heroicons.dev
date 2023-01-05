import { SVGAttributes } from "react"

// https://unpkg.com/heroicons@1.0.6/outline/arrow-sm-down.svg
export function ArrowSmDown(props: SVGAttributes<SVGElement>) {
	return (
		<svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
			<path strokeLinecap="round" strokeLinejoin="round" d="M17 13l-5 5m0 0l-5-5m5 5V6" />
		</svg>
	)
}
