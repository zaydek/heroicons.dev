import { SVGAttributes } from "react"

// https://unpkg.com/heroicons@2.1.1/20/solid/arrow-small-down.svg
export function ArrowSmallDown(props: SVGAttributes<SVGElement>) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" {...props}>
		  <path fillRule="evenodd" d="M10 5a.75.75 0 0 1 .75.75v6.638l1.96-2.158a.75.75 0 1 1 1.08 1.04l-3.25 3.5a.75.75 0 0 1-1.08 0l-3.25-3.5a.75.75 0 1 1 1.08-1.04l1.96 2.158V5.75A.75.75 0 0 1 10 5Z" clipRule="evenodd" />
		</svg>
	)
}
