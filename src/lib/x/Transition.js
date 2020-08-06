import React from "react"

// TODO: https://developer.mozilla.org/en-US/docs/Web/API/Document/transitionend_event
const Transition = ({
	on,        // boolean
	className, // string e.g. "transition duration-150 ease-in-out"
	from,      // string e.g. "transform rotate-0"
	to,        // string e.g. "transform rotate-90"
	children,  // etc.
}) => {
	if (on === undefined || from === undefined || to === undefined) {
		throw new Error("Transition: expected props; <Transition on={...} className?='...' from='...' to='...' children={...}>")
	}

	const ref = React.useRef()

	const [classes, fromClasses, toClasses] = React.useMemo(() => {
		const classes = (className || "").split(" ").filter(Boolean)
		const fromClasses = from.split(" ").filter(Boolean)
		const toClasses = to.split(" ").filter(Boolean)
		return [classes, fromClasses, toClasses]
	}, [className, from, to])

	const mounted = React.useRef()
	React.useLayoutEffect(() => {
		const actualRef = children.ref || ref
		if (!mounted.current) {
			if (classes.length) {
				actualRef.current.classList.add(...classes)
			}
		}
		if (!on) {
			actualRef.current.classList.remove(...toClasses)
			actualRef.current.classList.add(...fromClasses)
		} else {
			actualRef.current.classList.remove(...fromClasses)
			actualRef.current.classList.add(...toClasses)
		}
	}, [
		on,
		children.ref,
		ref,
		classes,
		fromClasses,
		toClasses,
	])

	return !children.ref ? React.cloneElement(children, { ref }) : children
}

export default Transition
