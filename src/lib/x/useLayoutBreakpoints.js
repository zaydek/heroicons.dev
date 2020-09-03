import React from "react"

// const { sm, md, lg, xl } = useLayoutBreakpoints(tailwindcss.theme.screens)
const useLayoutBreakpoints = screens => {
	const px = {
		sm: screens.sm.slice(0, -"px".length),
		md: screens.md.slice(0, -"px".length),
		lg: screens.lg.slice(0, -"px".length),
		xl: screens.xl.slice(0, -"px".length),
	}

	const [sm, setSM] = React.useState(true)
	const [md, setMD] = React.useState(false)
	const [lg, setLG] = React.useState(false)
	const [xl, setXL] = React.useState(false)

	React.useLayoutEffect(() => {
		const handler = e => {
			setSM(window.innerWidth < px.sm)
			setMD(window.innerWidth < px.md)
			setLG(window.innerWidth < px.lg)
			setXL(window.innerWidth < px.xl)
		}
		window.addEventListener("resize", handler)
		return () => {
			window.removeEventListener("resize", handler)
		}
	}, [px])

	return { sm, md, lg, xl }
}

export default useLayoutBreakpoints
