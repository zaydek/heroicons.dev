import * as Hero from "components/heroicons"
import IconView from "./IconView" // FIXME
import originalIcons from "./originalIcons" // FIXME
import React from "react"

const MICRO_DELAY = 25

const App = props => {
	const [icons, setIcons] = React.useState([])
	const [value, setValue] = React.useState("")

	React.useEffect(() => {
		const id = setTimeout(() => {
			const filteredIcons = originalIcons.filter(each => each.name.includes(value))
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

				<h1 className="text-center font-bold font-sans-round tracking-tighter text-5xl">
					Heroicons viewer
				</h1>
				<h2 className="text-center font-medium text-xl -tracking-px">
					<a className="text-indigo-500" href="https://github.com/refactoringui/heroicons">Open source icons</a> by{" "}
					<a className="text-indigo-500" href="https://twitter.com/steveschoger">Steve S<span className="sm:hidden">.</span><span className="hidden sm:inline">choger</span></a> and{" "}
					<a className="text-indigo-500" href="https://twitter.com/adamwathan">Adam W<span className="sm:hidden">.</span><span className="hidden sm:inline">athan</span></a><br />
					Viewer by{" "}
					<a className="text-indigo-500" href="https://twitter.com/username_ZAYDEK">Zaydek M<span className="sm:hidden">.</span><span className="hidden sm:inline">ichels-</span>G<span className="sm:hidden">.</span><span className="hidden sm:inline">ualtieri</span></a>
				</h2>

				<div className="-mx-6 mt-12 mb-6 p-6 pb-0 sticky top-0 bg-gray-100 z-40">
					<div className="relative px-6 py-4 flex flex-row justify-between items-center">
						<Hero.Search_md className="w-6 h-6 text-gray-500 z-10 pointer-events-none" />
						<input className="pl-16 absolute inset-0 w-full h-full text-xl bg-white rounded-lg outline-none shadow-hero focus:shadow-outline transition duration-150 ease-in-out" type="text" placeholder="Search 140 icons…" value={value} onKeyDown={handleKeyDown} onChange={e => setValue(e.target.value)} />
						{value && (
							<Hero.XCircle_sm className="w-6 h-6 text-gray-400 z-10" onClick={e => setValue("")} />
						)}
					</div>
	 			</div>
				<div className="mt-6">
					<IconView icons={icons} />
				</div>

			</div>
		</div>
	)
}

export default App
