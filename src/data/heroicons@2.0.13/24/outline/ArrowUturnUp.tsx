import { SVGAttributes } from "react"

// https://unpkg.com/heroicons@2.0.13/24/outline/arrow-uturn-up.svg
export function ArrowUturnUp(props: SVGAttributes<SVGElement>) {
	return (
		<svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
			<path strokeLinecap="round" strokeLinejoin="round" d="M9 9l6-6m0 0l6 6m-6-6v12a6 6 0 01-12 0v-3" />
		</svg>
	)
}
