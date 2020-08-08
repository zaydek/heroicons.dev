import CarbonAds from "./CarbonAds"
import disableAutoCorrect from "./disableAutoCorrect"
import DocumentTitle from "lib/x/DocumentTitle"
import iconset from "./iconset"
import React from "react"
import SVG from "./SVG"
import Transition from "lib/x/Transition"
import useHeroiconsReducer from "./useHeroiconsReducer"

// import ExternalLinkSolidSVG from "heroicons-ecfba30/solid/ExternalLink"
// import SunOutlineSVG from "heroicons-ecfba30/outline/Sun"
// import SunSolidSVG from "heroicons-ecfba30/solid/Sun"
import CodeOutlineSVG from "heroicons-ecfba30/outline/Code"
import CodeSolidSVG from "heroicons-ecfba30/solid/Code"
import CursorClickSolidSVG from "heroicons-ecfba30/solid/CursorClick"
import FlagSolidSVG from "heroicons-ecfba30/solid/Flag"
import SearchOutlineSVG from "heroicons-ecfba30/outline/Search"
import SwitchHorizontalSolidSVG from "heroicons-ecfba30/solid/SwitchHorizontal"

import { ReactComponent as FigmaLogoSVG } from "svg/figma.svg"
import { ReactComponent as GitHubLogoSVG } from "svg/github.svg"

import srcAdamW from "images/adam-wathan.jpg"
import srcSteveS from "images/steve-schoger.jpg"
import srcZaydekMG from "images/zaydek-mg.png"

// TODO
document.body.classList.add("bg-black")
// document.body.classList.add("debug-css")

// {/* Carbon Ads */}
// {/* <div className="px-4 py-3 absolute top-0 right-0 z-30 pointer-events-none"> */}
// {/* 	<div className="flex flex-row justify-center lg:justify-end items-start"> */}
// {/* 		<CarbonAds */}
// {/* 			className="text-gray-800 dark:text-gray-100 bg-gray-100 dark:bg-black transition pointer-events-auto" */}
// {/* 			src="//cdn.carbonads.com/carbon.js?serve=CE7DV2QJ&placement=heroiconsdev" */}
// {/* 		/> */}
// {/* 	</div> */}
// {/* </div> */}

// Converts kebab-case to camelCase.
function toCamelCase(str) {
	return str.split("-").map(each => each.slice(0, 1).toUpperCase() + each.slice(1))
}

