import { SVGAttributes } from "react"

// https://unpkg.com/heroicons@2.1.1/16/solid/chart-bar-square.svg
export function ChartBarSquare(props: SVGAttributes<SVGElement>) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" data-slot="icon" {...props}>
		  <path fillRule="evenodd" d="M4 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4Zm.75 7a.75.75 0 0 0-.75.75v1.5a.75.75 0 0 0 1.5 0v-1.5A.75.75 0 0 0 4.75 9Zm2.5-1.75a.75.75 0 0 1 1.5 0v4a.75.75 0 0 1-1.5 0v-4Zm4-3.25a.75.75 0 0 0-.75.75v6.5a.75.75 0 0 0 1.5 0v-6.5a.75.75 0 0 0-.75-.75Z" clipRule="evenodd" />
		</svg>
	)
}
