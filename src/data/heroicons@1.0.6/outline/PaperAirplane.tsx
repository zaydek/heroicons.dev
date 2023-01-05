import { SVGAttributes } from "react"

// https://unpkg.com/heroicons@1.0.6/outline/paper-airplane.svg
export function PaperAirplane(props: SVGAttributes<SVGElement>) {
	return (
		<svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
			<path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
		</svg>
	)
}
