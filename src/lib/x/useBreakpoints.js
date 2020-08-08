import React from "react"

// const { xs, sm, md, lg, xl } = useBreakpoints([512, 640, 768, 1024, 1280])
const useBreakpoints = breakpoints => {
	const [xs, setXS] = React.useState(() => window.innerWidth < breakpoints[0])
	const [sm, setSM] = React.useState(() => window.innerWidth < breakpoints[1])
	const [md, setMD] = React.useState(() => window.innerWidth < breakpoints[2])
	const [lg, setLG] = React.useState(() => window.innerWidth < breakpoints[3])
	const [xl, setXL] = React.useState(() => window.innerWidth < breakpoints[4])
	React.useEffect(() => {
		const handler = e => {
			setXS(window.innerWidth < breakpoints[0])
			setSM(window.innerWidth < breakpoints[1])
			setMD(window.innerWidth < breakpoints[2])
			setLG(window.innerWidth < breakpoints[3])
			setXL(window.innerWidth < breakpoints[4])
		}
		window.addEventListener("resize", handler)
		return () => {
			window.removeEventListener("resize", handler)
		}
	}, [breakpoints])
	return { xs, sm, md, lg, xl }
}

export default useBreakpoints
