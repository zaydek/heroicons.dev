import { SVGAttributes } from "react"

// https://unpkg.com/heroicons@2.0.13/20/solid/minus-small.svg
export function MinusSmall(props: SVGAttributes<SVGElement>) {
	return (
		<svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
			<path d="M6.75 9.25a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z" />
		</svg>
	)
}
