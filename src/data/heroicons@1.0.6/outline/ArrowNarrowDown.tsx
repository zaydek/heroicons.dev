import { SVGAttributes } from "react"

// https://unpkg.com/heroicons@1.0.6/outline/arrow-narrow-down.svg
export function ArrowNarrowDown(props: SVGAttributes<SVGElement>) {
	return (
		<svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
			<path strokeLinecap="round" strokeLinejoin="round" d="M16 17l-4 4m0 0l-4-4m4 4V3" />
		</svg>
	)
}
