import { SVGAttributes } from "react"

// https://unpkg.com/heroicons@2.0.13/24/outline/bars-3-bottom-left.svg
export function Bars3BottomLeft(props: SVGAttributes<SVGElement>) {
	return (
		<svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
			<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
		</svg>
	)
}
