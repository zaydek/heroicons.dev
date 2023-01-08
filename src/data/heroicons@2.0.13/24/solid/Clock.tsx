import { SVGAttributes } from "react"

// https://unpkg.com/heroicons@2.0.13/24/solid/clock.svg
export function Clock(props: SVGAttributes<SVGElement>) {
	return (
		<svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
			<path clipRule="evenodd" fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" />
		</svg>
	)
}
