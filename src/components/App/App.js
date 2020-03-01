import * as Hero from "components/heroicons"
import IconView from "./IconView" // FIXME
import originalIcons from "./originalIcons" // FIXME
import React from "react"

const MICRO_DELAY = 25

const App = props => {
	const ref = React.useRef()
	const lhs = React.useRef()
	const rhs = React.useRef()

	const [value, setValue] = React.useState("")
	const [solid, setSolid] = React.useState(false)
	const [icons, setIcons] = React.useState(originalIcons)

	React.useLayoutEffect(() => {
		const w1 = lhs.current.getBoundingClientRect().width
		const w2 = rhs.current.getBoundingClientRect().width
		ref.current.style.padding = `0px ${w2}px 0px ${w1}px`
	}, [])

	React.useEffect(() => {
		const id = setTimeout(() => {
			const query = value.toLowerCase()
			const filteredIcons = originalIcons.filter(each => each.name.includes(query))
			setIcons(filteredIcons)
		}, MICRO_DELAY)
		return () => {
			clearTimeout(id)
		}
	}, [value])

	const handleKeyDown = e => {
		if (e.keyCode !== 27) {
			// No-op
			return
		}
		setValue("")
	}

	return (
		<div className="px-6 py-32 flex flex-row justify-center bg-gray-100 min-h-full">
			<div className="w-full max-w-screen-lg">

				<div className="mb-3">
					<h1 className="text-center font-bold font-sans-round tracking-tighter text-5xl">
						Heroicons
					</h1>
				</div>
				<div className="my-3">
					<h2 className="text-center font-medium text-xl -tracking-px leading-relaxed">
						<a className="text-indigo-500" href="https://github.com/refactoringui/heroicons">Open source icons</a> by{" "}
						<a className="text-indigo-500" href="https://twitter.com/steveschoger">Steve S<span className="sm:hidden">.</span><span className="hidden sm:inline">choger</span></a> and{" "}
						<a className="text-indigo-500" href="https://twitter.com/adamwathan">Adam W<span className="sm:hidden">.</span><span className="hidden sm:inline">athan</span></a><br />
						Viewer by{" "}
						<a className="text-indigo-500" href="https://twitter.com/username_ZAYDEK">Zaydek M<span className="sm:hidden">.</span><span className="hidden sm:inline">ichels-</span>G<span className="sm:hidden">.</span><span className="hidden sm:inline">ualtieri</span></a>
					</h2>
				</div>

				<div className="-mx-6 mt-12 mb-6 p-6 pb-0 sticky top-0 bg-gray-100 z-40">
					<div className="relative flex flex-row justify-between items-center">

						{/* LHS: */}
						<div ref={lhs} className="px-6 z-10 pointer-events-none">
							<Hero.Search_md className="w-6 h-6 text-gray-500" />
						</div>

						<div className="absolute inset-0">
							<input ref={ref} className="w-full h-full text-xl bg-white rounded-lg outline-none shadow-hero focus:shadow-outline trans-150" type="text" placeholder="Search 140 icons…" value={value} onKeyDown={handleKeyDown} onChange={e => setValue(e.target.value)} />
						</div>

						{/* RHS: */}
						<div ref={rhs} className="relative z-10">
							<select className="pl-6 py-4 appearance-none text-xl bg-transparent rounded-l-none rounded-r-lg outline-none focus:shadow-outline cursor-pointer" style={{ paddingRight: "3.75rem" }} onChange={e => setSolid(e.target.value === "solid")}>
								<option value="outline">
									Outline
								</option>
								<option value="solid">
									Solid
								</option>
							</select>
							<div className="px-6 absolute right-0 inset-y-0 flex flex-row items-center pointer-events-none">
								<Hero.Selector_md className="w-6 h-6 text-gray-500" />
							</div>
						</div>

					</div>
	 			</div>
				<div className="mt-6">
					<IconView icons={icons} solid={solid} />
				</div>

			</div>
		</div>
	)
}

export default App