const App = () => {
	const [state, dispatch] = useHeroiconsReducer()

	const mounted = React.useRef()
	React.useEffect(
		React.useCallback(() => {
			if (!mounted.current) {
				mounted.current = true
				return
			}
			const id = setTimeout(() => {
				dispatch({
					type: "HIDE_CLIPBOARD_ICON_NOTIFICATION",
				})
			}, 2e3)
			return () => {
				clearTimeout(id)
			}
		}, [dispatch]),
		[state.showClipboardIconNotification],
	)

	return (
		<div className="py-32 flex flex-row justify-center">
			<div className="px-6 w-full max-w-screen-lg">

				{/* <aside> */}
				<aside className="space-y-1 px-3 py-2 absolute top-0 left-0 hidden lg:block">
					{/* NOTE: block is needed for space-y-* */}
					<a className="block" href="https://github.com/refactoringui/heroicons" target="_blank" rel="noopener noreferrer">
						<p className="flex flex-row items-center font-medium text-gray-100">
							<GitHubLogoSVG className="mr-2 w-5 h-5 rounded-full" />
							<span style={{ boxShadow: "inset 0 -1.5px var(--indigo-500), 0 1.5px var(--indigo-500)" }}>
								Open the GitHub repo
							</span>
							{/* <ExternalLinkSolidSVG className="ml-1 w-4 h-4 text-indigo-500" /> */}
						</p>
					</a>
					<a className="block" href="https://github.com/codex-src/heroicons.dev" target="_blank" rel="noopener noreferrer">
						<p className="flex flex-row items-center font-medium text-gray-100">
							<GitHubLogoSVG className="mr-2 w-5 h-5 rounded-full" />
							<span style={{ boxShadow: "inset 0 -1.5px var(--indigo-500), 0 1.5px var(--indigo-500)" }}>
								Open the GitHub heroicons.dev repo
							</span>
							{/* <ExternalLinkSolidSVG className="ml-1 w-4 h-4 text-indigo-500" /> */}
						</p>
					</a>
					<a className="block" href="https://github.com/codex-src/heroicons.dev" target="_blank" rel="noopener noreferrer">
						<p className="flex flex-row items-center font-medium text-gray-100">
							<FigmaLogoSVG className="mr-2 w-5 h-5 rounded-full" />
							<span style={{ boxShadow: "inset 0 -1.5px var(--indigo-500), 0 1.5px var(--indigo-500)" }}>
								Open the Figma file
							</span>
							{/* <ExternalLinkSolidSVG className="ml-1 w-4 h-4 text-indigo-500" /> */}
						</p>
					</a>
				</aside>

				{/* <header> */}
				<header className="flex flex-col items-center">

					{/* <h1> */}
					<div className="relative flex flex-row items-center">
						<h1 className="font-bold text-5xl text-white" style={{ fontFamily: "DM Sans", letterSpacing: "-0.0375em" }}>
							Heroicons
						</h1>
						<div className="-mt-1  ml-2 absolute" style={{ left: "100%" }}>
							<FlagSolidSVG className="w-12 h-12 text-indigo-500" />
						</div>
					</div>

					{/* <h2> */}
					<h2 className="text-center font-medium text-xl sm:text-2xl leading-9 text-gray-100">
						MIT-Licensed Open Source UI Icons
					</h2>

					{/* <h2> */}
					<div className="h-4" />
					<h2 className="text-center font-medium text-lg sm:text-xl leading-9 text-gray-100">
						<span className="hidden md:inline">
							Created by{" "}
						</span>
						<a href="https://twitter.com/steveschoger" target="_blank" rel="noopener noreferrer">
							<img className="mx-1 inline-block w-8 h-8 rounded-full" src={srcSteveS} alt="Steve Schoger" />
							{" "}
							<span style={{ boxShadow: "inset 0 -1.5px var(--indigo-500), 0 1.5px var(--indigo-500)" }}>
								@steveschoger
							</span>
						</a>{" "}
						<span className="hidden md:inline">
							and{" "}
						</span>
						<a href="https://twitter.com/adamwathan" target="_blank" rel="noopener noreferrer">
							<img className="mx-1 inline-block w-8 h-8 rounded-full" src={srcAdamW} alt="Adam Wathan" />{" "}
							<span style={{ boxShadow: "inset 0 -1.5px var(--indigo-500), 0 1.5px var(--indigo-500)" }}>
								@adamwathan
							</span>
						</a>
						<br />
						<span className="hidden md:inline">
							Website by{" "}
						</span>
						<a href="https://twitter.com/username_ZAYDEK" target="_blank" rel="noopener noreferrer">
							<img className="mx-1 inline-block w-8 h-8 rounded-full" src={srcZaydekMG} alt="Zaydek MG" />{" "}
							<span style={{ boxShadow: "inset 0 -1.5px var(--indigo-500), 0 1.5px var(--indigo-500)" }}>
								@username_ZAYDEK
							</span>
						</a>
					</h2>

				</header>

				<div className="h-24" />
				<SearchForm
					state={state}
					dispatch={dispatch}
				/>

				<div className="h-4" />
				<DocumentTitle title={!state.form.search ? "Heroicons" : `${state.results.length} result${state.results.length === 1 ? "" : "s"}`}>
					<Icons
						state={state}
						dispatch={dispatch}
					/>
				</DocumentTitle>

				<Transition
					on={state.showClipboardIconNotification}
					className="transition duration-200 ease-in-out"
					from="opacity-0 transform translate-y-4 pointer-events-none"
					to="opacity-100 transform translate-y-0 pointer-events-auto"
				>
					<div className="px-6 py-4 fixed bottom-0 right-0">
						<div className="rounded-md shadow-lg">
							<div className="px-3 py-2 bg-indigo-500 rounded-md shadow-lg">
								<p className="flex flex-row items-center font-semibold text-indigo-50">
									{state.clipboardIcon && (
										<>
											<SVG className="mr-2 w-5 h-5" svg={state.clipboardIcon[!state.form.showOutline ? "solid" : "outline"]} />
											<span className="inline-flex flex-row items-baseline">
												Copied
												<span style={{ width: "0.5ch" }} />
												<span className="font-mono">
													{"<"}
													{!state.form.copyAsReact
														? state.clipboardIcon.name
														: toCamelCase(state.clipboardIcon.name)
													}
													{">"}
												</span>
												<span style={{ width: "0.5ch" }} />
												to the clipboard!
											</span>
										</>
									)}
								</p>
							</div>
						</div>
					</div>
				</Transition>

			</div>
		</div>
	)
}

