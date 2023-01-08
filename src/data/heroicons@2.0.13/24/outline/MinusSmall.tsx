import { SVGAttributes } from "react"

// https://unpkg.com/heroicons@2.0.13/24/outline/minus-small.svg
export function MinusSmall(props: SVGAttributes<SVGElement>) {
	return (
		<svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
			<path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
		</svg>
	)
}
