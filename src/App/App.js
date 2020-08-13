import attrs from "./attrs"
import CarbonAds from "./CarbonAds"
import copyToClipboardPolyfill from "./copyToClipboardPolyfill"
import DocumentTitle from "lib/x/DocumentTitle"
import ExternalLinksFragment from "./ExternalLinksFragment"
import React from "react"
import SVG from "./SVG"
import svgToJSX from "./svgToJSX"
import tailwindcss from "./tailwindcss"
import toCamelCase from "./toCamelCase"
import Transition from "lib/x/Transition"
import useHeroiconsReducer from "./useHeroiconsReducer"
import useLayoutBreakpoints from "lib/x/useLayoutBreakpoints"

import BookOpenSVG from "heroicons-82f6a4d/react/solid/BookOpen"
import CodeSVG from "heroicons-82f6a4d/react/solid/Code"
import ExternalLinkSVG from "heroicons-82f6a4d/react/solid/ExternalLink"
import FlagSVG from "heroicons-82f6a4d/react/solid/Flag"
import SearchOutlineIcon from "heroicons-82f6a4d/react/outline/Search"
import SwitchHorizontalSVG from "heroicons-82f6a4d/react/solid/SwitchHorizontal"
import { ReactComponent as FigmaSVG } from "svg/figma.svg"
import { ReactComponent as GitHubSVG } from "svg/github.svg"

import srcAdamWathan from "images/adam-wathan.jpeg"
import srcSteveSchoger from "images/steve-schoger.jpeg"
import srcZaydekMG from "images/zaydek-mg.png"
import srcSponsorHediet from "images/sponsors/hediet.jpeg"
import srcSponsorShinewb from "images/sponsors/shinewb.jpeg"

const BreakpointContext = React.createContext()

// Converts Tailwind units to rem units.
function tw(units) {
	return `${units * 4 / 16}rem`
}

;(() => {
	document.body.classList.add("bg-black")
})()

