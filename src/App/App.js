import attrs from "./attrs"
import BannerLinks from "./BannerLinks"
import CarbonAds from "./CarbonAds"
import copyToClipboardPolyfill from "./copyToClipboardPolyfill"
import DocumentTitle from "lib/x/DocumentTitle"
import Gap from "./Gap"
import React from "react"
import SVG from "./SVG"
import svgToJSX from "./svgToJSX"
import tailwindcss from "./tailwindcss"
import toCamelCase from "./toCamelCase"
import Transition from "lib/x/Transition"
import useHeroiconsReducer from "./useHeroiconsReducer"
import useLayoutBreakpoints from "lib/x/useLayoutBreakpoints"

import CodeSVG from "heroicons-82f6a4d/react/solid/Code"
import ExternalLinkSVG from "heroicons-82f6a4d/react/solid/ExternalLink"
import FlagSVG from "heroicons-82f6a4d/react/solid/Flag"
import SearchOutlineIcon from "heroicons-82f6a4d/react/outline/Search"
import SwitchHorizontalSVG from "heroicons-82f6a4d/react/solid/SwitchHorizontal"
import { ReactComponent as FigmaSVG } from "svg/figma.svg"
import { ReactComponent as GitHubSVG } from "svg/github.svg"
import { ReactComponent as TwitterSVG } from "svg/twitter.svg"

import srcAdamWathan from "images/adam-wathan.jpg"
import srcSteveSchoger from "images/steve-schoger.jpg"
import srcZaydekMG from "images/zaydek-mg.png"

const BreakpointContext = React.createContext()

;(() => {
	document.body.classList.add("bg-black")
})()

