import { Dispatch, HTMLAttributes, SetStateAction } from "react"

export function AriaCheckbox({ checked, setChecked, children, ...props }: {
	checked:    boolean
	setChecked: Dispatch<SetStateAction<boolean>>
} & HTMLAttributes<HTMLDivElement>) {
	return <>
		<div
			onClick={e => {
				e.preventDefault()
				setChecked(curr => !curr)
			}}
			onKeyDown={e => {
				if (e.key === " ") {
					e.preventDefault()
					e.currentTarget.click()
				}
			}}
			role="checkbox"
			aria-checked={checked}
			tabIndex={0}
			{...props}
		>
			{children}
		</div>
	</>
}
