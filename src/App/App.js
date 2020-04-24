import * as Hero from "react-heroicons"
import * as Icons from "svgs"
import CarbonAds from "./CarbonAds"
import Context from "./Context"
import Icon from "./Icon"
import IconGrid from "./IconGrid"
import originalIcons from "./helpers/icons"
import React from "react"
import SearchBar from "./SearchBar"
import SearchTrie from "./helpers/SearchTrie"
import useDarkMode from "./useDarkMode"

import srcAdamWathan from "images/adam-wathan.jpg"
import srcSteveSchoger from "images/steve-schoger.jpg"
import srcZaydek from "images/zaydek.png"

const searchTrie = new SearchTrie(originalIcons)

const App = props => {
	const [darkMode, setDarkMode] = useDarkMode()

	const [query, setQuery] = React.useState("")
	const [solid, setSolid] = React.useState(darkMode)
	const [icons, setIcons] = React.useState(originalIcons)
	// TODO: Add ability to define custom attributes in UI
	const [attributesToCopy, setAttributesToCopy] = React.useState({
		"class": "w-8 h-8",
		"stroke-width": 2,
	})

	// Debounce query (10ms):
	React.useEffect(() => {
		const id = setTimeout(() => {
			setIcons(searchTrie.search(query) || [])
		}, 10)
		return () => {
			clearTimeout(id)
		}
	}, [query])

	const { Provider } = Context
	return (
		<Provider value={{
			darkMode,
			setDarkMode,
			query,
			setQuery,
			solid,
			setSolid,
			icons,
			setIcons,
		}}>
			<div className="py-24 flex flex-row justify-center min-h-full bg-gray-100 dark:bg-gray-900 transition duration-150">
				<div className="px-6 w-full max-w-screen-lg">

					{/* LHS: GitHub */}
					<div className="absolute inset-x-0 top-0 z-30 hidden lg:block pointer-events-none">
						<div className="flex flex-row justify-start items-start">
							<a className="p-3 flex flex-row items-center" href="https://github.com/codex-src/heroicons.dev" target="_blank" rel="noopener noreferrer">
								<p className="font-medium text-gray-800 dark:text-gray-100 transition pointer-events-auto">
									Love this? Star on GitHub!{" "}
								</p>
								<span className="emoji ml-2" aria-label="star" role="img">⭐️</span>
							</a>
						</div>
					</div>

					{/* RHS: Carbon Ads */}
					<div className="p-6 absolute inset-x-0 top-0 z-30 pointer-events-none">
						<div className="flex flex-row justify-center lg:justify-end items-start">
							<CarbonAds className="text-gray-800 dark:text-gray-100 bg-gray-100 dark:bg-gray-900 transition pointer-events-auto" src="//cdn.carbonads.com/carbon.js?serve=CE7DV2QJ&placement=heroiconsdev" />
						</div>
					</div>

					{/* Carbon Ads (responsive) */}
					<div className="block lg:hidden" style={{ height: 100 }} />

					{/* Header */}
					<div className="flex flex-row justify-center">
						<h1 className="relative font-dm-sans font-bold text-5xl tracking-tighter leading-none text-black dark:text-white transition duration-150">
							Heroicons
							<div className="-mb-8 absolute left-full bottom-full">
								<button onPointerDown={e => e.preventDefault()} onClick={() => setDarkMode(!darkMode)}>
									<Icon className="p-px w-8 h-8" svg={!darkMode ? Hero.SunOutlineMd : Hero.SunSolidSm} />
								</button>
							</div>
						</h1>
					</div>

					{/* Subheader */}
					<div className="h-6" />
					<h2 className="-mx-px text-center font-medium text-lg text-gray-800 dark:text-gray-100 transition duration-150">
						<div>
							Icons by{" "}
							<a className="mx-px text-indigo-500" href="https://twitter.com/steveschoger">
								<img className="-mt-px mx-1 inline-block w-8 h-8 rounded-full shadow transform scale-90" src={srcSteveSchoger} alt="Steve Schoger" />{" "}
								Steve S<span className="hidden md:inline">choger</span><span className="inline md:hidden">.</span>
							</a>{" "}
							and{" "}
							<a className="mx-px text-indigo-500" href="https://twitter.com/adamwathan">
								<img className="-mt-px mx-1 inline-block w-8 h-8 rounded-full shadow transform scale-90" src={srcAdamWathan} alt="Adam Wathan" />{" "}
								Adam W<span className="hidden md:inline">athan</span><span className="inline md:hidden">.</span>
							</a>
						</div>
						<div className="mt-1">
							Viewer by{" "}
							<a className="mx-px text-indigo-500" href="https://twitter.com/username_ZAYDEK">
								<img className="-mt-px mx-1 inline-block w-8 h-8 rounded-full shadow transform scale-90" src={srcZaydek} alt="Zaydek" />{" "}
								Zaydek
							</a>
						</div>
					</h2>

					{/* Buttons */}
					<div className="h-8" />
					<div className="flex flex-col xs:flex-row justify-center">
						<a className="px-6 py-4 flex flex-row justify-center items-center text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-800 rounded-lg-xl focus:outline-none shadow focus:shadow-outline transition duration-150" href="https://figma.com/file/vfjBXrSSOCgmVEX5fdvV4L/Heroicons-v0.1-2abb814">
							<p className="font-medium text-lg">
								Open in Figma
							</p>
							<Icons.Figma className="ml-3 -mt-1 w-6 h-6" />
						</a>
						<div className="w-3 h-3" />
						<a className="px-6 py-4 flex flex-row justify-center items-center text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-800 rounded-lg-xl focus:outline-none shadow focus:shadow-outline transition duration-150" href="https://github.com/refactoringui/heroicons">
							<p className="font-medium text-lg">
								Open in GitHub
							</p>
							<Icons.GitHub className="ml-3 -mt-1 w-6 h-6 text-black dark:text-white transition duration-150" />
						</a>
					</div>

					{/* Search bar */}
					<div className="h-6" />
					<SearchBar />

					{/* Attributes to Copy */}
					<div className="grid grid-cols-2 gap-3 max-w-md mt-6 mb-3">
						{Object.entries(attributesToCopy).map(([k, v]) => (
							<div>
								<label className="-mx-px text-center font-medium text-gray-800 dark:text-gray-100 leading-relaxed transition duration-150">{k}</label>
								<div className="mt-1 h-12 rounded-lg-xl dark:shadow-md transition duration-150">
									<input
										className="w-full h-full px-6 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800 rounded-lg-xl outline-none shadow dark:shadow-md focus:shadow-outline transition duration-150"
										key={k}
										value={v}
										onChange={e => setAttributesToCopy({ ...attributesToCopy, [k]: e.target.value })}
									/>
								</div>
							</div>
						))}
					</div>

					{/* Icons */}
					<div className="h-6" />
					<IconGrid attributesToCopy={attributesToCopy}/>

				</div>
			</div>
		</Provider>
	)
}

export default App
