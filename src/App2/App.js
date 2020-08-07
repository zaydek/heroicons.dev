import CarbonAds from "./CarbonAds"
import FlagSolidSVG from "heroicons-ecfba30/solid/Flag.jsx"
import iconset from "./iconset"
import React from "react"
import SearchOutlineSVG from "heroicons-ecfba30/outline/Search.jsx"
import XCircleSolidSVG from "heroicons-ecfba30/solid/XCircle.jsx"
import { ReactComponent as FigmaSVG } from "svg/figma.svg"
import { ReactComponent as GitHubSVG } from "svg/github.svg"
import { useImmerReducer } from "use-immer"

import srcAdamW from "images/adam-wathan.jpg"
import srcSteveS from "images/steve-schoger.jpg"
import srcZaydekMG from "images/zaydek-mg.png"

// import "debug.css"
//
// ;(() => {
// 	document.body.classList.add("debug-css")
// })()

const initialState = {
	darkMode: false,
	form: {
		search: "",
		family: "solid", // TODO,
	},
	matches: [],
}

const actions = app => ({
	// Toggles dark mode.
	toggleDarkMode() {
		app.darkMode = !app.darkMode
	},
	// Updates form.search=text.
	updateFormSearch(text) {
		app.form.search = text

		// TODO
	},
	// Toggles form.family.
	toggleFormFamily() {
		app.form.family = app.form.family === "solid" && app.form.family !== "outline" ? "outline"
			: "solid"

		// TODO
	},
})

function HeroiconsReducer(state, action) {
	switch (action.type) {
	case "TOGGLE_DARK_MODE":
		actions(state).toggleDarkMode()
		return
	case "UPDATE_FORM_SEARCH":
		actions(state).updateFormSearch(action.text)
		return
	case "TOGGLE_FORM_FAMILY":
		actions(state).toggleFormFamily()
		return
	default:
		throw new Error(`HeroiconsReducer: type mismatch; action.type=${action.type}`)
	}
}

// TODO
document.body.classList.add("bg-gray-900")

const App = () => {
	const [state, dispatch] = useImmerReducer(HeroiconsReducer, {}, () => initialState)

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
				{/* 			className="text-gray-800 dark:text-gray-100 bg-gray-100 dark:bg-gray-900 transition pointer-events-auto" */}
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
					<div className="mt-8">
						<h2 className="font-medium text-lg sm:text-xl text-center text-gray-100">
							<a href="https://github.com/tailwindlabs/heroicons/blob/master/LICENSE" target="_blank" rel="noopener noreferrer">
								<u style={{ textDecoration: "none", boxShadow: "inset 0 -1.5px var(--indigo-500), 0 1.5px var(--indigo-500)" }}>
									MIT Licensed
								</u>
							</a>{" "}
							and{" "}
							<a href="https://github.com/tailwindlabs/heroicons" target="_blank" rel="noopener noreferrer">
								<u style={{ textDecoration: "none", boxShadow: "inset 0 -1.5px var(--indigo-500), 0 1.5px var(--indigo-500)" }}>
									Open Source
								</u>
							</a>{" "}
							UI Icons
						</h2>
					</div>

					{/* <h2> */}
					<div className="mt-4">
						<h2 className="font-medium text-lg sm:text-xl text-center text-gray-100">
							By
							<a href="https://twitter.com/steveschoger" target="_blank" rel="noopener noreferrer">
								<img className="mx-2 inline-block w-8 h-8 rounded-full" src={srcSteveS} alt="Steve Schoger" />
								<u style={{ textDecoration: "none", boxShadow: "inset 0 -1.5px var(--indigo-500), 0 1.5px var(--indigo-500)" }}>
									Steve
								</u>
							</a>{" "}
							and
							<a href="https://twitter.com/adamwathan" target="_blank" rel="noopener noreferrer">
								<img className="mx-2 inline-block w-8 h-8 rounded-full" src={srcAdamW} alt="Adam Wathan" />
								<u style={{ textDecoration: "none", boxShadow: "inset 0 -1.5px var(--indigo-500), 0 1.5px var(--indigo-500)" }}>
									Adam
								</u>
							</a>
							,{" "}
							<br className="inline sm:hidden" />
							<a href="https://twitter.com/username_ZAYDEK" target="_blank" rel="noopener noreferrer">
								web app by
								<img className="mx-2 inline-block w-8 h-8 rounded-full" src={srcZaydekMG} alt="Zaydek MG" />
								<u style={{ textDecoration: "none", boxShadow: "inset 0 -1.5px var(--indigo-500), 0 1.5px var(--indigo-500)" }}>
									Zaydek
								</u>
							</a>
						</h2>
					</div>

					{/* <div className="mt-12 space-y-3 sm:space-y-0 sm:space-x-3 flex flex-col sm:flex-row w-full sm:w-auto"> */}
					{/* 	<a href="https://github.com/refactoringui/heroicons" target="_blank" rel="noopener noreferrer"> */}
					{/* 		<button className="px-6 !py-4 flex flex-row justify-center items-center w-full sm:w-auto h-16 bg-gray-700 hover:bg-gray-600 rounded-75 transition duration-200 ease-in-out"> */}
					{/* 			<GitHubSVG className="mr-3 w-6 h-6 text-white" /> */}
					{/* 			<p className="font-medium text-lg text-gray-100"> */}
					{/* 				Open in GitHub */}
					{/* 			</p> */}
					{/* 		</button> */}
					{/* 	</a> */}
					{/* 	<a href="https://figma.com/file/vfjBXrSSOCgmVEX5fdvV4L/Heroicons-v0.1-2abb814" target="_blank" rel="noopener noreferrer"> */}
					{/* 		<button className="px-6 !py-4 flex flex-row justify-center items-center w-full sm:w-auto h-16 bg-gray-700 hover:bg-gray-600 rounded-75 transition duration-200 ease-in-out"> */}
					{/* 			<FigmaSVG className="mr-3 w-6 h-6" /> */}
					{/* 			<p className="font-medium text-lg text-gray-100"> */}
					{/* 				Open in Figma */}
					{/* 			</p> */}
					{/* 		</button> */}
					{/* 	</a> */}
					{/* </div> */}

				</div>

				<div className="h-16" />
				<MemoSearchInput
					state={state}
					dispatch={dispatch}
				/>

				<div className="h-8" />
				<MemoIconResults
					state={state}
					dispatch={dispatch}
				/>

			</div>
		</div>
	)
}

