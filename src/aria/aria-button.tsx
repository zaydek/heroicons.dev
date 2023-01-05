import { DOMProps } from "../lib/react/extra-types.dom"

export function AriaButton({ children, ...props }: DOMProps) {
	return <>
		<div
			onKeyDown={e => {
				if (e.key === " ") {
					e.preventDefault()
					e.currentTarget.click()
				}
			}}
			role="button"
			tabIndex={0}
			{...props}
		>
			{children}
		</div>
	</>
}
