import { createElement, HTMLAttributes } from "react"
import { cx } from "../cx"

type StyledComponent = {
  <Tag extends keyof JSX.IntrinsicElements>(props: { tag?: Tag } & HTMLAttributes<JSX.IntrinsicElements[Tag]>): JSX.Element
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
  styledComponent.className = argClassName
  return styledComponent
}
