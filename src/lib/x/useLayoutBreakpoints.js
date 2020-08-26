import React from "react"

// const { sm, md, lg, xl } = useLayoutBreakpoints(tailwindcss.theme.screens)
const useLayoutBreakpoints = breakpoints => {
	// Convert "px" breakpoints to numbers:
	const breakpointNmbrs = {
		sm: breakpoints.sm.slice(0, -"px".length),
		md: breakpoints.md.slice(0, -"px".length),
		lg: breakpoints.lg.slice(0, -"px".length),
		xl: breakpoints.xl.slice(0, -"px".length),
	}

	const [sm, setSM] = React.useState(() => window.innerWidth < breakpointNmbrs.sm)
	const [md, setMD] = React.useState(() => window.innerWidth < breakpointNmbrs.md)
	const [lg, setLG] = React.useState(() => window.innerWidth < breakpointNmbrs.lg)
	const [xl, setXL] = React.useState(() => window.innerWidth < breakpointNmbrs.xl)

	React.useLayoutEffect(() => {
		const handler = e => {
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

	return { sm, md, lg, xl }
}

export default useLayoutBreakpoints
