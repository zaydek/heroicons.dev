import * as Hero from "components/Heroicons"
import originalIcons from "./helpers/icons"
import React from "react"

const COUNT = originalIcons.length

const Search = ({ query, setQuery, solid, setSolid, ...props }) => {
	const ref = React.useRef() // Search bar
	const lhs = React.useRef() // Start of search bar
	const rhs = React.useRef() // End of search bar

	const [placeholder, setPlaceholder] = React.useState("")

	// Responsive placeholder:
	React.useEffect(() => {
		const handler = e => {
			if (window.innerWidth < 640 + 24 +24) {
				setPlaceholder(`Search ${COUNT} icons`)
			} else {
				setPlaceholder(`Search ${COUNT} icons (Press "/" to focus)`)
			}
		}
		handler() // Once
		window.addEventListener("resize", handler)
		return () => {
			window.removeEventListener("resize", handler)
		}
	}, [])

	// Bind / to focus:
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
			<div className="-mx-2 -mb-8 px-2 bg-gray-100 dark:bg-gray-900 trans-150" style={{ height: "calc(14 * 0.25rem)" }} />
			{/* NOTE: Do not use text-gray-800 */}
			<div className="relative flex flex-row justify-between h-16 text-xl">

				{/* Start */}
				<div ref={lhs} className="px-6 flex flex-row items-center rounded-l-lg-xl focus:outline-none z-10 pointer-events-none">
					<Hero.SearchOutlineMd className="-mr-2 w-6 h-6 text-gray-400 dark:text-gray-600 trans-150" />
				</div>

				{/* Search bar */}
				<div className="absolute inset-0">
					{/* Layered shadow for dark mode */}
					<div className="h-full rounded-lg-xl dark:shadow-md">
						<input
							ref={ref}
							className="w-full h-full dark:text-gray-200 bg-white dark:bg-gray-800 rounded-lg-xl outline-none shadow dark:shadow-md focus:shadow-outline trans-150"
							type="text"
							placeholder={placeholder}
							value={query}
							onKeyDown={handleKeyDown}
							onChange={e => setQuery(e.target.value)}
						/>
					</div>
				</div>

				{/* End */}
				<button ref={rhs} className="px-6 flex flex-row items-center rounded-r-lg-xl focus:outline-none focus:shadow-outline z-10" onPointerDown={e => e.preventDefault()} onClick={e => setSolid(!solid)}>
					<p className="w-16 text-center dark:text-gray-200">
						{!solid ? "Outline" : "Solid"}
					</p>
					<Hero.SwitchVerticalOutlineMd className="ml-4 w-6 h-6 text-gray-400 dark:text-gray-600 trans-150" />
				</button>

			</div>
		</div>
	)
}

export default Search
