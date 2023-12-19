import { SVGAttributes } from "react"

// https://unpkg.com/heroicons@2.1.1/24/solid/minus-small.svg
export function MinusSmall(props: SVGAttributes<SVGElement>) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" {...props}>
		  <path fillRule="evenodd" d="M5.25 12a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
		</svg>
	)
}
