import { CSSProperties, Dispatch, HTMLAttributes, PropsWithChildren, SetStateAction, useEffect, useMemo, useRef } from "react"
import { clamp, round } from "../lib/precision"

export type AriaSliderProps = PropsWithChildren<{
	track:    HTMLElement | null
	thumb:    HTMLElement | null
	min:      number
	max:      number
	step:     number
	value:    number
	setValue: Dispatch<SetStateAction<number>>
}>

export function AriaSlider({ track, thumb, min, max, step, value, setValue, children, ...props }: AriaSliderProps & HTMLAttributes<HTMLDivElement>) {
	const pointerDownRef = useRef(false)

	const progress = useMemo(() => {
		return round((value - min) / (max - min), { precision: 2 })
	}, [max, min, value])

	const translateX = useMemo(() => {
		if (track === null || thumb === null) { return null }
		return progress * (track.getBoundingClientRect().width - thumb.getBoundingClientRect().width)
	}, [progress, thumb, track])

	// TODO: Add Number.EPSILON somewhere...
	useEffect(() => {
		if (track === null || thumb === null) { return }
		function handlePointerDown(e: PointerEvent) {
			if (!(e.button === 0 && e.composedPath().includes(track!))) { return }
			pointerDownRef.current = true
			e.preventDefault()
			const trackClient = track!.getBoundingClientRect()
			const thumbClient = thumb!.getBoundingClientRect()
			const range = clamp((e.clientX - trackClient.x - thumbClient.width / 2) / (trackClient.width - thumbClient.width), { min: 0, max: 1 })
			const value = range * (max - min) + min
			setValue(value - value % step)
		}
		function handlePointerMove(e: PointerEvent) {
			if (!pointerDownRef.current) { return }
			e.preventDefault()
			const trackClient = track!.getBoundingClientRect()
			const thumbClient = thumb!.getBoundingClientRect()
			const range = clamp((e.clientX - trackClient.x - thumbClient.width / 2) / (trackClient.width - thumbClient.width), { min: 0, max: 1 })
			const value = range * (max - min) + min
			setValue(value - value % step)
		}
		function handlePointerUp(e: PointerEvent) {
			pointerDownRef.current = false
			e.preventDefault()
		}
		document.addEventListener("pointerdown", handlePointerDown, false)
		document.addEventListener("pointermove", handlePointerMove, false)
		document.addEventListener("pointerup",   handlePointerUp,   false)
		return () => {
			document.removeEventListener("pointerdown", handlePointerDown, false)
			document.removeEventListener("pointermove", handlePointerMove, false)
			document.removeEventListener("pointerup",   handlePointerUp,   false)
		}
	}, [max, min, setValue, step, thumb, track])

	useEffect(() => {
		if (thumb === null) { return }
		thumb.style.transform = `translateX(${translateX}px)`
	}, [thumb, translateX])

	return <>
		<div
			style={{ "--progress": progress } as CSSProperties}
			onKeyDown={e => {
				if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
					e.preventDefault()
					const nextValue = value - step
					const clampedNextValue = clamp(nextValue, { min, max })
					setValue(clampedNextValue)
				} else if (e.key === "ArrowDown" || e.key === "ArrowRight") {
					e.preventDefault()
					const nextValue = value + step
					const clampedNextValue = clamp(nextValue, { min, max })
					setValue(clampedNextValue)
				}
			}}
			role="slider"
			aria-valuemin={min}
			aria-valuemax={max}
			aria-valuenow={value}
			tabIndex={0}
			{...props}
		>
			{children}
		</div>
	</>
}
