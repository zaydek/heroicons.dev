import { createElement, forwardRef, ForwardRefExoticComponent } from "react"
import { cx } from "../cx"

//// export type StyledComponent = {
//// 	<Props extends {}, Tag extends keyof JSX.IntrinsicElements = "div">
//// 		(props:
//// 			| ({ tag?: Tag } & JSX.IntrinsicElements[Tag])
//// 			| ({ as?: (_: Props) => JSX.Element } & Props)
//// 		): JSX.Element
////
//// 	Forward:   ForwardRefExoticComponent<any>
//// 	className: string
//// }

//// type StyledComponent = {
//// 	<Tag extends keyof JSX.IntrinsicElements>
//// 		(props: { tag: Tag } & HTMLAttributes<JSX.IntrinsicElements[Tag]>):
//// 			JSX.Element
////
//// 	Forward:   ForwardRefExoticComponent<any>
//// 	className: string
//// }

export type StyledComponent = {
	<Props extends {}, Tag extends keyof JSX.IntrinsicElements = "div">
		(props:
			| ({ tag?: Tag } & JSX.IntrinsicElements[Tag])
			| ({ as?: (_: Props) => JSX.Element } & Props)
		): JSX.Element

	Forward:   ForwardRefExoticComponent<any>
	className: string
}

export function createStyled(argClassName: string) {
	// @ts-expect-error
	const styledComponent: StyledComponent = ({ tag, as, className, children, ...props }) => {
		return createElement(as ?? tag ?? "div", {
			className: cx(
				argClassName,
				className,
			),
			...props,
		}, children)
	}
	styledComponent.Forward = forwardRef(({ tag, as, className, children, ...props }, ref) => {
		return createElement(as ?? tag ?? "div", {
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
