import CarbonAds from "./CarbonAds"
import copyToClipboardPolyfill from "./copyToClipboardPolyfill"
import disableAutoCorrect from "./disableAutoCorrect"
import DocumentTitle from "lib/x/DocumentTitle"
import iconset from "./iconset"
import React from "react"
import SVG from "./SVG"
import tailwindcss from "tailwindcss/js/tailwind.config.js"
import Transition from "lib/x/Transition"
import useHeroiconsReducer from "./useHeroiconsReducer"
import useLayoutBreakpoints from "lib/x/useLayoutBreakpoints"

import CodeSolidSVG from "heroicons-ecfba30/solid/Code"
import EmojiSadSolidSVG from "heroicons-ecfba30/solid/EmojiSad"
import ExternalLinkOutlineSVG from "heroicons-ecfba30/outline/ExternalLink"
import FlagSolidSVG from "heroicons-ecfba30/solid/Flag"
import SearchOutlineSVG from "heroicons-ecfba30/outline/Search"
import SwitchHorizontalSolidSVG from "heroicons-ecfba30/solid/SwitchHorizontal"
import { ReactComponent as FigmaLogoSVG } from "svg/figma.svg"
import { ReactComponent as GitHubLogoSVG } from "svg/github.svg"

import srcAdamWathan from "images/adam-wathan.jpg"
import srcSteveSchoger from "images/steve-schoger.jpg"
import srcZaydekMG from "images/zaydek-mg.png"

// TODO
document.body.classList.add("bg-black")

// {/* Carbon Ads */}
// {/* <div className="px-4 py-3 absolute top-0 right-0 z-30 pointer-events-none"> */}
// {/* 	<div className="flex flex-row justify-center lg:justify-end items-start"> */}
// {/* 		<CarbonAds */}
// {/* 			className="text-gray-800 dark:text-gray-100 bg-gray-100 dark:bg-black transition pointer-events-auto" */}
// {/* 			src="//cdn.carbonads.com/carbon.js?serve=CE7DV2QJ&placement=heroiconsdev" */}
// {/* 		/> */}
// {/* 	</div> */}
// {/* </div> */}