// TODO: Extract <StyledH1>, <StyledH2>, and <StyledH3>.
const App = () => {
	const [state, dispatch] = useHeroiconsReducer()
	const breakpoints = useLayoutBreakpoints(tailwindcss.theme.screens)

	// // TODO: Extract Carbon Ads code.
	const adRef = React.useRef()
	// const [adIsReady, setAdIsReady] = React.useState(false)

	// NOTE: Because <CarbonAds> cannot be used more than
	// once, we move adRef.current between
	// #carbonads-placement and #carbonads-alt-placement on
	// breakpoints.lg rerenders.
	React.useLayoutEffect(() => {
		if (breakpoints.lg) {
			const el = document.getElementById("carbonads-placement")
			if (!el.children.length) {
				el.append(adRef.current)
			}
		} else {
			const el = document.getElementById("carbonads-alt-placement")
			if (!el.children.length) {
				el.append(adRef.current)
			}
		}
	}, [breakpoints.lg])

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
		[state.notif.showKey],
	)

	return (
		<BreakpointContext.Provider value={breakpoints}>
			<div className="flex flex-row justify-center">
				<div className="px-4 w-full max-w-screen-lg">

					<nav className="p-4 absolute top-0 left-0 hidden lg:block">
						<div className="space-y-1.5">
							<ExternalLinksFragment />
						</div>
					</nav>

					{/* Carbon Ads (alt) */}
					<aside className="p-4 absolute top-0 right-0 z-30">
						<Transition
							// on={adIsReady}
							on={true}
							className="transition duration-700 ease-out"
							from="opacity-0 transform scale-90"
							to="opacity-100 transform scale-100"
						>
							<div id="carbonads-alt-placement" />
						</Transition>
					</aside>

					{/* Headers */}
					<div className="h-0 lg:h-16 xl:h-32" />
					<header className="flex flex-col items-center">

						{/* Carbon Ads */}
						<Transition
							// on={adIsReady}
							on={true}
							className="transition duration-700 ease-out"
							from="opacity-0 transform scale-90"
							to="opacity-100 transform scale-100"
						>
							<div id="carbonads-placement" className="pt-4 lg:pt-0 pb-16 block xl:hidden">
								<div ref={adRef} className="rounded-75 shadow-lg">

									<div
										className="px-3 py-2 flex flex-row justify-center items-center border border-gray-600 rounded-75 shadow-lg"
										style={{
											minWidth: 1 + 330 + 1,
											minHeight: 1 + 125 + 1,
											backgroundColor: "hsl(0, 0%, 10%)",
										}}
									>
										<div className="flex flex-col items-center w-full">
											<div className="flex flex-row items-center">
												<img className="mr-4 w-12 h-12 rounded-full" src={srcZaydekMG} />
												<p className="font-medium leading-relaxed text-gray-100" style={{ fontSize: tw(3.75) }}>
													Ad blocked. Why not sponsor?<br />
													Sponsor me on GitHub
												</p>
											</div>
											<div className="h-4" />
											<div className="px-2 w-full">
												<a className="py-1 inline-block w-full bg-gray-800 border border-gray-600 focus:border-transparent rounded focus:outline-none shadow focus:shadow-solid-indigo transition duration-200 ease-in-out" href="https://github.com/sponsors/codex-zaydek" {...attrs.target_blank}>
													<p className="flex flex-row justify-center items-center font-semibold text-md leading-none text-gray-100" style={{ fontSize: tw(3.75) }}>
														<svg className="mr-2 w-5 h-5 fill-current text-indigo-500 transform scale-90" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
															<path fillRule="evenodd" d="M7.655 14.916L8 14.25l.345.666a.752.752 0 01-.69 0zm0 0L8 14.25l.345.666.002-.001.006-.003.018-.01a7.643 7.643 0 00.31-.17 22.08 22.08 0 003.433-2.414C13.956 10.731 16 8.35 16 5.5 16 2.836 13.914 1 11.75 1 10.203 1 8.847 1.802 8 3.02 7.153 1.802 5.797 1 4.25 1 2.086 1 0 2.836 0 5.5c0 2.85 2.045 5.231 3.885 6.818a22.075 22.075 0 003.744 2.584l.018.01.006.003h.002z" />
														</svg>
														Sponsor
													</p>
												</a>
											</div>
										</div>
									</div>

									{/* <CarbonAds */}
									{/* 	className="border border-gray-600 rounded-75 shadow-lg overflow-hidden" */}
									{/* 	style={{ minWidth: 1 + 330 + 1, minHeight: 1 + 125 + 1 }} */}
									{/* 	src="//cdn.carbonads.com/carbon.js?serve=CE7DV2QJ&placement=heroiconsdev" */}
									{/* 	onLoad={() => { */}
									{/* 		setTimeout(() => { */}
									{/* 			setAdIsReady(true) */}
									{/* 		}, 1e3) */}
									{/* 	}} */}
									{/* /> */}
								</div>
							</div>
						</Transition>

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
						<h2 className="flex flex-row items-center text-center font-medium text-2xl leading-9 text-gray-100">
							<BookOpenSVG className="mr-2 w-8 h-8" />
							MIT Open Source UI Icons
						</h2>

						{/* By ... */}
						<div className="h-4 hidden sm:block" />
						<h3 className="hidden sm:block text-center font-medium text-xl leading-9 text-gray-100">
							By{" "}
							<a href="https://twitter.com/steveschoger" {...attrs.target_blank}>
								<img className="mx-1 inline-block w-8 h-8 rounded-full" src={srcSteveSchoger} alt="Steve Schoger" />{" "}
								<span className="underline" style={{ textDecorationColor: "var(--indigo-500)" }}>
									@steveschoger
								</span>
							</a>
							,{" "}
							<a href="https://twitter.com/adamwathan" {...attrs.target_blank}>
								<img className="mx-1 inline-block w-8 h-8 rounded-full" src={srcAdamWathan} alt="Adam Wathan" />{" "}
								<span className="underline" style={{ textDecorationColor: "var(--indigo-500)" }}>
									@adamwathan
								</span>
							</a>
							,{" "}
							<br />
							<a href="https://twitter.com/username_ZAYDEK" {...attrs.target_blank}>
								<img className="mx-1 inline-block w-8 h-8 rounded-full" src={srcZaydekMG} alt="Zaydek MG" />{" "}
								<span className="underline" style={{ textDecorationColor: "var(--indigo-500)" }}>
									@username_ZAYDEK
								</span>
							</a>
						</h3>

						{/* https://figma.com/file/vfjBXrSSOCgmVEX5fdvV4L */}
						<div className="space-x-3 pt-0 sm:pt-16 hidden sm:flex sm:flex-row">
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
						on={state.notif.showKey}
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
												<SVG className="mr-3 w-5 h-5" svg={state.notif.notifInfo.icon} />
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
												<SVG className="mr-3 w-5 h-5" svg={state.notif.notifInfo.icon} />
												<span className="inline-flex flex-row items-baseline">
													Copied
													<span className="mx-2 font-mono">
														{!state.form.copyAsReact
															? state.notif.notifInfo.name
															: toCamelCase(state.notif.notifInfo.name)
														}
													</span>
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
					<footer className="space-x-0 lg:space-x-6 space-y-2 lg:space-y-0 flex flex-col lg:flex-row items-center lg:justify-center">
						<ExternalLinksFragment />
					</footer>
					<div className="h-24 lg:h-8" />

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

	// esc shortcuts.
	React.useEffect(() => {
		const handler = e => {
			if (e.keyCode === 27 || e.key === "Escape") {
				e.preventDefault()
				if (document.activeElement !== inputRef.current) {
					inputRef.current.focus()
				} else {
					if (!text) {
						inputRef.current.blur()
						return
					}
					setText("")
				}
			}
		}
		document.addEventListener("keydown", handler)
		return () => {
			document.removeEventListener("keydown", handler)
		}
	}, [text])

	return (
		<div className="-mt-4 pt-4 static xs:sticky top-0 z-40" style={{ boxShadow: `inset 0 ${tw(6 + 18 / 2)} var(--black)` }}>
			<form className="relative" onSubmit={e => e.preventDefault()}>

				{/* Search bar LHS */}
				<div className="px-6 absolute inset-y-0 left-0 hidden xs:block pointer-events-none">
					<div className="pl-2 flex flex-row items-center h-full">
						<SearchOutlineIcon className="w-6 h-6 text-gray-400 transition duration-200 ease-in-out" style={{ color: focus && "var(--indigo-400)" }} />
					</div>
				</div>

				{/* Search bar */}
				<div className="rounded-75 shadow-lg">
					<input
						ref={inputRef}
						className="block w-full text-xl placeholder-gray-400 text-gray-100 bg-gray-800 border-2 border-gray-800 focus:border-indigo-500 rounded-75 focus:outline-none shadow-lg transition duration-200 ease-in-out"
						style={{
							paddingLeft: breakpoints.xs ? tw(-0.5 + 2 + 6) : tw(-0.5 + 6 + 2 + 6 + 6),
							paddingRight: tw(6 + 10 + 1 + 10 + 2 + 6 + -0.5),
							height: tw(18),
						}}
						type="text"
						placeholder={breakpoints.sm ? "Search Icons" : "Search 220+ Icons (Press esc to Focus)"}
						value={text}
						onFocus={e => setFocus(true)}
						onBlur={e => setFocus(false)}
						onChange={e => setText(e.target.value)}
						{...attrs.disableAutoCorrect}
					/>
				</div>

				{/* Search bar RHS */}
				<div className="px-6 absolute inset-y-0 right-0">
					<div className="pr-2 flex flex-row items-center h-full">

						<div
							className="flex flex-row items-center"
							style={{ paddingRight: tw(0.5) }}
							onFocus={e => setTooltip("jsx")}
							onBlur={e => setTooltip("")}
							onMouseEnter={e => setTooltip("jsx")}
							onMouseLeave={e => setTooltip("")}
						>
							<button
								className="p-2 relative text-gray-400 hover:bg-gray-700 focus:bg-gray-700 rounded-full focus:outline-none transition duration-200 ease-in-out"
								style={{
									color: state.form.copyAsReact && "var(--gray-100)",
									backgroundColor: state.form.copyAsReact && "var(--indigo-500)",
								}}
								onClick={e => {
									dispatch({
										type: "TOGGLE_FORM_COPY_AS_REACT",
										text,
									})
								}}
							>
								{tooltip === "jsx" && (
									<div className="pt-2 absolute top-full right-0">
										<div className="rounded-md shadow-lg">
											<div className="px-3 py-2 relative bg-gray-700 rounded-md shadow-lg">
												<p className="whitespace-pre font-medium text-sm text-gray-100">
													{!state.form.copyAsReact
														? "Enable Copy as JSX"
														: "Enable Copy as HTML"
													}
												</p>
											</div>
										</div>
									</div>
								)}
								<CodeSVG className="w-6 h-6" />
							</button>
						</div>

						<div
							className="flex flex-row items-center"
							style={{ paddingLeft: tw(0.5) }}
							onFocus={e => setTooltip("alt")}
							onBlur={e => setTooltip("")}
							onMouseEnter={e => setTooltip("alt")}
							onMouseLeave={e => setTooltip("")}
						>
							<button
								className="p-2 relative text-gray-400 hover:bg-gray-700 focus:bg-gray-700 rounded-full focus:outline-none transition duration-200 ease-in-out"
								style={{
									color: state.form.showOutline && "var(--gray-100)",
									backgroundColor: state.form.showOutline && "var(--indigo-500)",
								}}
								onClick={e => {
									dispatch({
										type: "TOGGLE_FORM_SHOW_OUTLINE",
										text,
									})
								}}
							>
								{tooltip === "alt" && (
									<div className="pt-2 absolute top-full right-0">
										<div className="rounded-md shadow-lg">
											<div className="px-3 py-2 relative bg-gray-700 rounded-md shadow-lg">
												<p className="whitespace-pre font-medium text-sm text-gray-100">
													{!state.form.showOutline
														? "Switch to Outline Icons"
														: "Switch to Solid Icons"
													}
												</p>
											</div>
										</div>
									</div>
								)}
								<SwitchHorizontalSVG className="w-6 h-6" />
							</button>
						</div>

					</div>
				</div>

			</form>

		</div>
	)
}

