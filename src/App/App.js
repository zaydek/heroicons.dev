import attrs from "./attrs"
import CarbonAds from "./CarbonAds"
import copyToClipboardPolyfill from "./copyToClipboardPolyfill"
import DocumentTitle from "lib/x/DocumentTitle"
import ExtLinksFragment from "./ExtLinksFragment"
import React from "react"
import SVG from "./SVG"
import svgToJSX from "./svgToJSX"
import tailwindcss from "./tailwindcss"
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

import srcAdamWathan128 from "images/adam-wathan-128.jpeg"
import srcSteveSchoger128 from "images/steve-schoger-128.jpeg"
import srcZaydekMG128 from "images/zaydek-mg-128.png"

const BreakpointContext = React.createContext()

// Converts Tailwind units to rem units.
function tw(units) {
	return `${units * 4 / 16}rem`
}

;(() => {
	document.body.classList.add("bg-black")
})()

// Delays a callback.
function useDelayedCallback(callback, timeoutMs) {
	React.useEffect(() => {
		setTimeout(() => {
			callback()
		}, timeoutMs)
	}, [callback, timeoutMs])
}

const App = () => {
	const [state, dispatch] = useHeroiconsReducer()
	const media = useLayoutBreakpoints(tailwindcss.theme.screens)

	const carbonAdsRef = React.useRef()
	const [showCarbonAds, setShowCarbonAds] = React.useState(false)

	const [delayedShowCarbonAds, setDelayedShowCarbonAds] = React.useState(false)
	useDelayedCallback(() => {
		if (showCarbonAds) {
			setDelayedShowCarbonAds(true)
		}
	}, 500)

	// NOTE: Because <CarbonAds> cannot be used more than
	// once, we move carbonAdsRef.current between
	// #carbon-ads-placement and #carbon-ads-desktop-placement
	// on media.lg rerenders.
	React.useEffect(() => {
		if (media.lg) {
			const el = document.getElementById("carbon-ads-placement")
			if (!el.children.length) {
				el.append(carbonAdsRef.current)
			}
		} else {
			const el = document.getElementById("carbon-ads-desktop-placement")
			if (!el.children.length) {
				el.append(carbonAdsRef.current)
			}
		}
	}, [media.lg])

	// Auto-hides notifications.
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
			}, 2.2e3)
			return () => {
				clearTimeout(id)
			}
		}, [dispatch]),
		[state.notif.showKey],
	)

	return (
		<BreakpointContext.Provider value={media}>
			<div className="pt-16 lg:pt-32 flex flex-row justify-center">
				<div className="px-4 w-full max-w-screen-lg">

					<nav className="p-4 space-y-2 absolute top-0 left-0 hidden lg:block">
						<ExtLinksFragment />
					</nav>

					{/* Carbon Ads (alt) */}
					<aside className="p-4 absolute top-0 right-0 z-30">
						<Transition
							on={showCarbonAds}
							className="transition duration-500 ease-in-out"
							from="opacity-0 transform scale-90 pointer-events-none"
							to="opacity-100 transform scale-100 pointer-events-auto"
						>
							<div id="carbon-ads-desktop-placement" />
						</Transition>
					</aside>

					{/* Headers */}
					<header className="flex flex-col items-center">

						{/* Carbon Ads */}
						<Transition
							on={showCarbonAds}
							className="transition duration-500 ease-in-out"
							from="opacity-0 transform scale-90 pointer-events-none"
							to="opacity-100 transform scale-100 pointer-events-auto"
						>
							<div id="carbon-ads-placement" className="-mt-16 pt-4 lg:pt-0 pb-16 block xl:hidden">
								<div ref={carbonAdsRef} className="rounded-75 shadow-lg">
									<div className="rounded-75 shadow-lg">
										<div className="relative">

											<div onClick={e => {
												setShowCarbonAds(false)
											}}>
												<CarbonAds
													className="border border-gray-700 rounded-75 overflow-hidden"
													style={{
														width: 332,
														height: 127,
													}}
													src="//cdn.carbonads.com/carbon.js?serve=CE7DV2QJ&placement=heroiconsdev"
													onLoad={() => {
														setTimeout(() => {
															setShowCarbonAds(true)
														}, 1e3)
													}}
												/>
											</div>

											<Transition
												on={delayedShowCarbonAds}
												className="transition duration-500 ease-in-out"
												from="opacity-0"
												to="opacity-100"
											>
												<div className="px-4 py-3 absolute inset-x-0 top-full">
													<div className="flex flex-row justify-center">
														<p className="text-sm text-gray-100">
															Clicking the ad makes it go away.{" "}
															<span
																style={{
																	verticalAlign: "-12.5%",
																	fontSize: "150%",
																	lineHeight: 1,
																}}
																role="img"
																aria-label="shushing face"
															>
																🤫
															</span>
														</p>
													</div>
												</div>
											</Transition>

										</div>
									</div>
								</div>
							</div>
						</Transition>

						{/* Header */}
						<div className="relative flex flex-row items-center">
							<h1 className="font-bold font-brand-sans text-5xl text-white" style={{ letterSpacing: "-0.025em" }}>
								Heroicons
							</h1>
							<div className="-mt-1 absolute" style={{ paddingLeft: "0.5ch", left: "100%" }}>
								<FlagSVG className="w-12 h-12 text-indigo-500" />
							</div>
						</div>

						{/* Subheader */}
						<h2 className="flex flex-row items-center text-center font-medium text-2xl leading-9 text-gray-100">
							<BookOpenSVG className="mr-2 hidden xs:block w-8 h-8" />
							MIT Open Source UI Icons
						</h2>

						{/* Authors */}
						{/* <div className="h-4 hidden sm:block" /> */}
						{/* <h3 className="hidden sm:block text-center font-medium text-xl leading-9 text-gray-100"> */}
						{/* 	By{" "} */}
						{/* 	<a href="https://twitter.com/steveschoger" {...attrs.target_blank}> */}
						{/* 		<img className="mx-1 inline-block w-8 h-8 rounded-full" src={srcSteveSchoger128} alt="Steve Schoger" />{" "} */}
						{/* 		<span className="underline" style={{ textDecorationColor: "var(--indigo-500)" }}> */}
						{/* 			@steveschoger */}
						{/* 		</span> */}
						{/* 	</a> */}
						{/* 	,{" "} */}
						{/* 	<a href="https://twitter.com/adamwathan" {...attrs.target_blank}> */}
						{/* 		<img className="mx-1 inline-block w-8 h-8 rounded-full" src={srcAdamWathan128} alt="Adam Wathan" />{" "} */}
						{/* 		<span className="underline" style={{ textDecorationColor: "var(--indigo-500)" }}> */}
						{/* 			@adamwathan */}
						{/* 		</span> */}
						{/* 	</a> */}
						{/* 	,{" "} */}
						{/* 	<br /> */}
						{/* 	<a href="https://twitter.com/username_ZAYDEK" {...attrs.target_blank}> */}
						{/* 		<img className="mx-1 inline-block w-8 h-8 rounded-full" src={srcZaydekMG128} alt="Zaydek MG" />{" "} */}
						{/* 		<span className="underline" style={{ textDecorationColor: "var(--indigo-500)" }}> */}
						{/* 			@username_ZAYDEK */}
						{/* 		</span> */}
						{/* 	</a> */}
						{/* </h3> */}

						{/* Sponsors */}
						<div className="h-16" />
						<h3 className="text-center font-bold text-sm tracking-wider text-gray-400">
							SPONSORED BY
						</h3>
						{/* <div className="h-8" /> */}

						{/* <div className="grid grid-cols-3 gap-3 justify-center"> */}
						{/* 	<div className="bg-gray-800"> */}
						{/* 		<img className="h-12" src="https://tailwindui.com/img/logos/tuple-logo.svg" alt="Tuple" /> */}
						{/* 	</div> */}
						{/* 	<div className="bg-gray-800"> */}
						{/* 		<img className="h-12" src="https://tailwindui.com/img/logos/mirage-logo.svg" alt="Mirage" /> */}
						{/* 	</div> */}
						{/* 	<div className="bg-gray-800"> */}
						{/* 		<img className="h-12" src="https://tailwindui.com/img/logos/statickit-logo.svg" alt="StaticKit" /> */}
						{/* 	</div> */}
						{/* 	<div className="bg-gray-800"> */}
						{/* 		<img className="h-12" src="https://tailwindui.com/img/logos/transistor-logo.svg" alt="Transistor" /> */}
						{/* 	</div> */}
						{/* 	<div className="bg-gray-800"> */}
						{/* 		<img className="h-12" src="https://tailwindui.com/img/logos/workcation-logo.svg" alt="Workcation" /> */}
						{/* 	</div> */}
						{/* </div> */}

						{/* <div className="grid grid-cols-3 gap-3 justify-center"> */}
						{/* <div className="flex flex-row justify-center"> */}
						<div className="h-4" />
							<div className="w-full max-w-sm md:max-w-lg lg:max-w-3xl">
								<div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
									<div
										className={`
											col-span-1 md:col-span-2 lg:col-span-1
											flex flex-row justify-center
										`.trim()
										}
									>
										<img className="h-12 text-red-500 fill-current" src="https://tailwindui.com/img/logos/tuple-logo.svg" alt="Tuple" />
									</div>
									<div
										className={`
											col-span-1 md:col-span-2 lg:col-span-1
											flex flex-row justify-center
										`.trim()
										}
									>
										<img className="h-12" src="https://tailwindui.com/img/logos/mirage-logo.svg" alt="Mirage" />
									</div>
									<div
										className={`
											col-span-1 md:col-span-2 lg:col-span-1
											flex flex-row justify-center
										`.trim()
										}
									>
										<img className="h-12" src="https://tailwindui.com/img/logos/statickit-logo.svg" alt="StaticKit" />
									</div>
									<div
										className={`
											col-span-1 md:col-span-3 lg:col-span-1
											flex flex-row justify-center
										`.trim()
										}
									>
										<img className="h-12" src="https://tailwindui.com/img/logos/transistor-logo.svg" alt="Transistor" />
									</div>
									<div
										className={`
											col-span-2 md:col-span-3 lg:col-span-1
											flex flex-row justify-center
										`.trim()
										}
									>
										<img className="h-12" src="https://tailwindui.com/img/logos/workcation-logo.svg" alt="Workcation" />
									</div>
								</div>
							</div>
						{/* </div> */}
						<div className="h-8" />
						<h3 className="text-center font-bold text-sm tracking-wider text-gray-400">
							CLICK HERE TO FEATURE YOUR BUSINESS
						</h3>

						{/* <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5"> */}
						{/* 	<div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1"> */}
						{/* 		<img className="h-12" src="https://tailwindui.com/img/logos/tuple-logo.svg" alt="Tuple" /> */}
						{/* 	</div> */}
						{/* 	<div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1"> */}
						{/* 		<img className="h-12" src="https://tailwindui.com/img/logos/mirage-logo.svg" alt="Mirage" /> */}
						{/* 	</div> */}
						{/* 	<div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1"> */}
						{/* 		<img className="h-12" src="https://tailwindui.com/img/logos/statickit-logo.svg" alt="StaticKit" /> */}
						{/* 	</div> */}
						{/* 	<div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1"> */}
						{/* 		<img className="h-12" src="https://tailwindui.com/img/logos/transistor-logo.svg" alt="Transistor" /> */}
						{/* 	</div> */}
						{/* 	<div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1"> */}
						{/* 		<img className="h-12" src="https://tailwindui.com/img/logos/workcation-logo.svg" alt="Workcation" /> */}
						{/* 	</div> */}
						{/* </div> */}
						{/* <div className="h-4" /> */}
						{/* <h3 className="text-center font-bold text-sm tracking-wider text-gray-500"> */}
						{/* 	BECOME A SPONSOR */}
						{/* </h3> */}

						{/* CTA */}
						<div className="space-x-3 pt-0 sm:pt-16 hidden sm:flex sm:flex-row">
							<div className="rounded-75 shadow-lg">
								<a className="px-4 py-3 flex flex-row items-center bg-gray-800 rounded-75 focus:outline-none shadow-none focus:shadow-solid-indigo transition duration-200 ease-in-out" style={{ height: tw(18) }} href="https://figma.com/file/vfjBXrSSOCgmVEX5fdvV4L" {...attrs.target_blank}>
									<div className="px-2 py-1 flex flex-row justify-center">
										<p className="flex flex-row items-center font-medium text-xl text-gray-100">
											<FigmaSVG className="mr-4 w-6 h-6" />
											Open in Figma
											<ExternalLinkSVG className="ml-2 w-5 h-5 text-indigo-400" />
										</p>
									</div>
								</a>
							</div>
							<div className="rounded-75 shadow-lg">
								<a className="px-4 py-3 flex flex-row items-center bg-gray-800 rounded-75 focus:outline-none shadow-none focus:shadow-solid-indigo transition duration-200 ease-in-out" style={{ height: tw(18) }} href="https://github.com/refactoringui/heroicons" {...attrs.target_blank}>
									<div className="px-2 py-1 flex flex-row justify-center">
										<p className="flex flex-row items-center font-medium text-xl text-gray-100">
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

					{/* Notification */}
					<Transition
						on={state.notif.showKey}
						className="transition duration-200 ease-in-out"
						from="opacity-0 transform translate-y-4 pointer-events-none"
						to="opacity-100 transform translate-y-0 pointer-events-auto"
					>
						<div className="p-3 fixed bottom-0 left-0 z-40">
							<div className="rounded-md shadow-lg">
								<div className="rounded-md shadow-lg">
									<div className="px-3 py-2 flex flex-row bg-indigo-500 rounded-md">

										{state.notif.notifInfo && (
											<div className="flex flex-row items-center h-6">
												<SVG className="mr-3 w-5 h-5 leading-normal text-indigo-50" svg={state.notif.notifInfo.icon} />
											</div>
										)}

										{/* Form */}
										{state.notif.notifType.startsWith("form") && (
											<p className="font-semibold text-indigo-50">
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
											</p>
										)}

										{/* Icon */}
										{state.notif.notifType === "icon" && (
											<p className="font-semibold text-indigo-50">
												Copied
												<span className="mx-2 font-mono">
													{state.notif.notifInfo.name}
												</span>
												as {!state.form.copyAsReact ? "HTML" : "JSX"}
											</p>
										)}

									</div>
								</div>
							</div>
						</div>
					</Transition>

					<div className="h-24" />
					<footer className="space-x-0 lg:space-x-6 space-y-1 lg:space-y-0 flex flex-col lg:flex-row items-center lg:justify-center">
						<ExtLinksFragment />
					</footer>
					<div className="h-24 lg:h-8" />

				</div>
			</div>
		</BreakpointContext.Provider>
	)
}

