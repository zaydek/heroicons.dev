import { SVGAttributes } from "react"

// https://unpkg.com/heroicons@2.0.13/20/solid/battery-50.svg
export function Battery50(props: SVGAttributes<SVGElement>) {
	return (
		<svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
			<path d="M4.75 8a.75.75 0 00-.75.75v2.5c0 .414.336.75.75.75H9.5a.75.75 0 00.75-.75v-2.5A.75.75 0 009.5 8H4.75z" />
			<path clipRule="evenodd" fillRule="evenodd" d="M3.25 5A2.25 2.25 0 001 7.25v5.5A2.25 2.25 0 003.25 15h12.5A2.25 2.25 0 0018 12.75v-1.085a1.5 1.5 0 001-1.415v-.5a1.5 1.5 0 00-1-1.415V7.25A2.25 2.25 0 0015.75 5H3.25zM2.5 7.25a.75.75 0 01.75-.75h12.5a.75.75 0 01.75.75v5.5a.75.75 0 01-.75.75H3.25a.75.75 0 01-.75-.75v-5.5z" />
		</svg>
	)
}