const Space = () => (
	<span style={{ width: "0.5ch" }} />
)

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
				{/* */}
				{/* NOTE: Uses p-3 not px-3 py-2. */}
				<aside className="space-x-4 p-3 absolute top-0 inset-x-0 hidden lg:flex lg:flex-row lg:justify-center">

					{/* https://github.com/refactoringui/heroicons */}
					<a className="block" href="https://github.com/refactoringui/heroicons" target="_blank" rel="noopener noreferrer">
						<p className="flex flex-row items-center font-medium text-gray-100">
							<GitHubLogoSVG className="mr-1 w-5 h-5" />
							<Space />
							Open the GitHub repo
							<Space />
							<ExternalLinkOutlineSVG className="w-4 h-4 text-indigo-400" />
						</p>
					</a>

					{/* https://github.com/codex-src/heroicons.dev */}
					<a className="block" href="https://github.com/codex-src/heroicons.dev" target="_blank" rel="noopener noreferrer">
						<p className="flex flex-row items-center font-medium text-gray-100">
							<GitHubLogoSVG className="mr-1 w-5 h-5" />
							<Space />
							Open the GitHub
							<Space />
							<span className="underline" style={{ textDecorationColor: "var(--indigo-500)" }}>
								heroicons.dev
							</span>
							<Space />
							repo
							<Space />
							<ExternalLinkOutlineSVG className="w-4 h-4 text-indigo-400" />
						</p>
					</a>

					{/* https://figma.com/file/vfjBXrSSOCgmVEX5fdvV4L */}
					<a className="block" href="https://figma.com/file/vfjBXrSSOCgmVEX5fdvV4L" target="_blank" rel="noopener noreferrer">
						<p className="flex flex-row items-center font-medium text-gray-100">
							<FigmaLogoSVG className="wmr-1 -5 h-5" />
							<Space />
							Open the Figma file
							<Space />
							<ExternalLinkOutlineSVG className="w-4 h-4 text-indigo-400" />
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
						<div className="-mt-1 absolute" style={{ paddingLeft: "0.5ch", left: "100%" }}>
							<FlagSolidSVG className="w-12 h-12 text-indigo-500" />
						</div>
					</div>

					{/* <h2> */}
					<h2 className="text-center font-medium text-xl sm:text-2xl leading-9 text-gray-100">
						MIT-Licensed Open Source UI Icons
					</h2>

					{/* <h2> */}
					<div className="h-4 hidden sm:block" />
					<h2 className="hidden sm:block text-center font-medium text-xl leading-9 text-gray-100">
						<span className="hidden md:inline">
							Created by{" "}
						</span>
						<a href="https://twitter.com/steveschoger" target="_blank" rel="noopener noreferrer">
							<img className="mx-1 inline-block w-8 h-8 rounded-full" src={srcSteveSchoger} alt="Steve Schoger" />{" "}
							<span className="underline" style={{ textDecorationColor: "var(--indigo-500)" }}>
								@steveschoger
							</span>
						</a>{" "}
						<span className="hidden md:inline">
							and{" "}
						</span>
						<a href="https://twitter.com/adamwathan" target="_blank" rel="noopener noreferrer">
							<img className="mx-1 inline-block w-8 h-8 rounded-full" src={srcAdamWathan} alt="Adam Wathan" />{" "}
							<span className="underline" style={{ textDecorationColor: "var(--indigo-500)" }}>
								@adamwathan
							</span>
						</a>
						<br />
						<span className="hidden md:inline">
							Website by{" "}
						</span>
						<a href="https://twitter.com/username_ZAYDEK" target="_blank" rel="noopener noreferrer">
							<img className="mx-1 inline-block w-8 h-8 rounded-full" src={srcZaydekMG} alt="Zaydek MG" />{" "}
							<span className="underline" style={{ textDecorationColor: "var(--indigo-500)" }}>
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
				<Icons
					state={state}
					dispatch={dispatch}
				/>

				<Transition
					on={state.showClipboardIconNotification}
					className="transition duration-200 ease-in-out"
					from="opacity-0 transform translate-y-4 pointer-events-none"
					to="opacity-100 transform translate-y-0 pointer-events-auto"
				>
					{/* NOTE: Uses p-3 not px-3 py-2. */}
					<div className="p-3 fixed bottom-0 left-0">
						<div className="rounded-md shadow-lg">
							<div className="px-3 py-2 bg-indigo-500 rounded-md shadow-lg">
								<p className="flex flex-row items-center font-semibold text-indigo-50">
									{state.clipboardIcon && (
										<>
											<SVG className="w-5 h-5" svg={state.clipboardIcon[!state.form.showOutline ? "solid" : "outline"]} />
											<Space />
											<span className="inline-flex flex-row items-baseline">
												Copied
												<Space />
												<span className="font-mono">
													{"<"}
													{!state.form.copyAsReact
														? state.clipboardIcon.name
														: toCamelCase(state.clipboardIcon.name)
													}
													{">"}
												</span>
												<Space />
												to the clipboard
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

	const breakpoints = useLayoutBreakpoints(tailwindcss.theme.screens)

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

				{/* <input type="text"> */}
				<div className="rounded-75 shadow-lg">
					<input
						ref={inputRef}
						className="px-16 w-full h-16 text-lg sm:text-xl placeholder-gray-400 text-gray-100 bg-gray-800 border-2 border-gray-800 focus:border-indigo-500 rounded-75 focus:outline-none shadow-lg transition duration-200 ease-in-out"
						type="text"
						placeholder={breakpoints.xs ? `Search ${iconset.length} Icons` : `Search ${iconset.length} Icons (Press "/" to focus)`}
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

					{/* <Transition */}
					{/* 	on={state.form.copyAsReact} */}
					{/* 	className="transition duration-200 ease-in-out" */}
					{/* 	from="transform scale-90" */}
					{/* 	to="transform scale-100" */}
					{/* > */}
					<div
						className="flex flex-row items-center"
						onFocus={e => setTooltip("jsx")}
						onBlur={e => setTooltip("")}
						onMouseEnter={e => setTooltip("jsx")}
						onMouseLeave={e => setTooltip("")}
					>
						<button
							className="p-2 relative text-gray-400 hover:bg-gray-700 focus:bg-gray-700 rounded-full focus:outline-none transition duration-200 ease-in-out"
							style={{
								color: state.form.copyAsReact && "var(--gray-100)",
								backgroundColor: state.form.copyAsReact && "var(--gray-700)",
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
													<Space />
													<span
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
					{/* </Transition> */}

					<div
						className="flex flex-row items-center"
						onFocus={e => setTooltip("alt")}
						onBlur={e => setTooltip("")}
						onMouseEnter={e => setTooltip("alt")}
						onMouseLeave={e => setTooltip("")}
					>
						<button
							className="p-2 relative text-gray-400 hover:bg-gray-700 focus:bg-gray-700 rounded-full focus:outline-none transition duration-200 ease-in-out"
							style={{
								color: state.form.showOutline && "var(--gray-100)",
								backgroundColor: state.form.showOutline && "var(--gray-700)",
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
													{!state.form.showOutline ? "Change to Outline Icons" : "Change Back to Solid Icons"}
													<Space />
													<span
														style={{ fontSize: "120%", lineHeight: "1", verticalAlign: "-10%" }}
														aria-label="straight ruler"
														role="img"
													>
														📏
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

const MemoIcon = React.memo(({ state, dispatch, icon }) => {
	const buttonRef = React.useRef()

	const handleClick = e => {
		// No-op when the user selected buttonRef.current text:
		const selection = document.getSelection()
		if (selection.rangeCount) {
			const range = selection.getRangeAt(0)
			if (!range.collapsed && buttonRef.current.contains(range.startContainer)) {
				// No-op
				return
			}
		}
		try {
			copyToClipboardPolyfill("Hello, world!")
			buttonRef.current.focus()
		} catch (error) {
			console.error(`copyToClipboardPolyfill: ${error}`)
		}
		dispatch({
			type: "UPDATE_CLIPBOARD_ICON",
			icon,
		})
	}

	return (
		<button
			ref={buttonRef}
			className="flex flex-row justify-center items-center w-full h-full bg-gray-800 border-2 border-gray-800 focus:border-indigo-500 rounded-75 focus:outline-none transition duration-200 ease-in-out select-text"
			onClick={handleClick}
		>

			{/* NEW */}
			{icon.statusNew && (
				<div className="px-3 py-2 absolute top-0 right-0">
					<div className="px-1.5 bg-indigo-500 rounded-full">
						{/* NOTE: font-bold is preferred to font-semibold. */}
						<p className="font-bold text-2xs xs:text-xs text-indigo-50">
							NEW
						</p>
					</div>
				</div>
			)}

			{/* Icon */}
			<SVG
				id={icon.name}
				className="w-6 xs:w-8 h-6 xs:h-8 text-gray-100"
				svg={icon[!state.form.showOutline ? "solid" : "outline"]}
			/>

			{/* Name */}
			<div className="px-3 py-2 absolute bottom-0">
				<div style={{ paddingBottom: "0.0625rem" }}>
					<p className="text-center font-semibold text-xs xs:text-sm leading-tight font-mono text-gray-100">
						{!state.form.searchQuery || state.form.searchQuery === "new" ? (
							icon.name
						) : (
							(substrs => (
								<>
									{substrs[0]}
									<span className="p-px text-black bg-yellow-200 rounded">
										{state.form.searchQuery}
									</span>
									{icon.name.slice(substrs[0].length + state.form.searchQuery.length)}
								</>
							))(icon.name.split(state.form.searchQuery, 1))
						)}
					</p>
				</div>
			</div>

		</button>
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

const Icons = ({ state, dispatch }) => {
	const [height, minHeight] = React.useMemo(() => {

		// +---- pt-24 ----+
		// |  -mt-4 pt-4   |
		// |   =========   |
		// |      h-4      |
		// |               |
		// |               |
		// |               |
		// +---- pb-24 ----+
		//
		const clientHeight = "calc(100vh - 14rem)"
		const height = !state.results.length && clientHeight
		const minHeight = !(!state.results.length) && clientHeight

		return [height, minHeight]
	}, [state.results])

	return (
		<DocumentTitle title={!state.form.searchQuery ? "Heroicons" : `Heroicons – ${state.results.length} result${state.results.length !== 1 ? "s" : ""}`}>
			<main style={{ height, minHeight }}>
				{!state.results.length ? (
					<div className="flex flex-col justify-center items-center h-full">
						<h2 className="flex flex-row items-center font-medium text-xl leading-9 text-gray-100">
							No results for “{state.form.searchQuery}.”
							<Space />
							<EmojiSadSolidSVG className="w-6 h-6 text-gray-100" />
						</h2>
						<h2 className="font-medium text-xl leading-9 text-gray-100">
							Try again or{" "}
							<a className="underline" style={{ textDecorationColor: "var(--indigo-500)" }} href="https://github.com/tailwindlabs/heroicons/issues" target="_blank" rel="noopener noreferrer">
								request an icon here
							</a>
							.
						</h2>
					</div>
				) : (
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
				)}
			</main>
		</DocumentTitle>
	)
}

export default App
