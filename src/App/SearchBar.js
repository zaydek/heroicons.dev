import * as Hero from "react-heroicons"
import Context from "./Context"
import HeroiconsTitle from "./HeroiconsTitle"
import Icon from "./Icon"
import originalIcons from "./helpers/icons"
import React from "react"

const SearchBar = props => {
	const ctx = React.useContext(Context)

	const ref = React.useRef() // Search bar
	const lhs = React.useRef() // Start of search bar
	const rhs = React.useRef() // End of search bar

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
			} else if (!(e.keyCode === 191 || e.key === "/")) {
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
		ctx.setQuery("") // Reset
	}

	return (
		<div className="sticky top-0 z-40">
			<div className="-mx-2 -mb-8 px-2 bg-gray-100 dark:bg-gray-900 transition duration-150" style={{ height: "calc(14 * 0.25rem)" }} />
			<div className="relative flex flex-row justify-between h-16 text-xl">

				{/* Start */}
				<div ref={lhs} className="-mx-2 px-6 pr-2 flex flex-row items-center rounded-l-lg-xl focus:outline-none z-10 pointer-events-none">
					<div className="px-2">
						<Hero.SearchOutlineMd className="w-6 h-6 text-gray-400 dark:text-gray-600 transition duration-150" />
					</div>
				</div>

				{/* Search bar */}
				<HeroiconsTitle title={ctx.query && `${ctx.icons.length} results`}>
					<div className="absolute inset-0">
						<div className="h-full rounded-lg-xl dark:shadow-md transition duration-150">
							<input
								ref={ref}
								className="w-full h-full text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800 rounded-lg-xl focus:outline-none shadow focus:shadow-outline transition duration-150"
								type="text"
								placeholder={placeholder}
								value={ctx.query}
								onKeyDown={handleKeyDown}
								onChange={e => ctx.setQuery(e.target.value)}
							/>
						</div>
					</div>
				</HeroiconsTitle>

				{/* End */}
				<div ref={rhs} className="-mx-2 px-6 flex flex-row rounded-r-lg-xl focus:outline-none focus:shadow-outline z-10 transition duration-150">
					{/* Icon mode */}
					<button className="px-2" onPointerDown={e => e.preventDefault()} onClick={e => ctx.setSolid(!ctx.solid)}>
						<Icon className="w-6 h-6 text-gray-800 dark:text-gray-200 transition duration-150" svg={!ctx.solid ? Hero.PlusCircleOutlineMd : Hero.PlusCircleSolidSm} />
					</button>
					{/* Dark mode */}
					<button className="px-2" onPointerDown={e => e.preventDefault()} onClick={e => ctx.setDarkMode(!ctx.darkMode)}>
						<Icon className="w-6 h-6 text-gray-800 dark:text-gray-200 transition duration-150" svg={!ctx.darkMode ? Hero.SunOutlineMd : Hero.SunSolidSm} />
					</button>
				</div>

			</div>
		</div>
	)
}

export default SearchBar
