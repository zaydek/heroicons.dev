import { SVGAttributes } from "react"

// https://unpkg.com/heroicons@1.0.6/outline/lightning-bolt.svg
export function LightningBolt(props: SVGAttributes<SVGElement>) {
	return (
		<svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
			<path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
		</svg>
	)
}
