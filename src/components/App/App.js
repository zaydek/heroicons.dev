import * as constants from "__constants"
import DarkModeIcon from "./DarkModeIcon"
import firebase from "__firebase"
import IconGrid from "./IconGrid"
import originalIcons from "./helpers/icons"
import React from "react"
import Search from "./Search"
import useDarkMode from "hooks/useDarkMode"
import { ReactComponent as FigmaLogo } from "svg/figma.svg"
import { ReactComponent as GitHubLogo } from "svg/github.svg"

const ga = firebase.analytics()

// document.body.classList.add("debug-css")

const App = props => {
	const [darkMode, setDarkMode] = useDarkMode()

	const [query, setQuery] = React.useState("")
	const [solid, setSolid] = React.useState(false)
	const [icons, setIcons] = React.useState(originalIcons)

	React.useEffect(
		React.useCallback(() => {
			let eventType = ""
			if (!darkMode) {
				eventType = constants.GA_INIT_LIGHT_MODE
			} else {
				eventType = constants.GA_INIT_DARK_MODE
			}
			ga.logEvent(eventType)
		}, [darkMode]),
		[],
	)

	// Background overflow:
	//
	// TODO: Extract to useHTMLBackgroundColor(lightMode, darkMode)
	React.useEffect(() => {
		let backgroundColor = ""
		if (!darkMode) {
			// bg-gray-100
			backgroundColor = "#f7fafc"
		} else {
			// bg-gray-900
			backgroundColor = "#1a202c"
		}
		document.documentElement.style.backgroundColor = backgroundColor
	}, [darkMode])

	// Debounce query (25ms):
	//
	// TODO: Extract to useDebounce(fn, debounceMs)
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

	return (
		<div className="py-32 flex flex-row justify-center min-h-full bg-gray-100 dark:bg-gray-900 trans-150">
			<div className="px-6 w-full max-w-screen-lg">

				{/* H1 */}
				<div className="flex flex-row justify-center">
					<h1 className="relative font-dm-sans font-bold text-5xl tracking-tighter leading-none dark:text-white trans-150">
						Heroicons
						<div className="-mb-6 absolute left-full bottom-full">
							<button
								onPointerDown={e => e.preventDefault()}
								onClick={e => {
									setDarkMode(!darkMode)
									ga.logEvent(constants.GA_DARK_MODE)
								}}
							>
								<DarkModeIcon className="w-6 h-6" darkMode={darkMode} />
							</button>
						</div>
					</h1>
				</div>

				{/* H2 */}
				<div className="h-3" />
				<h2 className="-mx-px text-center font-medium text-xl -tracking-px leading-relaxed text-gray-800 dark:text-white trans-150">
					<a className="mx-px text-indigo-500" href="https://github.com/refactoringui/heroicons" onClick={e => ga.logEvent(constants.GA_GITHUB_HEROICONS)}>
						Open source icons
					</a>{" "}
					by{" "}
					<a className="mx-px text-indigo-500" href="https://twitter.com/steveschoger" onClick={e => ga.logEvent(constants.GA_TWITTER_STEVE)}>
						Steve S<span className="hidden md:inline">choger</span><span className="inline md:hidden">.</span>
					</a>{" "}
					and{" "}
					<a className="mx-px text-indigo-500" href="https://twitter.com/adamwathan" onClick={e => ga.logEvent(constants.GA_TWITTER_ADAM)}>
						Adam W<span className="hidden md:inline">athan</span><span className="inline md:hidden">.</span>
					</a>
					<br />
					<a className="mx-px text-indigo-500" href="https://github.com/codex-src/heroicons-viewer" onClick={e => ga.logEvent(constants.GA_GITHUB_HEROICONS_VIEWER)}>
						Viewer
					</a>{" "}
					by{" "}
					<a className="mx-px text-indigo-500" href="https://twitter.com/username_ZAYDEK" onClick={e => ga.logEvent(constants.GA_TWITTER_ZAYDEK)}>
						Zaydek
					</a>{" "}
					and{" "}
					<a className="mx-px text-indigo-500" href="https://github.com/codex-src/heroicons-viewer" onClick={e => ga.logEvent(constants.GA_GITHUB_HEROICONS_VIEWER)}>
						the GitHub community
					</a>
				</h2>

				{/* Buttons */}
				<div className="h-12" />
				<div className="flex flex-col xs:flex-row justify-center">
					<a className="px-6 py-4 text-gray-800 dark:text-white bg-white dark:bg-gray-800 rounded-lg-xl focus:outline-none shadow focus:shadow-outline trans-150" href="https://figma.com/file/vfjBXrSSOCgmVEX5fdvV4L/Heroicons-v0.1-2abb814" onClick={e => ga.logEvent(constants.GA_FIGMA)}>
						<p className="text-center sm:text-left font-medium text-lg">
							Open in Figma
							<FigmaLogo className="ml-3 -mt-1 inline-block w-5 h-5" />
						</p>
					</a>
					<div className="w-3 h-3" />
					<a className="px-6 py-4 text-gray-800 dark:text-white bg-white dark:bg-gray-800 rounded-lg-xl focus:outline-none shadow focus:shadow-outline trans-150" href="https://github.com/refactoringui/heroicons" onClick={e => ga.logEvent(constants.GA_GITHUB_HEROICONS)}>
						<p className="text-center sm:text-left font-medium text-lg">
							Open in GitHub
							<GitHubLogo className="ml-3 -mt-1 inline-block w-5 h-5" />
						</p>
					</a>
				</div>

				{/* Search */}
				<div className="h-6" />
				<Search query={query} setQuery={setQuery} solid={solid} setSolid={setSolid} />

				{/* Icons */}
				<div className="h-6" />
				<IconGrid solid={solid} icons={icons} />

			</div>
		</div>
	)
}

export default App
