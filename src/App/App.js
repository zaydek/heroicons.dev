import CarbonAds from "./CarbonAds"
import copyToClipboardPolyfill from "./copyToClipboardPolyfill"
import disableAutoCorrect from "lib/x/disableAutoCorrect"
import DocumentTitle from "lib/x/DocumentTitle"
import ExtLinksFragment from "./ExtLinksFragment"
import React from "react"
import SVG from "./SVG"
import svgToJSX from "./svgToJSX"
import tailwindcss from "./tailwindcss"
import target_blank from "lib/x/target_blank"
import Transition from "lib/x/Transition"
import useHeroiconsReducer from "./useHeroiconsReducer"
import useLayoutBreakpoints from "lib/x/useLayoutBreakpoints"

import BookOpenSVG from "heroicons-82f6a4d/react/solid/BookOpen"
import CodeSVG from "heroicons-82f6a4d/react/solid/Code"
import ExternalLinkSVG from "heroicons-82f6a4d/react/solid/ExternalLink"
import FlagSVG from "heroicons-82f6a4d/react/solid/Flag"
import SearchOutlineIcon from "heroicons-82f6a4d/react/outline/Search"
import SwitchHorizontalSVG from "heroicons-82f6a4d/react/solid/SwitchHorizontal"
// import { ReactComponent as CodexSVG } from "./codex.svg"
import { ReactComponent as FigmaSVG } from "svg/figma.svg"
import { ReactComponent as GitHubSVG } from "svg/github.svg"

import srcAdamWathan128 from "images/adam-wathan-128.jpeg"
import srcSponsorQAW from "images/sponsor-qaw.png"
import srcSponsorRobHope from "images/sponsor-rob-hope.png"
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

