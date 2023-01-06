import { HTMLAttributes } from "react"

export function AriaButton({ children, ...props }: HTMLAttributes<HTMLDivElement>) {
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
