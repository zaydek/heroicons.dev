import { createContext, PropsWithChildren, useCallback, useEffect, useMemo, useState } from "react"

const TICK = 200
const TICK_END = 400

export const ProgressBarContext =
	createContext<{
		progress: number
	} | null>(null)
export const DispatchProgressBarContext =
	createContext<{
		start:    () => void
		end:      () => void
	} | null>(null)

export function ProgressBarProvider({ children }: PropsWithChildren) {
	const [started, setStarted] = useState(false)
	const [progress, setProgress] = useState(0)

	useEffect(() => {
		if (!started) { return }
		const intervalId = setInterval(() => {
			if (progress >= 0.95) {
				clearInterval(intervalId)
				return
			}
			setProgress(curr => Math.min(0.95, curr + Math.random() * 0.25))
		}, 250)
		return () => clearInterval(intervalId)
	}, [progress, started])

	const start = useCallback((value: number = 0.5) => {
		setStarted(true)
		setProgress(value)
	}, [])

	const end = useCallback(() => {
		setStarted(false)
		setProgress(1)
	}, [])

	const working = useMemo(() => {
		return progress > 0 && progress < 1
	}, [progress])

	return <>
		<ProgressBarContext.Provider value={useMemo(() => ({
			progress,
		}), [progress])}>
			<DispatchProgressBarContext.Provider value={useMemo(() => ({
				start,
				end,
			}), [end, start])}>
				<div
					className="fixed inset-t-0 z-999 h-4 bg-color-hsl(200,_100%,_50%)"
					style={{
						"width": `${progress * 100}%`,
						"opacity": working ? "initial" : 0,
						"transition": [
							`width ${TICK}ms ease`,
							!working && `opacity ${TICK_END}ms ease ${TICK}ms`,
						].filter(Boolean).join(", "),
					}}
					onTransitionEnd={e => {
						if (e.propertyName === "opacity") {
							setProgress(0)
						}
					}}
				></div>
				{children}
			</DispatchProgressBarContext.Provider>
		</ProgressBarContext.Provider>
	</>
}
