import { SVGAttributes } from "react"

// https://unpkg.com/heroicons@2.0.13/20/solid/magnifying-glass-minus.svg
export function MagnifyingGlassMinus(props: SVGAttributes<SVGElement>) {
	return (
		<svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
			<path d="M6.75 8.25a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5z" />
			<path clipRule="evenodd" fillRule="evenodd" d="M9 2a7 7 0 104.391 12.452l3.329 3.328a.75.75 0 101.06-1.06l-3.328-3.329A7 7 0 009 2zM3.5 9a5.5 5.5 0 1111 0 5.5 5.5 0 01-11 0z" />
		</svg>
	)
}
