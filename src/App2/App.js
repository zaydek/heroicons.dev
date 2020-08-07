import CarbonAds from "./CarbonAds"
import disableAutoCorrect from "./disableAutoCorrect"
import DocumentTitle from "lib/x/DocumentTitle"
import FlagSolidSVG from "heroicons-ecfba30/solid/Flag.jsx"
import iconset from "./iconset"
import React from "react"
import SearchOutlineSVG from "heroicons-ecfba30/outline/Search.jsx"
import useHeroiconsReducer from "./useHeroiconsReducer"
import XCircleSolidSVG from "heroicons-ecfba30/solid/XCircle.jsx"
import { ReactComponent as FigmaSVG } from "svg/figma.svg"
import { ReactComponent as GitHubSVG } from "svg/github.svg"

import srcAdamW from "images/adam-wathan.jpg"
import srcSteveS from "images/steve-schoger.jpg"
import srcZaydekMG from "images/zaydek-mg.png"

// TODO
document.body.classList.add("bg-black")

const App = () => {
	const [state, dispatch] = useHeroiconsReducer()

	// const [searchQuery, setSearchQuery] = React.useState("")
	// const [preferSolid, setPreferSolid] = React.useState(true /* TODO */)

	return (
		<div className="py-24 flex flex-row justify-center">
			<div className="px-6 w-full max-w-screen-lg">

				{/* <div className="px-4 py-3 absolute top-0 left-0"> */}
				{/* 	<div className="px-2 py-1 bg-gray-600 rounded"> */}
				{/* 		<p className="font-medium text-sm text-gray-100"> */}
				{/* 			Star the Viewer on GitHub! */}
				{/* 		</p> */}
				{/* 	</div> */}
				{/* </div> */}

				{/* Carbon Ads */}
				{/* <div className="px-4 py-3 absolute top-0 right-0 z-30 pointer-events-none"> */}
				{/* 	<div className="flex flex-row justify-center lg:justify-end items-start"> */}
				{/* 		<CarbonAds */}
				{/* 			className="text-gray-800 dark:text-gray-100 bg-gray-100 dark:bg-black transition pointer-events-auto" */}
				{/* 			src="//cdn.carbonads.com/carbon.js?serve=CE7DV2QJ&placement=heroiconsdev" */}
				{/* 		/> */}
				{/* 	</div> */}
				{/* </div> */}

				<div className="flex flex-col items-center">

					{/* <h1> */}
					<div className="relative flex flex-row items-center">
						<h1 className="font-bold text-5xl text-white" style={{ fontFamily: "DM Sans", letterSpacing: "-0.0375em" }}>
							Heroicons
						</h1>
						<div className="-mt-1 pl-1 absolute" style={{ left: "100%" }}>
							<FlagSolidSVG className="w-12 h-8 h-12 text-indigo-500" />
						</div>
					</div>

					{/* <h2> */}
					<div className="mt-6">
						<div>
							<h2 className="font-medium text-lg sm:text-xl text-center text-gray-100">
								<a href="https://github.com/tailwindlabs/heroicons/blob/master/LICENSE" target="_blank" rel="noopener noreferrer">
									<u style={{ textDecoration: "none", boxShadow: "inset 0 -1px var(--indigo-500), 0 1px var(--indigo-500)" }}>
										MIT Licensed
									</u>
								</a>{" "}
								and{" "}
								<a href="https://github.com/tailwindlabs/heroicons" target="_blank" rel="noopener noreferrer">
									<u style={{ textDecoration: "none", boxShadow: "inset 0 -1px var(--indigo-500), 0 1px var(--indigo-500)" }}>
										Open Source
									</u>
								</a>{" "}
								UI Icons
							</h2>
						</div>
						<div className="mt-2">
							<h2 className="font-medium text-lg sm:text-xl text-center text-gray-100">
								By
								<a href="https://twitter.com/steveschoger" target="_blank" rel="noopener noreferrer">
									<img className="mx-2 inline-block w-8 h-8 rounded-full" src={srcSteveS} alt="Steve Schoger" />
									<u style={{ textDecoration: "none", boxShadow: "inset 0 -1px var(--indigo-500), 0 1px var(--indigo-500)" }}>
										Steve
									</u>
								</a>{" "}
								and
								<a href="https://twitter.com/adamwathan" target="_blank" rel="noopener noreferrer">
									<img className="mx-2 inline-block w-8 h-8 rounded-full" src={srcAdamW} alt="Adam Wathan" />
									<u style={{ textDecoration: "none", boxShadow: "inset 0 -1px var(--indigo-500), 0 1px var(--indigo-500)" }}>
										Adam
									</u>
								</a>
								,{" "}
								<br className="inline sm:hidden" />
								<a href="https://twitter.com/username_ZAYDEK" target="_blank" rel="noopener noreferrer">
									web app by
									<img className="mx-2 inline-block w-8 h-8 rounded-full" src={srcZaydekMG} alt="Zaydek MG" />
									<u style={{ textDecoration: "none", boxShadow: "inset 0 -1px var(--indigo-500), 0 1px var(--indigo-500)" }}>
										Zaydek
									</u>
								</a>
							</h2>
						</div>
					</div>

					{/* <div className="mt-12 space-y-3 sm:space-y-0 sm:space-x-3 flex flex-col sm:flex-row w-full sm:w-auto"> */}
					{/* 	<a href="https://github.com/refactoringui/heroicons" target="_blank" rel="noopener noreferrer"> */}
					{/* 		<button className="px-6 !py-4 flex flex-row justify-center items-center w-full sm:w-auto h-16 bg-gray-800 rounded-75 transition duration-200 ease-in-out"> */}
					{/* 			<GitHubSVG className="mr-3 w-6 h-6 text-white" /> */}
					{/* 			<p className="font-medium text-lg text-gray-100"> */}
					{/* 				Open in GitHub */}
					{/* 			</p> */}
					{/* 		</button> */}
					{/* 	</a> */}
					{/* 	<a href="https://figma.com/file/vfjBXrSSOCgmVEX5fdvV4L/Heroicons-v0.1-2abb814" target="_blank" rel="noopener noreferrer"> */}
					{/* 		<button className="px-6 !py-4 flex flex-row justify-center items-center w-full sm:w-auto h-16 bg-gray-800 rounded-75 transition duration-200 ease-in-out"> */}
					{/* 			<FigmaSVG className="mr-3 w-6 h-6" /> */}
					{/* 			<p className="font-medium text-lg text-gray-100"> */}
					{/* 				Open in Figma */}
					{/* 			</p> */}
					{/* 		</button> */}
					{/* 	</a> */}
					{/* </div> */}

				</div>

				<div className="h-16" />
				<SearchForm
					state={state}
					dispatch={dispatch}
				/>

				<div className="h-8" />
				<DocumentTitle title={!state.form.search ? "Heroicons" : `${state.results.length} result${state.results.length === 1 ? "" : "s"}`}>
					<Icons icons={state.results} />
				</DocumentTitle>

			</div>
		</div>
	)
}

