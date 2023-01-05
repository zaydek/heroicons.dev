import { SetState } from "../lib/react/extra-types"
import { DOMProps } from "../lib/react/extra-types.dom"

export function AriaCheckbox({ checked, setChecked, children, ...props }: { checked: boolean, setChecked: SetState<boolean> } & DOMProps) {
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