const MemoIcon = React.memo(({ state, dispatch, icon }) => {
	const buttonRef = React.useRef()

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

			{/* New */}
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

			{/* Icon name */}
			<div className="px-3 py-2 absolute bottom-0">
				<p className="text-center font-semibold text-sm leading-tight font-mono text-gray-100">
					{!state.form.search.safe || state.form.search.safe === "new" ? (
						icon.name
					) : (
						(([substr]) => (
							<>
								{substr}
								<span className="p-px text-black bg-yellow-200 rounded">
									{state.form.search.safe}
								</span>
								{icon.name.slice(substr.length + state.form.search.safe.length)}
							</>
						))(icon.name.split(state.form.search.safe, 1))
					)}
				</p>
			</div>

		</button>
	)
}, (prev, next) => {
	const ok = (
		prev.state.form === next.state.form &&
		prev.state.dispatch === next.state.dispatch &&
		prev.icon === next.icon
	)
	return ok
})

const Icons = ({ state, dispatch }) => {
	const breakpoints = React.useContext(BreakpointContext)

	const [height, minHeight] = React.useMemo(() => {
		const clientHeight = breakpoints.lg ? `calc(100vh - ${tw(4 + 18 + 4 + 24 + 14 + 24)})` : `calc(100vh - ${tw(4 + 18 + 4 + 24 + 6 + 8)})`
		const height = !state.results.length && clientHeight
		const minHeight = !(!state.results.length) && clientHeight
		return [height, minHeight]
	}, [breakpoints.lg, state.results])

	return (
		<DocumentTitle title={!state.form.search.safe ? "Heroicons" : `Heroicons – ${state.results.length} result${state.results.length !== 1 ? "s" : ""}`}>
			<main style={{ height, minHeight }}>

				{!state.results.length && (
					<div className="flex flex-col justify-center items-center h-full">
						<h3 className="flex flex-row items-baseline font-medium text-xl leading-9 text-center text-gray-100">
							No results for “
							<span className="inline-block truncate" style={{ maxWidth: breakpoints.xs ? 128 : 256 }}>
								{state.form.search.user}.
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