// TODO
const SearchForm = ({ state, dispatch }) => {
	const inputRef = React.useRef()

	const [text, setText] = React.useState("")

	// Debounces search.
	React.useEffect(
		React.useCallback(() => {
			const id = setTimeout(() => {
				dispatch({
					type: "UPDATE_FORM_SEARCH",
					text,
				})
			}, 15)
			return () => {
				clearTimeout(id)
			}
		}, [text, dispatch]),
		[text],
	)

	// (Press "/" to focus).
	React.useEffect(() => {
		const handler = e => {
			if (document.activeElement !== inputRef.current) {
				if (e.keyCode === 191 || e.key === "/") {
					e.preventDefault()
					inputRef.current.focus()
				}
			}
		}
		document.addEventListener("keydown", handler)
		return () => {
			document.removeEventListener("keydown", handler)
		}
	}, [])

	return (
		<div className="-mt-6 pt-6 sticky top-0 z-40" style={{ boxShadow: "inset 0 2.25rem 0 0 var(--black)" }}>
			<form className="relative" onSubmit={e => e.preventDefault()}>

				{/* LHS */}
				<div className="px-6 absolute inset-y-0 left-0 flex flex-row items-center">
					<SearchOutlineSVG className="w-6 h-6 text-gray-500" />
				</div>

				{/* <input> */}
				<div className="shadow-md rounded-75">
					<input
						ref={inputRef}
						className="px-16 w-full max-w-full h-16 text-lg sm:text-xl text-gray-100 bg-gray-800 border-2 border-gray-800 focus:border-indigo-500 rounded-75 focus:outline-none shadow-hero-lg transition duration-200 ease-in-out"
						type="text"
						placeholder={"Search Heroicons (Press \"/\" to focus)"}
						value={text}
						onKeyDown={e => {
							if (e.keyCode === 27 || e.key === "Escape") {
								// if (!text) {
								// 	inputRef.current.blur()
								// } else {
								setText("")
								// }
							}
						}}
						onChange={e => setText(e.target.value)}
						{...disableAutoCorrect}
					/>
				</div>

				{/* RHS */}
				{state.form.search && (
					<button
						className="px-6 absolute inset-y-0 right-0 flex flex-row items-center text-gray-400 hover:text-gray-300 focus:outline-none transition duration-200 ease-in-out"
						onClick={e => {
							inputRef.current.focus()
							setText("")
						}}
					>
						<XCircleSolidSVG className="w-6 h-6" />
					</button>
				)}

			</form>
		</div>
	)
}

const SVG = ({ svg: ShadowSVG, ...props }) => (
	<ShadowSVG {...props} />
)

// NOTE: tabIndex={0} is preferred to <button>.
const MemoIcon = React.memo(({ icon }) => (
	<div className="flex flex-row justify-center items-center h-full bg-gray-800 border-2 border-gray-800 focus:border-indigo-500 rounded-75 focus:outline-none cursor-pointer transition duration-200 ease-in-out" tabIndex={0}>

		{/* NEW */}
		{icon.statusNew && (
			<div className="p-2 absolute top-0 right-0">
				<div className="px-2 bg-indigo-500 rounded-full shadow-xs">
					<p className="font-bold text-xs tracking-widest font-mono text-white">
						NEW
					</p>
				</div>
			</div>
		)}

		{/* Icon */}
		<SVG
			id={icon.name}
			className="text-white w-8 h-8"
			svg={icon.solid}
		/>

		{/* Name */}
		<div className="p-3 absolute bottom-0">
			<p className="font-semibold text-sm leading-tight font-mono text-center text-gray-100">
				{icon.name}
			</p>
		</div>

	</div>
))

// TODO
const Icons = ({ icons }) => (
	<div style={{ minHeight: "calc(100vh - 13.5rem)" }}>
		<div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">

			{icons.map(each => (
				<div key={each.name} className="relative" style={{ paddingBottom: "100%" }}>
					<div className="absolute inset-0">
						<MemoIcon icon={each} />
					</div>
				</div>
			))}

		</div>
	</div>
)

export default App
