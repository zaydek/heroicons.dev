import React from "react"

// const { xs, sm, md, lg, xl } = useLayoutBreakpoints(tailwindcss.theme.screens)
const useLayoutBreakpoints = breakpoints => {
	// Convert "px" breakpoints to numbers:
	const breakpointNmbrs = {
		xs: breakpoints.xs.slice(0, -"px".length),
		sm: breakpoints.sm.slice(0, -"px".length),
		md: breakpoints.md.slice(0, -"px".length),
		lg: breakpoints.lg.slice(0, -"px".length),
		xl: breakpoints.xl.slice(0, -"px".length),
	}

	const [xs, setXS] = React.useState(() => window.innerWidth < breakpointNmbrs.xs)
	const [sm, setSM] = React.useState(() => window.innerWidth < breakpointNmbrs.sm)
	const [md, setMD] = React.useState(() => window.innerWidth < breakpointNmbrs.md)
	const [lg, setLG] = React.useState(() => window.innerWidth < breakpointNmbrs.lg)
	const [xl, setXL] = React.useState(() => window.innerWidth < breakpointNmbrs.xl)

	React.useLayoutEffect(() => {
		const handler = e => {
			setXS(window.innerWidth < breakpointNmbrs.xs)
			setSM(window.innerWidth < breakpointNmbrs.sm)
			setMD(window.innerWidth < breakpointNmbrs.md)
			setLG(window.innerWidth < breakpointNmbrs.lg)
			setXL(window.innerWidth < breakpointNmbrs.xl)
		}
		window.addEventListener("resize", handler)
		return () => {
			window.removeEventListener("resize", handler)
		}
	}, [breakpointNmbrs])

	return { xs, sm, md, lg, xl }
}

export default useLayoutBreakpoints