// TODO: Extract <StyledH1>, <StyledH2>, and <StyledH3>.
const App = () => {
	const [state, dispatch] = useHeroiconsReducer()
	const breakpoints = useLayoutBreakpoints(tailwindcss.theme.screens)

	// const carbonAdsRef = React.useRef()
	// const [carbonAdsIsReady, setCarbonAdsIsReady] = React.useState(false)

	// // Prevents focus on Carbon Ads.
	// React.useEffect(() => {
	// 	if (carbonAdsIsReady) {
	// 		const els = document.querySelectorAll("[rel*='sponsored']")
	// 		if (els.length) {
	// 			for (const each of els) {
	// 				each.setAttribute("tabindex", -1)
	// 			}
	// 		}
	// 	}
	// }, [carbonAdsIsReady])

	// // NOTE: Because <CarbonAds> cannot be used more than
	// // once, we move carbonAdsRef.current between
	// // #carbonads-placement and #carbonads-alt-placement on
	// // breakpoints.xl rerenders.
	// React.useLayoutEffect(() => {
	// 	if (breakpoints.xl) {
	// 		const el = document.getElementById("carbonads-placement")
	// 		if (!el.children.length) {
	// 			el.append(carbonAdsRef.current)
	// 		}
	// 	} else {
	// 		const el = document.getElementById("carbonads-alt-placement")
	// 		if (!el.children.length) {
	// 			el.append(carbonAdsRef.current)
	// 		}
	// 	}
	// }, [breakpoints.xl])

	// Auto-hides the notification (1.5s).
	const mounted = React.useRef()
	React.useEffect(
		React.useCallback(() => {
			if (!mounted.current) {
				mounted.current = true
				return
			}
			const id = setTimeout(() => {
				dispatch({
					type: "HIDE_NOTIFICATION",
				})
			}, 1.5e3)
			return () => {
				clearTimeout(id)
			}
		}, [dispatch]),
		[state.notif.visible],
	)

	return (
		<BreakpointContext.Provider value={breakpoints}>
			<div className="pt-24 lg:pt-32 flex flex-row justify-center">

				<div className="px-6 w-full max-w-screen-lg">

					<nav className="p-3 absolute top-0 inset-x-0 hidden lg:block">
						<BannerLinks />
					</nav>

					{/* Carbon Ads (alt) */}
					{/* <aside className="p-6 absolute top-0 right-0 z-30"> */}
					{/* 	<Transition */}
					{/* 		on={carbonAdsIsReady} */}
					{/* 		className="transition duration-1000 ease-in-out" */}
					{/* 		from="opacity-0 transform scale-110" */}
					{/* 		to="opacity-100 transform scale-100" */}
					{/* 	> */}
					{/* 		<div id="carbonads-alt-placement" /> */}
					{/* 	</Transition> */}
					{/* </aside> */}

					{/* Headers */}
					<header className="flex flex-col items-center">

						{/* Header */}
						<div className="relative flex flex-row items-center">
							<h1 className="font-bold font-brand-sans text-5xl text-white" style={{ letterSpacing: "-0.0375em" }}>
								Heroicons
							</h1>
							<div className="-mt-1 absolute" style={{ paddingLeft: "0.5ch", left: "100%" }}>
								<FlagSVG className="w-12 h-12 text-indigo-500" />
							</div>
						</div>

						{/* Subheader */}
						<h2 className="text-center font-medium text-xl sm:text-2xl leading-9 text-gray-100">
							MIT-Licensed Open Source UI Icons
						</h2>

						{/* Steve and Adam */}
						<div className="h-4 hidden sm:block" />
						<h3 className="hidden sm:block text-center font-medium text-xl leading-9 text-gray-100">
							Icons by{" "}
							<a href="https://twitter.com/steveschoger" {...attrs.target_blank}>
								<img className="mx-1 inline-block w-8 h-8 rounded-full" src={srcSteveSchoger} alt="Steve Schoger" />{" "}
								<span className="underline" style={{ textDecorationColor: "var(--indigo-500)" }}>
									@steveschoger
								</span>
							</a>{" "}
							and{" "}
							<a href="https://twitter.com/adamwathan" {...attrs.target_blank}>
								<img className="mx-1 inline-block w-8 h-8 rounded-full" src={srcAdamWathan} alt="Adam Wathan" />{" "}
								<span className="underline" style={{ textDecorationColor: "var(--indigo-500)" }}>
									@adamwathan
								</span>
							</a>
						</h3>

						{/* Zaydek MG */}
						<h3 className="hidden sm:block text-center font-medium text-xl leading-9 text-gray-100">
							Icon Viewer by{" "}
							<a href="https://twitter.com/username_ZAYDEK" {...attrs.target_blank}>
								<img className="mx-1 inline-block w-8 h-8 rounded-full" src={srcZaydekMG} alt="Zaydek MG" />{" "}
								<span className="underline" style={{ textDecorationColor: "var(--indigo-500)" }}>
									@username_ZAYDEK
								</span>
							</a>
						</h3>

						{/* https://figma.com/file/vfjBXrSSOCgmVEX5fdvV4L */}
						<div className="h-16" />
						<div className="space-y-3 sm:space-y-0 space-x-0 sm:space-x-3 flex flex-col sm:flex-row w-full sm:w-auto">
							<div className="rounded-75 shadow-lg">
								<a className="px-4 py-3 block bg-gray-800 border-2 border-gray-800 focus:border-indigo-500 rounded-75 focus:outline-none shadow-lg transition duration-200 ease-in-out" href="https://figma.com/file/vfjBXrSSOCgmVEX5fdvV4L" {...attrs.target_blank}>
									<div className="px-2 py-1 flex flex-row justify-center">
										<p className="flex flex-row items-center font-medium text-xl leading-9 text-gray-100">
											<FigmaSVG className="mr-4 w-6 h-6" />
											Open in Figma
											<ExternalLinkSVG className="ml-2 w-5 h-5 text-indigo-400" />
										</p>
									</div>
								</a>
							</div>
							<div className="rounded-75 shadow-lg">
								<a className="px-4 py-3 block bg-gray-800 border-2 border-gray-800 focus:border-indigo-500 rounded-75 focus:outline-none shadow-lg transition duration-200 ease-in-out" href="https://github.com/refactoringui/heroicons" {...attrs.target_blank}>
									<div className="px-2 py-1 flex flex-row justify-center">
										<p className="flex flex-row items-center font-medium text-xl leading-9 text-gray-100">
											<GitHubSVG className="mr-4 w-6 h-6" />
											Open in GitHub
											<ExternalLinkSVG className="ml-2 w-5 h-5 text-indigo-400" />
										</p>
									</div>
								</a>
							</div>
						</div>

						{/* Carbon Ads */}
						{/* <Transition */}
						{/* 	on={carbonAdsIsReady} */}
						{/* 	className="transition duration-1000 ease-in-out" */}
						{/* 	from="opacity-0 transform scale-110" */}
						{/* 	to="opacity-100 transform scale-100" */}
						{/* > */}
						{/* 	<div id="carbonads-placement" className="-mb-8 xl:mb-0 pt-12 xl:pt-0"> */}
						{/* 		<div ref={carbonAdsRef} className="rounded-75 shadow-lg"> */}
						{/* 			<CarbonAds */}
						{/* 				className="border border-gray-600 rounded-75 shadow-lg overflow-hidden" */}
						{/* 				style={{ minWidth: 1 + 330 + 1, minHeight: 1 + 125 + 1 }} */}
						{/* 				src="//cdn.carbonads.com/carbon.js?serve=CE7DV2QJ&placement=heroiconsdev" */}
						{/* 				callback={() => setCarbonAdsIsReady(true)} */}
						{/* 			/> */}
						{/* 		</div> */}
						{/* 	</div> */}
						{/* </Transition> */}

					</header>

					<div className="h-16" />
					<FormSearch
						state={state}
						dispatch={dispatch}
					/>

					<div className="h-4" />
					<Icons
						state={state}
						dispatch={dispatch}
					/>

					<Transition
						on={state.notif.visible}
						className="transition duration-200 ease-in-out"
						from="opacity-0 transform translate-y-4 pointer-events-none"
						to="opacity-100 transform translate-y-0 pointer-events-auto"
					>
						<div className="p-3 fixed bottom-0 left-0 z-40">
							<div className="rounded-md shadow-lg">
								<div className="px-3 py-2 bg-indigo-500 rounded-md shadow-lg">
									<p className="flex flex-row items-center font-semibold text-base text-indigo-50">

										{/* Form */}
										{state.notif.notifType.startsWith("form") && (
											<>
												<SVG className="w-5 h-5" svg={state.notif.notifInfo.icon} />
												<Gap />
												<Gap />

												{state.notif.notifType === "form-jsx" && (
													!state.form.copyAsReact
														? "Enabled Copy as HTML"
														: "Enabled Copy as JSX"
												)}

												{state.notif.notifType === "form-alt" && (
													!state.form.showOutline
														? "Switched to Solid Icons"
														: "Switched to Outline Icons"
												)}

											</>
										)}

										{/* Icon */}
										{state.notif.notifType === "icon" && (
											<>
												<SVG className="w-5 h-5" svg={state.notif.notifInfo.icon} />
												<Gap />
												<Gap />
												<span className="inline-flex flex-row items-baseline">
													Copied
													<Gap />
													<span className="font-mono">
														{!state.form.copyAsReact
															? state.notif.notifInfo.name
															: toCamelCase(state.notif.notifInfo.name)
														}
													</span>
													<Gap />
													as {!state.form.copyAsReact ? "HTML" : "JSX"}
												</span>
											</>
										)}

									</p>
								</div>
							</div>
						</div>
					</Transition>

					<div className="h-24" />
					<footer className="pb-3 hidden lg:block">
						<BannerLinks />
					</footer>

				</div>
			</div>
		</BreakpointContext.Provider>
	)
}

