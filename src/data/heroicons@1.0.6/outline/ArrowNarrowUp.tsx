import { SVGAttributes } from "react"

// https://unpkg.com/heroicons@1.0.6/outline/arrow-narrow-up.svg
export function ArrowNarrowUp(props: SVGAttributes<SVGElement>) {
	return (
		<svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
			<path strokeLinecap="round" strokeLinejoin="round" d="M8 7l4-4m0 0l4 4m-4-4v18" />
		</svg>
	)
}