const SearchForm = ({ state, dispatch }) => {
	const inputRef = React.useRef()

	const [text, setText] = React.useState("")
	const [tooltip, setTooltip] = React.useState("")

	// Debounces search.
	const mounted = React.useRef()
	React.useEffect(
		React.useCallback(() => {
			if (!mounted.current) {
				mounted.current = true
				return
			}
			const id = setTimeout(() => {
				dispatch({
					type: "UPDATE_FORM_SEARCH_QUERY",
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
		<div className="-mt-4 pt-4 sticky top-0 z-40" style={{ boxShadow: "inset 0 2.25rem 0 0 var(--black)" }}>
			<form className="relative" onSubmit={e => e.preventDefault()}>

				{/* LHS */}
				<div className="px-6 absolute inset-y-0 left-0 flex flex-row items-center">
					<SearchOutlineSVG className="w-6 h-6 text-gray-500" />
				</div>

				{/* <input> */}
				<div className="rounded-75 shadow-lg">
					<input
						ref={inputRef}
						className="px-16 w-full max-w-full h-16 text-lg sm:text-xl placeholder-gray-400 text-gray-100 bg-gray-800 border-2 border-gray-800 focus:border-indigo-500 rounded-75 focus:outline-none shadow-lg transition duration-200 ease-in-out"
						type="text"
						placeholder={`Search ${iconset.length} Icons (Press "/" to focus)`}
						value={text}
						onKeyDown={e => {
							if (e.keyCode === 27 || e.key === "Escape") {
								setText("")
							}
						}}
						onChange={e => setText(e.target.value)}
						{...disableAutoCorrect}
					/>
				</div>

				{/* RHS */}
				<div className="px-6 absolute inset-y-0 right-0 flex flex-row">

					<div
						className="flex flex-row items-center"
						onFocus={e => setTooltip("jsx")}
						onBlur={e => setTooltip("")}
						onMouseEnter={e => setTooltip("jsx")}
						onMouseLeave={e => setTooltip("")}
					>
						<button
							className="p-2 relative text-gray-400 hover:bg-gray-700 hover:bg-opacity-75 focus:bg-gray-700 focus:bg-opacity-75 rounded-full focus:outline-none transition duration-200 ease-in-out"
							style={{
								color: state.form.copyAsReact && "var(--gray-100)",
								backgroundColor: state.form.copyAsReact && "#374151bf", // e.g. bg-gray-700 bg-gopacity-75
							}}
							onClick={e => {
								dispatch({
									type: "TOGGLE_FORM_COPY_AS_REACT",
									text,
								})
							}}
						>
							{tooltip === "jsx" && (
								<div className="pt-1.5 absolute top-full right-0">
									<div className="rounded-md shadow-lg">
										<div className="px-3 py-2 relative bg-gray-700 rounded-md shadow-lg">
											<div className="p-0.5">
												<p className="whitespace-pre font-medium text-sm text-gray-100">
													Copy Icons as React JSX
													<span
														className="ml-2"
														style={{ fontSize: "120%", lineHeight: "1", verticalAlign: "-10%" }}
														aria-label="atom symbol"
														role="img"
													>
														⚛️
													</span>
												</p>
											</div>
										</div>
									</div>
								</div>
							)}
							<CodeSolidSVG className="w-6 h-6" />
						</button>
					</div>

					<div
						className="flex flex-row items-center"
						onFocus={e => setTooltip("alt")}
						onBlur={e => setTooltip("")}
						onMouseEnter={e => setTooltip("alt")}
						onMouseLeave={e => setTooltip("")}
					>
						<button
							className="p-2 relative text-gray-400 hover:bg-gray-700 hover:bg-opacity-75 focus:bg-gray-700 focus:bg-opacity-75 rounded-full focus:outline-none transition duration-200 ease-in-out"
							style={{
								color: state.form.showOutline && "var(--gray-100)",
								backgroundColor: state.form.showOutline && "#374151bf", // e.g. gray-700 opacity-75
							}}
							onClick={e => {
								dispatch({
									type: "TOGGLE_FORM_SHOW_OUTLINE",
									text,
								})
							}}
						>
							{tooltip === "alt" && (
								<div className="pt-1.5 absolute top-full right-0">
									<div className="rounded-md shadow-lg">
										<div className="px-3 py-2 relative bg-gray-700 rounded-md shadow-lg">
											<div className="p-0.5">
												<p className="whitespace-pre font-medium text-sm text-gray-100">
													Change to {!state.form.showOutline ? "Outline" : "Solid"} Icons
													<span
														className="ml-2"
														style={{ fontSize: "120%", lineHeight: "1", verticalAlign: "-10%" }}
														aria-label="triangular ruler"
														role="img"
													>
														📐
													</span>
												</p>
											</div>
										</div>
									</div>
								</div>
							)}
							<SwitchHorizontalSolidSVG className="w-6 h-6" />
						</button>
					</div>

					{/* Toggle dark mode */}
					{/* <span */}
					{/* 	className="ml-2" */}
					{/* 	style={{ fontSize: "120%", lineHeight: "1", verticalAlign: "-10%" }} */}
					{/* 	aria-label="sun" */}
					{/* 	role="img" */}
					{/* > */}
					{/* 	☀️ */}
					{/* </span> */}

				</div>

			</form>

		</div>
	)
}

// NOTE: <div tabIndex={0}> is preferred to <button>.
const MemoIcon = React.memo(({ state, dispatch, icon }) => {

	const handleClick = e => {
		navigator.clipboard.writeText('Text to be copied')
			.then(() => {
				console.log('Text copied to clipboard');
			})
			.catch(err => {
				// This can happen if the user denies clipboard permissions:
				console.error('Could not copy text: ', err);
			});
		dispatch({
			type: "UPDATE_CLIPBOARD_ICON",
			icon,
		})
	}

	return (
		<div
			className="flex flex-row justify-center items-center h-full bg-gray-800 border-2 border-gray-800 focus:border-indigo-500 rounded-75 focus:outline-none cursor-pointer transition duration-200 ease-in-out"
			onClick={handleClick}
			tabIndex={0}
		>

			{/* NEW */}
			{icon.statusNew && (
				<div className="px-3 py-2 absolute top-0 right-0">
					{/* <div className="w-4 h-4 bg-indigo-500 rounded-full" /> */}
					<div className="px-1.5 bg-indigo-500 rounded-full">
						{/* NOTE: font-bold is preferred to font-semibold. */}
						<p className="font-bold text-xxs text-indigo-50">
							NEW
						</p>
					</div>
				</div>
			)}

			{/* Icon */}
			<SVG
				id={icon.name}
				className="w-8 h-8 text-gray-100"
				svg={icon[!state.form.showOutline ? "solid" : "outline"]}
			/>

			{/* Name */}
			<div className="px-3 py-2 absolute bottom-0">
				{/* <div style={{ paddingBottom: 1.5 }}> */}
				<p className="text-center font-semibold text-sm leading-tight font-mono text-gray-100">
					{!state.form.searchQuery || state.form.searchQuery === "new" ? (
						icon.name
					) : (
						(substrs => (
							<>
								{substrs[0]}
								{/* <span className="p-px bg-indigo-500 rounded"> */}
								{/* <span style={{ boxShadow: "inset 0 -1.5px var(--indigo-500), 0 1.5px var(--indigo-500)" }}> */}
								{/* <span style={{ boxShadow: "inset 0 -1.5px var(--yellow-200), 0 1.5px var(--yellow-200)" }}> */}
								<span className="px-px text-black bg-yellow-200 rounded">
									{state.form.searchQuery}
								</span>
								{icon.name.slice(substrs[0].length + state.form.searchQuery.length)}
							</>
						))(icon.name.split(state.form.searchQuery, 1))
					)}
				</p>
				{/* </div> */}
			</div>

		</div>
	)
}, (prev, next) => {
	const ok = (
		prev.state.form.searchQuery === next.state.form.searchQuery &&
		prev.state.form.copyAsReact === next.state.form.copyAsReact &&
		prev.state.form.showOutline === next.state.form.showOutline &&
		prev.state.dispatch === next.state.dispatch &&
		prev.icon === next.icon
	)
	return ok
})

// +---- pt-24 ----+
// |  -mt-4 pt-4   |
// |   =========   |
// |      h-4      |
// |               |
// |               |
// |               |
// +---- pb-24 ----+

const Icons = ({ state, dispatch }) => (
	<main style={{ minHeight: "calc(100vh - 14rem)" }}>
		<div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
			{state.results.map(each => (
				<div key={each.name} className="relative" style={{ paddingBottom: "100%" }}>
					<div className="absolute inset-0">
						<MemoIcon
							state={state}
							dispatch={dispatch}
							icon={each}
						/>
					</div>
				</div>
			))}
		</div>
	</main>
)

export default App
