import { SVGAttributes } from "react"

// https://unpkg.com/heroicons@2.0.13/20/solid/play-pause.svg
export function PlayPause(props: SVGAttributes<SVGElement>) {
	return (
		<svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
			<path d="M12.75 4a.75.75 0 00-.75.75v10.5c0 .414.336.75.75.75h.5a.75.75 0 00.75-.75V4.75a.75.75 0 00-.75-.75h-.5zM17.75 4a.75.75 0 00-.75.75v10.5c0 .414.336.75.75.75h.5a.75.75 0 00.75-.75V4.75a.75.75 0 00-.75-.75h-.5zM3.288 4.819A1.5 1.5 0 001 6.095v7.81a1.5 1.5 0 002.288 1.277l6.323-3.906a1.5 1.5 0 000-2.552L3.288 4.819z" />
		</svg>
	)
}
