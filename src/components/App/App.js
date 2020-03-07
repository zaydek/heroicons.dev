import IconGrid from "./IconGrid"
import originalIcons from "./helpers/icons"
import React from "react"
import Search from "./Search"

// document.body.classList.add("debug-css")

const Container = props => (
	<div className="py-32 flex flex-row justify-center min-h-full bg-gray-100">
		<div className="px-6 w-full max-w-screen-lg">
			{props.children}
		</div>
	</div>
)

function useDarkMode() {
	const [darkMode, setDarkMode] = React.useState(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches)

	// Listen for dark mode:
	//
	// TODO: Refactor to useDarkMode
	React.useEffect(() => {
		if (!window.matchMedia) {
			// No-op
			return
		}
		const media = window.matchMedia("(prefers-color-scheme: dark)")
		const handler = () => {
			setDarkMode(media.matches)
		}
		handler()
		media.addListener(handler)
		return () => {
			media.removeListener(handler)
		}
	}, [])

	return [darkMode, setDarkMode]
}

const App = props => {
	const [query, setQuery] = React.useState("")
	const [solid, setSolid] = React.useState(false)
	const [icons, setIcons] = React.useState(originalIcons)

	// Query:
	React.useEffect(() => {
		const id = setTimeout(() => {
			const search = query.toLowerCase()
			const filteredIcons = originalIcons.filter(each => each.name.includes(search))
			setIcons(filteredIcons)
		}, 25)
		return () => {
			clearTimeout(id)
		}
	}, [query])

	return (
		<Container>

			{/* H1 */}
			<h1 className="text-center font-dm-sans font-bold text-5xl tracking-tighter">
				Heroicons
			</h1>

			{/* H2 */}
			<div className="h-3" />
			<h2 className="text-center font-medium text-xl -tracking-px leading-relaxed text-gray-800">
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

		</Container>
	)
}

export default App
