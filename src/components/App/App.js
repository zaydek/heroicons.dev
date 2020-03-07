import * as Hero from "components/Heroicons"
import IconGrid from "./IconGrid"
import originalIcons from "./helpers/icons"
import React from "react"
import Search from "./Search"
import useDarkMode from "hooks/useDarkMode"

// document.body.classList.add("debug-css")

const App = props => {
	const [darkMode, setDarkMode] = useDarkMode()

	const [query, setQuery] = React.useState("")
	const [solid, setSolid] = React.useState(false)
	const [icons, setIcons] = React.useState(originalIcons)

	// Background overflow:
	React.useEffect(() => {
		if (!darkMode) {
			// bg-gray-100
			document.documentElement.style.backgroundColor = "#f7fafc"
		} else {
			// bg-gray-900
			document.documentElement.style.backgroundColor = "#1a202c"
		}
	}, [darkMode])

	// Debounce query (25ms):
	React.useEffect(() => {
		const id = setTimeout(() => {
			const queryLower = query.toLowerCase()
			const subset = originalIcons.filter(each => each.name.includes(queryLower))
			setIcons(subset)
		}, 25)
		return () => {
			clearTimeout(id)
		}
	}, [query])

	let DarkModeIcon = null
	if (!darkMode) {
		DarkModeIcon = Hero.SunSolidSm
	} else {
		DarkModeIcon = Hero.SunOutlineMd
	}
	return (
		<div className="py-40 flex flex-row justify-center min-h-full bg-gray-100 dark:bg-gray-900">
			<div className="px-6 w-full max-w-screen-lg">

				{/* H1 */}
				<div className="flex flex-row justify-center">
					<h1 className="relative font-dm-sans font-bold text-5xl tracking-tighter leading-none dark:text-white">
						Heroicons
						<div className="-mb-4 absolute left-full bottom-full">
							<DarkModeIcon className="w-6 h-6 cursor-pointer dark:text-white" onClick={e => setDarkMode(!darkMode)} />
						</div>
					</h1>
				</div>

				{/* H2 */}
				<div className="h-3" />
				<h2 className="text-center font-medium text-xl -tracking-px leading-relaxed text-gray-800 dark:text-white">
					<a className="text-indigo-500" href="https://github.com/refactoringui/heroicons">
						Open source icons
					</a>{" "}
					by{" "}
					<a className="mx-px text-indigo-500" href="https://twitter.com/steveschoger">
						Steve S<span className="hidden md:inline">choger</span><span className="inline md:hidden">.</span>
					</a>{" "}
					and{" "}
					<a className="mx-px text-indigo-500" href="https://twitter.com/adamwathan">
						Adam W<span className="hidden md:inline">athan</span><span className="inline md:hidden">.</span>
					</a>
					<br />
					<a className="mx-px text-indigo-500" href="https://github.com/codex-src/heroicons-viewer">
						Viewer
					</a>{" "}
					by{" "}
					<a className="mx-px text-indigo-500" href="https://twitter.com/username_ZAYDEK">
						Zaydek
					</a>{" "}
					and{" "}
					<a className="mx-px text-indigo-500" href="https://github.com/codex-src/heroicons-viewer">
						the GitHub community
					</a>
				</h2>

				{/* Buttons */}
				{/* <div className="h-12" /> */}
				{/* <div className="flex flex-row justify-center"> */}
				{/* 	<button className="px-6 py-4 bg-white rounded-lg-xl shadow"> */}
				{/* 		<p className="font-semibold text-lg text-indigo-500"> */}
				{/* 			Get the icons! */}
				{/* 		</p> */}
				{/* 	</button> */}
				{/* 	<div className="w-3" /> */}
				{/* 	<button className="px-6 py-4 bg-white rounded-lg-xl shadow"> */}
				{/* 		<p className="font-semibold text-lg text-indigo-500"> */}
				{/* 			Contribute */}
				{/* 			<GitHubLogo className="ml-3 inline-block w-5 h-5 text-black" /> */}
				{/* 		</p> */}
				{/* 	</button> */}
				{/* </div> */}

				{/* Search, etc. */}
				<div className="h-12" />
				<Search query={query} setQuery={setQuery} solid={solid} setSolid={setSolid} />
				<div className="h-6" />
				<IconGrid solid={solid} icons={icons} />

			</div>
		</div>
	)
}

export default App