const App = () => {
	const [state, dispatch] = useHeroiconsReducer()
	const media = useLayoutBreakpoints(tailwindcss.theme.screens)

	const carbonAdsRef = React.useRef()
	const [showCarbonAds, setShowCarbonAds] = React.useState(false)
	// const [delayedShowCarbonAds, setDelayedShowCarbonAds] = React.useState(false)

	const [sponsorLoadedCount, setSponsorLoadedCount] = React.useState(0)

	// React.useEffect(() => {
	// 	if (showCarbonAds) {
	// 		setTimeout(() => {
	// 			setDelayedShowCarbonAds(true)
	// 		}, 700) // -> duration-700
	// 	}
	// }, [showCarbonAds])

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
							className="transition duration-700 ease-out"
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
							className="transition duration-700 ease-out"
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

											{/* <Transition */}
											{/* 	on={delayedShowCarbonAds} */}
											{/* 	className="transition duration-700 ease-out" */}
											{/* 	from="opacity-0" */}
											{/* 	to="opacity-100" */}
											{/* > */}
											{/* 	<div className="px-4 py-3 absolute inset-x-0 top-full"> */}
											{/* 		<div className="flex flex-row justify-center"> */}
											{/* 			{/* NOTE: Uses text-gray-200 because text-gray-100 is too sharp. */} */}
											{/* 			<p className="text-sm text-gray-200"> */}
											{/* 				Click the ad to make it go away.{" "} */}
											{/* 				<span */}
											{/* 					style={{ */}
											{/* 						verticalAlign: "-12.5%", */}
											{/* 						fontSize: "150%", */}
											{/* 						lineHeight: 1, */}
											{/* 					}} */}
											{/* 					role="img" */}
											{/* 					aria-label="sparkles" */}
											{/* 				> */}
											{/* 					✨ */}
											{/* 				</span> */}
											{/* 			</p> */}
											{/* 		</div> */}
											{/* 	</div> */}
											{/* </Transition> */}

										</div>
									</div>
								</div>
							</div>
						</Transition>

						{/* Header */}
						<div className="relative flex flex-row items-center">
							<h1 className="font-bold font-brand-sans text-5xl text-gray-100" style={{ letterSpacing: "-0.025em" }}>
								Heroicons
							</h1>
							<div className="-mt-1 absolute" style={{ paddingLeft: "0.5ch", left: "100%" }}>
								<FlagSVG className="w-12 h-12 text-indigo-500" />
							</div>
						</div>

						{/* Subheader */}
						<h2 className="flex flex-row items-center text-center font-medium text-2xl text-gray-100">
							<BookOpenSVG className="mr-2 hidden xs:block w-8 h-8" />
							MIT Open Source UI Icons
						</h2>

						{/* Steve, Adam */}
						<div className="h-4" />
						<h3 className="text-center font-medium text-xl text-gray-100">
							Icons <span className="hidden sm:inline">created</span> by{" "}
							<a href="https://twitter.com/steveschoger" {...target_blank}>
								<img className="mx-1 inline-block w-8 h-8 rounded-full" src={srcSteveSchoger128} alt="Steve Schoger" />{" "}
								<span className="underline" style={{ textDecorationColor: "var(--indigo-500)" }}>
									Steve Schoger
								</span>
							</a>{" "}
							<span className="hidden sm:inline">
								and{" "}
								<a href="https://twitter.com/adamwathan" {...target_blank}>
									<img className="mx-1 inline-block w-8 h-8 rounded-full" src={srcAdamWathan128} alt="Adam Wathan" />{" "}
									<span className="underline" style={{ textDecorationColor: "var(--indigo-500)" }}>
										Adam Wathan
									</span>
								</a>
							</span>
						</h3>

						{/* Zaydek */}
						<div className="h-2" />
						<h3 className="text-center font-medium text-xl text-gray-100">
							{/* <a className="underline" style={{ textDecorationColor: "var(--indigo-500)" }} href="https://heroicons.dev" {...target_blank}> */}
							{/* 	heroicons.dev */}
							{/* </a>{" "} */}
							Site <span className="hidden sm:inline">maintained</span> by{" "}
							<a href="https://twitter.com/username_ZAYDEK" {...target_blank}>
								<img className="mx-1 inline-block w-8 h-8 rounded-full" src={srcZaydekMG128} alt="Zaydek MG" />{" "}
								<span className="underline" style={{ textDecorationColor: "var(--indigo-500)" }}>
									Zaydek
								</span>
							</a>
						</h3>

						{/* Sponsors */}
						<div className="h-12" />
						<h6 className="flex flex-row items-center text-center font-bold text-sm tracking-wider text-gray-400">
							HEROICONS.DEV IS SPONSORED BY
						</h6>

						<div className="h-6" />
						<div className="flex flex-col xs:flex-row justify-center items-center">

							{/* QA Wolf */}
							<a href="https://github.com/qawolf/qawolf" {...target_blank}>
								<Transition
									on={sponsorLoadedCount >= 2}
									className="transition duration-700 ease-out"
									from="opacity-0 transform scale-90"
									to="opacity-100 transform scale-110"
								>
									<div className="opacity-0">
										<img
											className="w-auto h-12 object-contain opacity-75 hover:opacity-100 transition duration-200 ease-in-out"
											src={srcSponsorQAW}
											alt="QA Wolf"
											onLoad={e => {
												setSponsorLoadedCount(current => current + 1)
											}}
										/>
									</div>
								</Transition>
							</a>

							{/* Rob Hope */}
							<div className="w-12 h-4" />
							<a href="https://onepagelove.com/go/heroicons" {...target_blank}>
								<Transition
									on={sponsorLoadedCount >= 2}
									className="transition duration-700 ease-out"
									from="opacity-0 transform scale-90"
									to="opacity-100 transform scale-110"
								>
									<div className="opacity-0">
										<img
											className="w-auto h-12 object-contain opacity-75 hover:opacity-100 transition duration-200 ease-in-out"
											src={srcSponsorRobHope}
											alt="Rob Hope"
											onLoad={e => {
												setSponsorLoadedCount(current => current + 1)
											}}
										/>
									</div>
								</Transition>
							</a>

						</div>

						<div className="h-6" />
						<h6 className="flex flex-row items-center text-center font-bold text-sm tracking-wider text-gray-400">
							NOT AFFILIATED WITH TAILWIND LABS
						</h6>

						{/* CTA */}
						<div className="space-x-3 pt-0 sm:pt-16 hidden sm:flex sm:flex-row">
							<div className="rounded-75 shadow-lg">
								<a className="px-4 py-3 flex flex-row items-center bg-gray-800 rounded-75 focus:outline-none shadow-none focus:shadow-solid-indigo transition duration-200 ease-in-out" style={{ height: tw(18) }} href="https://figma.com/file/vfjBXrSSOCgmVEX5fdvV4L" {...target_blank}>
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
								<a className="px-4 py-3 flex flex-row items-center bg-gray-800 rounded-75 focus:outline-none shadow-none focus:shadow-solid-indigo transition duration-200 ease-in-out" style={{ height: tw(18) }} href="https://github.com/refactoringui/heroicons" {...target_blank}>
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
												<SVG className="mr-3 w-5 h-5 text-indigo-50" svg={state.notif.notifInfo.icon} />
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
												Copied{" "}
												<span className="font-mono">
													{state.notif.notifInfo.name}
												</span>{" "}
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
		<div
			className="-mt-4 pt-4 static xs:sticky top-0 z-30"
			style={{
				// marginLeft: -3,
				// marginRight: -3,
				boxShadow: `inset 0 ${tw((18 + 4) / 2)} var(--black)`,
			}}
		>
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
								{...disableAutoCorrect}
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
										? "Click to Enable Copy as JSX"
										: "Click to Enable Copy as HTML"
								}
							>
								{tooltip === "jsx" && (
									<div className="pt-2 absolute top-full right-0 z-40">
										<div className="rounded-md shadow-lg">
											<div className="rounded-md shadow-lg">
												<div className="px-3 py-2 relative bg-gray-700 rounded-md">
													<p className="whitespace-pre font-medium text-sm text-gray-100">
														{!state.form.copyAsReact
															? "Click to Enable Copy as JSX"
															: "Click to Enable Copy as HTML"
														}
													</p>
												</div>
											</div>
										</div>
									</div>
								)}
								{/* <CodeSVG className="w-6 h-6" /> */}
								<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
									<path d="M12 9.861A2.139 2.139 0 1 0 12 14.139 2.139 2.139 0 1 0 12 9.861zM6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.133.467zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 0 1 1.182-3.046A24.752 24.752 0 0 1 5.317 8.95zM17.992 16.255l-.133-.469a23.357 23.357 0 0 0-1.364-3.577l-.101-.213.101-.213a23.42 23.42 0 0 0 1.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.14s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 0 1-1.182 3.046zM5.31 8.945l-.133-.467C4.188 4.992 4.488 2.494 6 1.622c1.483-.856 3.864.155 6.359 2.716l.34.349-.34.349a23.552 23.552 0 0 0-2.422 2.967l-.135.193-.235.02a23.657 23.657 0 0 0-3.785.61l-.472.119zm1.896-6.63c-.268 0-.505.058-.705.173-.994.573-1.17 2.565-.485 5.253a25.122 25.122 0 0 1 3.233-.501 24.847 24.847 0 0 1 2.052-2.544c-1.56-1.519-3.037-2.381-4.095-2.381zM16.795 22.677c-.001 0-.001 0 0 0-1.425 0-3.255-1.073-5.154-3.023l-.34-.349.34-.349a23.53 23.53 0 0 0 2.421-2.968l.135-.193.234-.02a23.63 23.63 0 0 0 3.787-.609l.472-.119.134.468c.987 3.484.688 5.983-.824 6.854a2.38 2.38 0 0 1-1.205.308zm-4.096-3.381c1.56 1.519 3.037 2.381 4.095 2.381h.001c.267 0 .505-.058.704-.173.994-.573 1.171-2.566.485-5.254a25.02 25.02 0 0 1-3.234.501 24.674 24.674 0 0 1-2.051 2.545zM18.69 8.945l-.472-.119a23.479 23.479 0 0 0-3.787-.61l-.234-.02-.135-.193a23.414 23.414 0 0 0-2.421-2.967l-.34-.349.34-.349C14.135 1.778 16.515.767 18 1.622c1.512.872 1.812 3.37.824 6.855l-.134.468zM14.75 7.24c1.142.104 2.227.273 3.234.501.686-2.688.509-4.68-.485-5.253-.988-.571-2.845.304-4.8 2.208A24.849 24.849 0 0 1 14.75 7.24zM7.206 22.677A2.38 2.38 0 0 1 6 22.369c-1.512-.871-1.812-3.369-.823-6.854l.132-.468.472.119c1.155.291 2.429.496 3.785.609l.235.02.134.193a23.596 23.596 0 0 0 2.422 2.968l.34.349-.34.349c-1.898 1.95-3.728 3.023-5.151 3.023zm-1.19-6.427c-.686 2.688-.509 4.681.485 5.254.987.563 2.843-.305 4.8-2.208a24.998 24.998 0 0 1-2.052-2.545 24.976 24.976 0 0 1-3.233-.501zM12 16.878c-.823 0-1.669-.036-2.516-.106l-.235-.02-.135-.193a30.388 30.388 0 0 1-1.35-2.122 30.354 30.354 0 0 1-1.166-2.228l-.1-.213.1-.213a30.3 30.3 0 0 1 1.166-2.228c.414-.716.869-1.43 1.35-2.122l.135-.193.235-.02a29.785 29.785 0 0 1 5.033 0l.234.02.134.193a30.006 30.006 0 0 1 2.517 4.35l.101.213-.101.213a29.6 29.6 0 0 1-2.517 4.35l-.134.193-.234.02c-.847.07-1.694.106-2.517.106zm-2.197-1.084c1.48.111 2.914.111 4.395 0a29.006 29.006 0 0 0 2.196-3.798 28.585 28.585 0 0 0-2.197-3.798 29.031 29.031 0 0 0-4.394 0 28.477 28.477 0 0 0-2.197 3.798 29.114 29.114 0 0 0 2.197 3.798z" />
								</svg>
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
										? "Click to Switch to Outline Icons"
										: "Click to Switch to Solid Icons"
								}
							>
								{tooltip === "alt" && (
									<div className="pt-2 absolute top-full right-0 z-40">
										<div className="rounded-md shadow-lg">
											<div className="rounded-md shadow-lg">
												<div className="px-3 py-2 relative bg-gray-700 rounded-md">
													<p className="whitespace-pre font-medium text-sm text-gray-100">
														{!state.form.showOutline
															? "Click to Switch to Outline Icons"
															: "Click to Switch to Solid Icons"
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
							{/* NOTE: Uses text-white because of bg-indigo-500. */}
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

						{/* NOTE: Uses text-gray-200 because text-gray-100 is too sharp. */}
						<p className="flex flex-row items-baseline font-medium text-xl text-center text-gray-200">
							No results for “
							<span className="inline-block truncate" style={{ maxWidth: media.xs ? 128 : 256 }}>
								{state.form.search.user}.
							</span>”
						</p>

						{/* NOTE: Uses text-gray-200 because text-gray-100 is too sharp. */}
						<p className="font-medium text-xl text-center text-gray-200">
							Try again or{" "}
							<a className="underline" style={{ textDecorationColor: "var(--indigo-500)" }} href="https://github.com/tailwindlabs/heroicons/issues" {...target_blank}>
								request an icon
							</a>
							.
						</p>

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