const FormSearch = ({ state, dispatch }) => {
	const inputRef = React.useRef()

	const media = React.useContext(BreakpointContext)

	const [text, setText] = React.useState(() => {
		if (!("URLSearchParams" in window)) {
			return ""
		}
		const params = new URLSearchParams(window.location.search)
		return params.get("search") || ""
	})

	const [tooltip, setTooltip] = React.useState("")

	// Debounces search.
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

	// <esc> shortcuts.
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
		<div className="-mt-4 pt-4 static xs:sticky top-0 z-30" style={{ boxShadow: `inset 0 ${tw(6 + 18 / 2)} var(--black)` }}>
			<form className="relative" onSubmit={e => e.preventDefault()}>

				{/* Search bar LHS */}
				<div className="px-6 absolute inset-y-0 left-0 hidden xs:block pointer-events-none">
					<div className="pl-2 flex flex-row items-center h-full">
						<SearchOutlineIcon className="w-6 h-6 text-gray-400 transition duration-200 ease-in-out" />
					</div>
				</div>

				{/* Search bar */}
				<div className="rounded-75 shadow-lg">
					<div className="rounded-75 shadow-lg">
						<label>
							<input
								ref={inputRef}
								className="block w-full text-xl placeholder-gray-400 text-gray-100 bg-gray-800 rounded-75 focus:outline-none shadow-none focus:shadow-solid-indigo transition duration-200 ease-in-out"
								style={{
									appearance: "none",

									paddingLeft: media.xs ? tw(2 + 6) : tw(6 + 2 + 6 + 6),
									paddingRight: tw(6 + 10 + 2 + 10 + 2 + 6),
									height: tw(18),
								}}
								type="text"
								placeholder={media.sm ? "Search Icons" : "Search 220+ Icons"}
								value={text}
								onChange={e => setText(e.target.value)}
								aria-label="Search 220+ Icons"
								{...attrs.disableAutoCorrect}
							/>
						</label>
					</div>
				</div>

				{/* Search bar RHS */}
				<div className="px-6 absolute inset-y-0 right-0">
					<div className="pr-2 flex flex-row items-center h-full">

						<div
							className="flex flex-row items-center"
							style={{ paddingRight: tw(1) }}
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
								aria-label={
									!state.form.copyAsReact
										? "Enable Copy as JSX"
										: "Enable Copy as HTML"
								}
							>
								{tooltip === "jsx" && (
									<div className="pt-2 absolute top-full right-0 z-40">
										<div className="rounded-md shadow-lg">
											<div className="rounded-md shadow-lg">
												<div className="px-3 py-2 relative bg-gray-700 rounded-md">
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
							style={{ paddingLeft: tw(1) }}
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
								aria-label={
									!state.form.showOutline
										? "Switch to Outline Icons"
										: "Switch to Solid Icons"
								}
							>
								{tooltip === "alt" && (
									<div className="pt-2 absolute top-full right-0 z-40">
										<div className="rounded-md shadow-lg">
											<div className="rounded-md shadow-lg">
												<div className="px-3 py-2 relative bg-gray-700 rounded-md">
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
								{/* <SVG className="w-6 h-6" svg={!state.form.showOutline ? PlusCircleSolidSVG : PlusCircleOutlineSVG} /> */}
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
		<div className="rounded-75 shadow-lg h-full">
			<button
				ref={buttonRef}
				className="flex flex-row justify-center items-center w-full h-full bg-gray-800 rounded-75 focus:outline-none shadow-none focus:shadow-solid-indigo transition duration-200 ease-in-out select-text"
				onClick={handleClick}
				aria-label={icon.name}
			>

				{/* New */}
				{icon.statusNew && (
					<div className="px-3 py-2 absolute top-0 right-0">
						<div className="px-2 py-1 bg-indigo-500 rounded-full transform scale-90 origin-top-right">
							{/* NOTE: Uses text-white due to low contrast ratio. */}
							<p className="font-bold text-xs leading-none text-indigo-50">
								<span className="tracking-wider">NE</span>W
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
		</div>
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
	const media = React.useContext(BreakpointContext)

	const [height, minHeight] = React.useMemo(() => {
		const clientHeight = media.lg ? `calc(100vh - ${tw(4 + 18 + 4 + 24 + 20 + 24)})` : `calc(100vh - ${tw(4 + 18 + 4 + 24 + 6 + 8)})`
		const height = !state.results.length && clientHeight
		const minHeight = !(!state.results.length) && clientHeight
		return [height, minHeight]
	}, [media.lg, state.results])

	return (
		<DocumentTitle title={!state.form.search.safe ? "Heroicons" : `Heroicons – ${state.results.length} result${state.results.length !== 1 ? "s" : ""}`}>
			<main style={{ height, minHeight }}>

				{!state.results.length && (
					<div className="flex flex-col justify-center items-center h-full">
						<h3 className="flex flex-row items-baseline font-medium text-xl leading-9 text-center text-gray-100">
							No results for{" "}
							“
							<span className="inline-block truncate" style={{ maxWidth: media.xs ? 128 : 256 }}>
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
