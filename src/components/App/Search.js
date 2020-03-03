import * as Hero from "components/Heroicons"
import React from "react"

const Search = ({ value, setValue, solid, setSolid, ...props }) => {
	const ref = React.useRef() // Search bar
	const lhs = React.useRef() // Start of search bar
	const rhs = React.useRef() // End of search bar

	const [placeholder, setPlaceholder] = React.useState("Search 140 icons")

	// Responsive placeholder:
	React.useEffect(() => {
		const handler = e => {
			if (window.innerWidth < 1280) {
				setPlaceholder("Search 140 icons")
			} else {
				setPlaceholder("Search 140 icons (Press \"/\" to focus)")
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
		setValue("") // Reset
	}

	return (
		<div className="-mx-6 mb-6 p-6 pb-0 sticky top-0 bg-gray-100 z-40">
			<div className="relative flex flex-row justify-between h-16 text-xl tracking-px text-gray-800">

				{/* Start */}
				<div ref={lhs} className="px-6 flex flex-row items-center rounded-l-lg-xl focus:outline-none z-10 pointer-events-none">
					<Hero.SearchOutlineMd className="-mr-2 w-6 h-6 text-gray-400" />
				</div>

				{/* Search bar */}
				<input
					ref={ref}
					className="absolute inset-0 w-full h-full bg-white rounded-lg-xl outline-none shadow-hero focus:shadow-outline trans-150"
					type="text"
					placeholder={placeholder}
					value={value}
					onKeyDown={handleKeyDown}
					onChange={e => setValue(e.target.value)}
				/>

				{/* End */}
				<button ref={rhs} className="px-6 flex flex-row items-center rounded-r-lg-xl focus:outline-none focus:shadow-outline z-10" onClick={e => setSolid(!solid)}>
					<p className="w-16">
						{!solid ? (
							"Outline"
						) : (
							"Solid"
						)}
					</p>
					<Hero.SwitchVerticalOutlineMd className="ml-4 w-6 h-6 text-gray-400" />
				</button>

			</div>
		</div>
	)
}

export default Search
