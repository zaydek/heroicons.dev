import CarbonAds from "./CarbonAds"
import iconset from "./iconset"
import React from "react"

import FlagOutlineSVG from "heroicons-ecfba30/outline/Flag.jsx"
import SearchOutlineSVG from "heroicons-ecfba30/outline/Search.jsx"
import XCircleSolidSVG from "heroicons-ecfba30/solid/XCircle.jsx"

import { ReactComponent as FigmaSVG } from "svg/figma.svg"
import { ReactComponent as GitHubSVG } from "svg/github.svg"

import srcAdamW from "images/adam-wathan.jpg"
import srcSteveS from "images/steve-schoger.jpg"
import srcZaydekMG from "images/zaydek-mg.png"

import "debug.css"

// ;(() => {
// 	document.body.classList.add("debug-css")
// })()

// TODO
document.body.classList.add("bg-gray-900")

const App = () => {
	const [searchQuery, setSearchQuery] = React.useState("")
	const [preferSolid, setPreferSolid] = React.useState(true /* TODO */)

	return (
		// <div className="bg-gray-900">

			<div className="px-6 flex flex-row justify-center">
				<div className="py-24 w-full max-w-screen-lg">

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
							<div className="ml-2 -mt-1 absolute" style={{ left: "100%" }}>
								{/* TODO */}
								<FlagOutlineSVG className="w-12 h-12 text-indigo-500" />
							</div>
						</div>

						{/* <h1> */}
						{/* <div className="relative flex flex-row items-center"> */}
						{/* 	<h1 className="font-bold text-4xl text-white"> */}
						{/* 		Heroicons */}
						{/* 	</h1> */}
						{/* 	<div className="absolute" style={{ left: "100%" }}> */}
						{/* 		<svg className="w-10 h-10 text-indigo-500 transform scale-90 origin-right" fill="currentColor" viewBox="0 0 20 20"> */}
						{/* 			<path d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" fillRule="evenodd" /> */}
						{/* 		</svg> */}
						{/* 	</div> */}
						{/* </div> */}

						{/* <h2> */}
						<div className="mt-6">
							<h2 className="font-medium text-base sm:text-xl text-center text-gray-100">
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
						<div className="mt-2">
							<h2 className="font-medium text-base sm:text-xl text-center text-gray-100">
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

						<div className="mt-12 space-y-3 sm:space-y-0 sm:space-x-3 flex flex-col sm:flex-row w-full sm:w-auto">
							<a href="https://github.com/refactoringui/heroicons" target="_blank" rel="noopener noreferrer">
								<button className="px-6 !py-4 flex flex-row justify-center items-center w-full sm:w-auto h-16 bg-gray-700 hover:bg-gray-600 rounded-75 transition duration-200 ease-in-out">
									<GitHubSVG className="mr-3 w-6 h-6 text-white" />
									<p className="font-medium text-lg text-gray-100">
										Open in GitHub
									</p>
								</button>
							</a>
							<a href="https://figma.com/file/vfjBXrSSOCgmVEX5fdvV4L/Heroicons-v0.1-2abb814" target="_blank" rel="noopener noreferrer">
								<button className="px-6 !py-4 flex flex-row justify-center items-center w-full sm:w-auto h-16 bg-gray-700 hover:bg-gray-600 rounded-75 transition duration-200 ease-in-out">
									<FigmaSVG className="mr-3 w-6 h-6" />
									<p className="font-medium text-lg text-gray-100">
										Open in Figma
									</p>
								</button>
							</a>
						</div>
					</div>

					<div className="h-12" />
					<MemoSearchInput
						searchQueryTuple={[searchQuery, setSearchQuery]}
						preferSolidTuple={[preferSolid, setPreferSolid]}
					/>

					<div className="h-12" />
					<MemoIconResults
						searchQueryTuple={[searchQuery, setSearchQuery]}
						preferSolidTuple={[preferSolid, setPreferSolid]}
					/>

					<div className="h-screen" />
					<div className="h-screen" />

				</div>
			</div>

		// </div>
	)
}

const MemoSearchInput = React.memo(({
	searchQueryTuple: [searchQuery, setSearchQuery],
	preferSolidTuple: [preferSolid, setPreferSolid],
}) => {
	//...

	// NOTE: Must use pt-* not mt-*.
	return (
		<div className="-mt-6 pt-6 sticky top-0 z-40" style={{ boxShadow: "inset 0 2.25rem 0 0 var(--gray-900)" }}>
			<div className="relative">

				{/* LHS */}
				<div className="mx-6 absolute inset-y-0 left-0 flex flex-row items-center">
					<SearchOutlineSVG className="w-6 h-6 text-gray-400" />
				</div>

				{/* Center */}
				<div className="shadow-md">
					<input
						className="px-16 w-full max-w-full h-16 text-xl text-gray-100 bg-gray-700 rounded-75 focus:outline-none shadow-hero-lg"
						type="text"
						placeholder={"Search 224 icons (Press \"/\" to focus)"}
						value={searchQuery}
						onChange={e => {
							const searchQuery = e.target.value
							setSearchQuery(searchQuery)
						}}
					/>
				</div>

				{/* RHS */}
				<div className="mx-6 absolute inset-y-0 right-0 flex flex-row items-center">
					<XCircleSolidSVG className="w-6 h-6 text-gray-400" />
				</div>

			</div>
		</div>
	)
})

const SVG = ({ svg: ShadowSVG, ...props }) => (
	<ShadowSVG {...props} />
)

const MemoIconResults = React.memo(({
	searchQueryTuple: [searchQuery, setSearchQuery],
	preferSolidTuple: [preferSolid, setPreferSolid],
}) => {
	//...

	// style={{ minHeight: "calc(100vh - 6rem - 5.5rem - 1.5rem)" /* 100vh - py-20 - <Search> - h-6 */ }}

	// NOTE: Must use pt-* not mt-*.
	return (
		<div>
			<div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
				{/* {ctx.icons.map(each => ( */}
				{/* 	<IconCard key={each.name} {...each} /> */}
				{/* ))} */}

				{iconset.map(each => (
					<div className="relative" style={{ paddingBottom: "100%" }}>
						<div className="absolute inset-0">
							<div className="flex flex-row justify-center items-center w-full h-full bg-gray-700 hover:bg-indigo-500 rounded-75 transition duration-200 ease-in-out">
								<SVG className="text-white w-8 h-8" svg={each.solid} />
							</div>
						</div>
					</div>
				))}

			</div>
		</div>

	)
})

export default App
