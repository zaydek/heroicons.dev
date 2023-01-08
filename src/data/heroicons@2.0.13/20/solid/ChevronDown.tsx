import { SVGAttributes } from "react"

// https://unpkg.com/heroicons@2.0.13/20/solid/chevron-down.svg
export function ChevronDown(props: SVGAttributes<SVGElement>) {
	return (
		<svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
			<path clipRule="evenodd" fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" />
		</svg>
	)
}
