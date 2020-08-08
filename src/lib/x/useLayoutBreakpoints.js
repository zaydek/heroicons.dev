import React from "react"

// const { xs, sm, md, lg, xl } = useLayoutBreakpoints(tailwindcss.theme.screens)
const useLayoutBreakpoints = breakpoints => {
	const [xs, setXS] = React.useState(() => window.innerWidth < breakpoints.xs)
	const [sm, setSM] = React.useState(() => window.innerWidth < breakpoints.sm)
	const [md, setMD] = React.useState(() => window.innerWidth < breakpoints.md)
	const [lg, setLG] = React.useState(() => window.innerWidth < breakpoints.lg)
	const [xl, setXL] = React.useState(() => window.innerWidth < breakpoints.xl)

	React.useLayoutEffect(() => {
		const handler = e => {
			setXS(window.innerWidth < breakpoints.xs)
			setSM(window.innerWidth < breakpoints.sm)
			setMD(window.innerWidth < breakpoints.md)
			setLG(window.innerWidth < breakpoints.lg)
			setXL(window.innerWidth < breakpoints.xl)
		}
		window.addEventListener("resize", handler)
		return () => {
			window.removeEventListener("resize", handler)
		}
	}, [breakpoints])

	return { xs, sm, md, lg, xl }
}

export default useLayoutBreakpoints