// TODO
const MemoSearchInput = React.memo(({ state, dispatch }) => {
	//...

	return (
		<div className="-mt-6 pt-6 sticky top-0 z-40" style={{ boxShadow: "inset 0 2.25rem 0 0 var(--gray-900)" }}>
			<div className="relative">

				{/* LHS */}
				<div className="px-6 absolute inset-y-0 left-0 flex flex-row items-center">
					<SearchOutlineSVG className="w-6 h-6 text-gray-400" />
				</div>

				{/* Center */}
				<div className="shadow-md rounded-75">
					<input
						className="px-16 w-full max-w-full h-16 text-lg sm:text-xl text-gray-100 bg-gray-700 hover:bg-gray-600 rounded-75 focus:outline-none shadow-hero-lg transition duration-200 ease-in-out"
						type="text"
						placeholder={"Search 224 icons (Press \"/\" to focus)"}
						value={state.form.search}
						onChange={e => {
							const text = e.target.value
							dispatch({
								type: "UPDATE_FORM_SEARCH",
								text,
							})
						}}
					/>
				</div>

				{/* RHS */}
				{state.form.search && (
					<div className="px-6 absolute inset-y-0 right-0 flex flex-row items-center">
						<XCircleSolidSVG className="w-6 h-6 text-gray-400" />
					</div>
				)}

			</div>
		</div>
	)
})

const SVG = ({ svg: ShadowSVG, ...props }) => (
	<ShadowSVG {...props} />
)

// TODO
const MemoIconResults = React.memo(({ state, dispatch }) => {
	//...

	return (
		<div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3" style={{ minHeight: "calc(100vh - 11.5rem)" /* 100vh - top - bottom */ }}>
			{iconset.map(each => (
				<div className="relative" style={{ paddingBottom: "100%" }}>
					<div className="absolute inset-0">

						<div className="flex flex-row justify-center items-center w-full h-full bg-gray-700 hover:bg-gray-600 rounded-75 transition duration-200 ease-in-out">

							{each.statusNew && (
								<div className="p-2 absolute top-0 right-0">
									<div className="px-2 bg-indigo-500 rounded-full shadow-xs">
										<p className="font-bold text-xs tracking-widest font-mono text-white" style={{ fontFamily: "IBM Plex Mono" }}>
											NEW
										</p>
									</div>
								</div>
							)}

							<SVG className="text-white w-8 h-8" svg={each["solid"]} />

							<div className="p-3 absolute bottom-0">
								<p className="font-semibold text-sm leading-tight font-mono text-center text-gray-100">
									{each.name}
								</p>
							</div>

						</div>

					</div>
				</div>
			))}

		</div>
	)
})

export default App
