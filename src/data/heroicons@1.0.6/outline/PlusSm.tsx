import { SVGAttributes } from "react"

// https://unpkg.com/heroicons@1.0.6/outline/plus-sm.svg
export function PlusSm(props: SVGAttributes<SVGElement>) {
	return (
		<svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
			<path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
		</svg>
	)
}
