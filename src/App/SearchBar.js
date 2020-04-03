import * as Hero from "react-heroicons"
import Icon from "./Icon"
import originalIcons from "./helpers/icons"
import React from "react"
import useDarkMode from "./useDarkMode"

const SearchBar = ({ query, setQuery, solid, setSolid, ...props }) => {
	const ref = React.useRef() // Search bar
	const lhs = React.useRef() // Start of search bar
	const rhs = React.useRef() // End of search bar

	const [darkMode, setDarkMode] = useDarkMode()
	const [placeholder, setPlaceholder] = React.useState("")

	// Responsive placeholder:
	React.useEffect(() => {
		const handler = e => {
			if (window.innerWidth < 640 + 24 * 2) {
				setPlaceholder(`Search ${originalIcons.length} icons`)
			} else {
				setPlaceholder(`Search ${originalIcons.length} icons (Press "/" to focus)`)
			}
		}
		handler() // Once
		window.addEventListener("resize", handler)
		return () => {
			window.removeEventListener("resize", handler)
		}
	}, [])

	// Bind "/" to focus:
	React.useEffect(() => {
		const handler = e => {
			if (document.activeElement === ref.current) {
				// No-op
				return
			} else if (e.keyCode !== 191) {
				// No-op
				return
			}
			e.preventDefault()
			ref.current.focus()
		}
		document.addEventListener("keydown", handler)
		return () => {
			document.removeEventListener("keydown", handler)
		}
	}, [])

	// Dynamically compute/set padding:
	React.useEffect(() => {
		const paddingL = lhs.current.getBoundingClientRect().width
		const paddingR = rhs.current.getBoundingClientRect().width
		ref.current.style.padding = `0px ${paddingR / 16}rem 0px ${paddingL / 16}rem`
	}, [])

	// Escape to reset search:
	const handleKeyDown = e => {
		if (e.keyCode !== 27) {
			// No-op
			return
		}
		setQuery("") // Reset
	}

	return (
		<div className="sticky top-0 z-40">
			<div className="-mx-2 -mb-8 px-2 bg-gray-100 dark:bg-gray-900 transition duration-150" style={{ height: "calc(14 * 0.25rem)" }} />
			<div className="relative flex flex-row justify-between h-16 text-xl">

				{/* Start */}
				<div ref={lhs} className="px-6 flex flex-row items-center rounded-l-lg-xl focus:outline-none z-10 pointer-events-none">
					<Hero.SearchOutlineMd className="-mr-2 w-6 h-6 text-gray-400 dark:text-gray-600 transition duration-150" />
				</div>

				{/* Search bar */}
				<div className="absolute inset-0">
					{/* Layered box-shadow for dark mode */}
					<div className="h-full rounded-lg-xl dark:shadow-md transition duration-150">
						<input
							ref={ref}
							className="w-full h-full text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800 rounded-lg-xl outline-none shadow dark:shadow-md focus:shadow-outline transition duration-150"
							type="text"
							placeholder={placeholder}
							value={query}
							onKeyDown={handleKeyDown}
							onChange={e => setQuery(e.target.value)}
						/>
					</div>
				</div>

				{/* End */}
				<div ref={rhs} className="-mx-2 px-6 flex flex-row items-center rounded-r-lg-xl focus:outline-none focus:shadow-outline z-10 transition duration-150">
					<button className="mx-2" onPointerDown={e => e.preventDefault()} onClick={e => setSolid(!solid)}>
						<Icon className="w-6 h-6 text-gray-800 dark:text-gray-200 transition duration-150" svg={!solid ? Hero.PlusCircleOutlineMd : Hero.PlusCircleSolidSm} />
					</button>
					<button className="mx-2" onPointerDown={e => e.preventDefault()} onClick={e => setDarkMode(!darkMode)}>
						<Icon className="w-6 h-6 text-gray-800 dark:text-gray-200 transition duration-150" svg={!darkMode ? Hero.SunOutlineMd : Hero.SunSolidSm} />
					</button>
				</div>

			</div>
		</div>
	)
}

export default SearchBar