const FormSearch = ({ state, dispatch }) => {
	const inputRef = React.useRef()

	const breakpoints = React.useContext(BreakpointContext)

	const [text, setText] = React.useState(() => {
		if (!("URLSearchParams" in window)) {
			return ""
		}
		const params = new URLSearchParams(window.location.search)
		return params.get("search") || ""
	})

	const [focus, setFocus] = React.useState(false)
	const [tooltip, setTooltip] = React.useState("")

	// Debounces search by 15ms.
	const mounted = React.useRef()
	React.useEffect(
		React.useCallback(() => {
			// Do not debounce the mount search:
			if (!mounted.current) {
				dispatch({
					type: "UPDATE_FORM_SEARCH",
					text,
				})
				mounted.current = true
				return
			}
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

	// Sets the search query to the URL.
	//
	// https://stackoverflow.com/a/41542008
	React.useEffect(() => {
		if (!("URLSearchParams" in window)) {
			// No-op
			return
		}
		if (!text) {
			window.history.pushState(null, "", "/")
		} else {
			const params = new URLSearchParams(window.location.search)
			params.set("search", text)
			window.history.pushState(null, "", `/?${params}`)
		}
	}, [text])

	// Escape shortcuts.
	React.useEffect(() => {
		const handler = e => {
			if (e.keyCode === 27 || e.key === "Escape") {
				e.preventDefault()
				if (document.activeElement !== inputRef.current) {
					inputRef.current.focus()
				} else if (!text) {
					inputRef.current.blur()
				} else {
					setText("")
				}
			}
		}
		document.addEventListener("keydown", handler)
		return () => {
			document.removeEventListener("keydown", handler)
		}
	}, [text])

	// "/" shortcut.
	React.useEffect(() => {
		const handler = e => {
			if (e.keyCode === 191 || e.key === "/") {
				if (document.activeElement !== inputRef.current) {
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
				<div className="px-6 absolute inset-y-0 left-0 flex flex-row items-center pointer-events-none">
					<SearchOutlineIcon className="w-6 h-6 text-gray-400 transition duration-200 ease-in-out" style={{ color: focus && "var(--indigo-400)" }} />
				</div>

				{/* Search */}
				<div className="rounded-75 shadow-lg">
					<input
						ref={inputRef}
						className="pl-16 pr-32 w-full text-xl placeholder-gray-400 text-gray-100 bg-gray-800 border-2 border-gray-800 focus:border-indigo-500 rounded-75 focus:outline-none shadow-lg transition duration-200 ease-in-out"
						style={{ height: "4.5rem" /* 72px */ }}
						type="text"
						placeholder={breakpoints.sm ? "Search 200+ Icons" : "Search 200+ Icons (Press Esc to Search)"}
						value={text}
						onFocus={e => setFocus(true)}
						onBlur={e => setFocus(false)}
						onChange={e => setText(e.target.value)}
						{...attrs.disableAutoCorrect}
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
								<div className="pt-1 absolute top-full right-0">
									<div className="rounded-md shadow-lg">
										<div className="px-3 py-2 relative bg-gray-700 rounded-md shadow-lg">
											<div className="p-0.5">
												<p className="whitespace-pre font-medium text-sm text-gray-100">
													{!state.form.copyAsReact
														? "Enable Copy as JSX"
														: "Enable Copy as HTML"
													}
												</p>
											</div>
										</div>
									</div>
								</div>
							)}
							<CodeSVG className="w-6 h-6" />
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
								<div className="pt-1 absolute top-full right-0">
									<div className="rounded-md shadow-lg">
										<div className="px-3 py-2 relative bg-gray-700 rounded-md shadow-lg">
											<div className="p-0.5">
												<p className="whitespace-pre font-medium text-sm text-gray-100">
													{!state.form.showOutline
														? "Switch to Outline Icons"
														: "Switch to Solid Icons"
													}
												</p>
											</div>
										</div>
									</div>
								</div>
							)}
							<SwitchHorizontalSVG className="w-6 h-6" />
						</button>
					</div>

				</div>

			</form>

		</div>
	)
}

const MemoIcon = React.memo(({ state, dispatch, icon }) => {
	const buttonRef = React.useRef()

	// NOTE: onPointerDown is preferred to active classes.
	const [pointerDown, setPointerDown] = React.useState(false)

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
			const originalEl = document.getElementById(icon.name)
			const el = originalEl.cloneNode(true)
			el.removeAttribute("id")
			el.classList.remove(...el.classList)
			el.classList.add(...`${icon.name} w-6 h-6`.split(" "))
			copyToClipboardPolyfill(!state.form.copyAsReact ? el.outerHTML : svgToJSX(el.outerHTML))
			buttonRef.current.focus() // Refocus
		} catch (error) {
			console.error(`copyToClipboardPolyfill: ${error}`)
		}

		const notifType = "icon"
		const notifInfo = {
			name: icon.name,
			icon: icon[!state.form.showOutline ? "solid" : "outline"],
		}
		dispatch({
			type: "UPDATE_NOTIFICATION",
			notifType,
			notifInfo,
		})

	}

	return (
		<button
			ref={buttonRef}
			className="flex flex-row justify-center items-center w-full h-full bg-gray-800 border-2 border-gray-800 focus:border-indigo-500 rounded-75 focus:outline-none transition duration-200 ease-in-out select-text"
			style={{ backgroundColor: pointerDown && "var(--indigo-500)" }}
			onPointerDown={e => setPointerDown(true)}
			onPointerLeave={e => setPointerDown(false)}
			// NOTE: Debounces setPointerDown(false) to force
			// background-color to render.
			onPointerUp={e => setTimeout(() => setPointerDown(false), 100)}
			onClick={handleClick}
		>

			{/* NEW */}
			{icon.statusNew && (
				<div className="px-3 py-2 absolute top-0 right-0">
					<div className="px-1.5 bg-indigo-500 rounded-full">
						{/* NOTE: font-bold is preferred to font-semibold. */}
						<p className="font-bold text-2xs text-indigo-50">
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
				<div style={{ paddingBottom: "0.0625rem" }}>
					<p className="text-center font-semibold text-sm leading-tight font-mono text-gray-100">
						{!state.form.search || state.form.search === "new" ? (
							icon.name
						) : (
							(substrs => (
								<>
									{substrs[0]}
									<span className="p-px text-black bg-yellow-200 rounded">
										{state.form.search}
									</span>
									{icon.name.slice(substrs[0].length + state.form.search.length)}
								</>
							))(icon.name.split(state.form.search, 1))
						)}
					</p>
				</div>
			</div>

		</button>
	)
}, (prev, next) => {
	const ok = (
		prev.state.form.search === next.state.form.search &&
		prev.state.form.copyAsReact === next.state.form.copyAsReact &&
		prev.state.form.showOutline === next.state.form.showOutline &&
		prev.state.dispatch === next.state.dispatch &&
		prev.icon === next.icon
	)
	return ok
})

const Icons = ({ state, dispatch }) => {
	const breakpoints = React.useContext(BreakpointContext)

	const [height, minHeight] = React.useMemo(() => {

		// (80px + 16px) +  96px === 12rem
		// (80px + 16px) + 128px === 14rem
		//
		const clientHeight = breakpoints.lg ? "calc(100vh - 12rem)" : "calc(100vh - 14rem)"
		const height = !state.results.length && clientHeight
		const minHeight = !(!state.results.length) && clientHeight

		return [height, minHeight]
	}, [state.results, breakpoints])

	return (
		<DocumentTitle title={!state.form.search ? "Heroicons" : `Heroicons – ${state.results.length} result${state.results.length !== 1 ? "s" : ""}`}>
			<main style={{ height, minHeight }}>

				{!state.results.length && (
					<div className="flex flex-col justify-center items-center h-full">
						<h3 className="flex flex-row items-baseline font-medium text-xl leading-9 text-center text-gray-100">
							No results for “
							<span className="inline-block truncate" style={{ maxWidth: breakpoints.xs ? 128 : 256 }}>
								{state.form.originalSearch}.
							</span>
							”
						</h3>
						<h3 className="font-medium text-xl leading-9 text-center text-gray-100">
							Try again or{" "}
							<a className="underline" style={{ textDecorationColor: "var(--indigo-500)" }} href="https://github.com/tailwindlabs/heroicons/issues" {...attrs.target_blank}>
								request an icon
							</a>
							.
						</h3>
					</div>
				)}

				{state.results.length > 0 && (
					<div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
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
