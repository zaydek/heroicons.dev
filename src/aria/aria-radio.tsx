import { createContext, Dispatch, HTMLAttributes, PropsWithChildren, SetStateAction, useContext, useEffect, useMemo, useRef, useState } from "react"

const RadiogroupContext = createContext<{
	groupValue:    string
	setGroupValue: Dispatch<SetStateAction<string>>
	values:        string[]
	setValues:     Dispatch<SetStateAction<string[]>>
} | null>(null)

export function AriaRadiogroup({ groupValue, setGroupValue, children, ...props }: PropsWithChildren<{
	groupValue:    string
	setGroupValue: Dispatch<SetStateAction<string>>
}> & HTMLAttributes<HTMLDivElement>) {
	const [values, setValues] = useState<string[]>([])

	return <>
		<RadiogroupContext.Provider value={{
			groupValue,
			setGroupValue,
			values,
			setValues,
		}}>
			<div
				role="radiogroup"
				{...props}
			>
				{children}
			</div>
		</RadiogroupContext.Provider>
	</>
}

export function AriaRadio({ value, children, ...props }: { value: string } & HTMLAttributes<HTMLDivElement>) {
	const radiogroup = useContext(RadiogroupContext)!
	const checked = useMemo(() => radiogroup.groupValue === value, [radiogroup.groupValue, value])

	const ref = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		radiogroup.setValues(curr => [...curr, value])
		return () => {
			radiogroup.setValues(curr => {
				const index = curr.indexOf(value)
				return [
					...curr.slice(0, index),
					...curr.slice(index + 1),
				]
			})
		}
	}, [value]) // eslint-disable-line react-hooks/exhaustive-deps

	// NOTE: In dev mode, <StrictMode> calls this effect twice therefore focusing
	// ref.current
	const onceRef = useRef(false)
	useEffect(() => {
		if (!onceRef.current) {
			onceRef.current = true
			return
		}
		if (ref.current === null) { return }
		if (checked) { ref.current.focus() }
	}, [checked])

	return <>
		<div
			ref={ref}
			onClick={e => {
				e.preventDefault()
				radiogroup.setGroupValue(value)
			}}
			onKeyDown={e => {
				if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
					e.preventDefault()
					const nextValue = radiogroup.values.indexOf(value) - 1
					if (nextValue < 0) {
						radiogroup.setGroupValue(radiogroup.values[radiogroup.values.length - 1])
					} else {
						radiogroup.setGroupValue(radiogroup.values[nextValue])
					}
				} else if (e.key === "ArrowDown" || e.key === "ArrowRight") {
					e.preventDefault()
					const nextValue = radiogroup.values.indexOf(value) + 1
					if (nextValue === radiogroup.values.length) {
						radiogroup.setGroupValue(radiogroup.values[0])
					} else {
						radiogroup.setGroupValue(radiogroup.values[nextValue])
					}
				}
			}}
			role="radio"
			aria-checked={checked}
			tabIndex={checked ? 0 : -1}
			{...props}
		>
			{children}
		</div>
	</>
}
