import { SVGAttributes } from "react"

// https://unpkg.com/heroicons@1.0.6/outline/menu-alt-1.svg
export function MenuAlt1(props: SVGAttributes<SVGElement>) {
	return (
		<svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
			<path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h8m-8 6h16" />
		</svg>
	)
}
