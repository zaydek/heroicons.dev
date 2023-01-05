import { SVGAttributes } from "react"

// https://unpkg.com/heroicons@2.0.13/20/solid/eye.svg
export function Eye(props: SVGAttributes<SVGElement>) {
	return (
		<svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
			<path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
			<path clipRule="evenodd" fillRule="evenodd" d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z" />
		</svg>
	)
}
