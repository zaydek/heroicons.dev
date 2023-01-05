import { SVGAttributes } from "react"

// https://unpkg.com/heroicons@1.0.6/outline/arrow-sm-up.svg
export function ArrowSmUp(props: SVGAttributes<SVGElement>) {
	return (
		<svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
			<path strokeLinecap="round" strokeLinejoin="round" d="M7 11l5-5m0 0l5 5m-5-5v12" />
		</svg>
	)
}
