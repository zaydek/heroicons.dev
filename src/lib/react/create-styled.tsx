import { createElement, forwardRef, ForwardRefExoticComponent, HTMLAttributes } from "react"
import { cx } from "../cx"

type StyledComponent = {
	<Tag extends keyof JSX.IntrinsicElements>
		(props: { tag?: Tag } & HTMLAttributes<JSX.IntrinsicElements[Tag]>):
			JSX.Element

	Forward:   ForwardRefExoticComponent<any>
	className: string
}

export function createStyled(argClassName: string) {
	const styledComponent: StyledComponent = ({ tag, className, children, ...props }) => {
		return createElement(tag ?? "div", {
			className: cx(
				argClassName,
				className,
			),
			...props,
		}, children)
	}
	styledComponent.Forward = forwardRef(({ tag, className, children, ...props }, ref) => {
		return createElement(tag ?? "div", {
			ref,
			className: cx(
				argClassName,
				className,
			),
			...props,
		}, children)
	})
	styledComponent.className = argClassName
	return styledComponent
}
