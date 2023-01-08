import { SVGAttributes } from "react"

// https://unpkg.com/heroicons@2.0.13/24/outline/arrow-small-up.svg
export function ArrowSmallUp(props: SVGAttributes<SVGElement>) {
	return (
		<svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
			<path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
		</svg>
	)
}
