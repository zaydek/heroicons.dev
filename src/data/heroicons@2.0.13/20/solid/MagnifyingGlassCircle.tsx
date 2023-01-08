import { SVGAttributes } from "react"

// https://unpkg.com/heroicons@2.0.13/20/solid/magnifying-glass-circle.svg
export function MagnifyingGlassCircle(props: SVGAttributes<SVGElement>) {
	return (
		<svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
			<path d="M6.5 9a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0z" />
			<path clipRule="evenodd" fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9 5a4 4 0 102.248 7.309l1.472 1.471a.75.75 0 101.06-1.06l-1.471-1.472A4 4 0 009 5z" />
		</svg>
	)
}
