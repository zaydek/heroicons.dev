// import CarbonAds from "./CarbonAds"
import Apply from "lib/x/Apply"
import copyToClipboardPolyfill from "utils/copyToClipboardPolyfill"
import disableAutoCorrect from "lib/x/disableAutoCorrect"
import DocumentTitle from "lib/x/DocumentTitle"
import Reset from "lib/x/Reset"
import SVG from "components/SVG"
import svgToJSX from "utils/svgToJSX"
import target_blank from "lib/x/target_blank"
import Transition from "lib/x/Transition"
import tw from "lib/x/tailwindUnits"
import useHeroiconsReducer from "reducers/useHeroiconsReducer"

import BookOpenSVG from "heroicons-0.4.1/solid/BookOpen"
import CursorClickSVG from "heroicons-0.4.1/solid/CursorClick"
import ExternalLinkSVG from "heroicons-0.4.1/solid/ExternalLink"
import FlagSVG from "heroicons-0.4.1/solid/Flag"
import XCircleSVG from "heroicons-0.4.1/solid/XCircle"

import SearchOutlineSVG from "heroicons-0.4.1/outline/Search"
import SunOutlineSVG from "heroicons-0.4.1/outline/Sun"
import SwitchHorizontalOutlineSVG from "heroicons-0.4.1/solid/SwitchHorizontal"

const HEADER_HEIGHT = 560
const HEADER_CLIP_HEIGHT = HEADER_HEIGHT - (60 * 4)

const Header = ({ state, dispatch }) => {
	React.useLayoutEffect(() => {
		const handleScroll = () => {
			try {
				// const headerBackground = document.getElementById("header-background")
				// headerBackground.style.opacity = Number(window.scrollY < HEADER_CLIP_HEIGHT / 2)
				const clipTop = document.getElementById("main-clip-top")
				clipTop.style.opacity = 0
				if (window.scrollY >= HEADER_CLIP_HEIGHT) {
					clipTop.style.opacity = 1
				}
			} catch (error) {
				console.error(error)
			}
		}
		handleScroll()
		window.addEventListener("scroll", handleScroll, false)
		return () => {
			window.removeEventListener("scroll", handleScroll, false)
		}
	}, [])

	return (
		<Apply className="relative">
			<header style={{ height: HEADER_HEIGHT /* TODO */ }}>

				<div className="-my-0.5 absolute top-0 left-0 z-10">
					<a href="TODO" {...target_blank}>
						<p className="px-4 py-0.5 pt-4 pb-0.5 no-underline hover:underline text-white">
							<span className="inline-flex flex-row items-center">
								<Apply className="relative w-6 h-6 overflow-visible">
									<svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
										<path fill="#ffcc4d" d="M36 18c0 9.941-8.059 18-18 18S0 27.941 0 18 8.059 0 18 0s18 8.059 18 18" />
										<path fill="#664500" d="M18 21.849c-2.966 0-4.935-.346-7.369-.819-.557-.106-1.638 0-1.638 1.638 0 3.275 3.763 7.369 9.007 7.369s9.007-4.094 9.007-7.369c0-1.638-1.082-1.745-1.638-1.638-2.434.473-4.402.819-7.369.819" />
										<path fill="#dd2e44" d="M16.65 3.281C15.791.85 13.126-.426 10.694.431c-1.476.52-2.521 1.711-2.928 3.104-1.191-.829-2.751-1.1-4.225-.58C1.111 3.813-.167 6.48.692 8.911c.122.344.284.663.472.958 1.951 3.582 7.588 6.1 11.001 6.131 2.637-2.167 5.446-7.665 4.718-11.677-.038-.348-.113-.698-.233-1.042zm2.7 0C20.209.85 22.875-.426 25.306.431c1.476.52 2.521 1.711 2.929 3.104 1.191-.829 2.751-1.1 4.225-.58 2.43.858 3.707 3.525 2.85 5.956-.123.344-.284.663-.473.958-1.951 3.582-7.588 6.1-11.002 6.131-2.637-2.167-5.445-7.665-4.717-11.677.037-.348.112-.698.232-1.042z" />
										<g className="absolute inset-0">
											<Apply className="transform scale-125 animate-ping" style={{ transformOrigin: "50% 30%" }}>
												<path fill="#dd2e44" d="M16.65 3.281C15.791.85 13.126-.426 10.694.431c-1.476.52-2.521 1.711-2.928 3.104-1.191-.829-2.751-1.1-4.225-.58C1.111 3.813-.167 6.48.692 8.911c.122.344.284.663.472.958 1.951 3.582 7.588 6.1 11.001 6.131 2.637-2.167 5.446-7.665 4.718-11.677-.038-.348-.113-.698-.233-1.042zm2.7 0C20.209.85 22.875-.426 25.306.431c1.476.52 2.521 1.711 2.929 3.104 1.191-.829 2.751-1.1 4.225-.58 2.43.858 3.707 3.525 2.85 5.956-.123.344-.284.663-.473.958-1.951 3.582-7.588 6.1-11.002 6.131-2.637-2.167-5.445-7.665-4.717-11.677.037-.348.112-.698.232-1.042z" />
											</Apply>
										</g>
									</svg>
								</Apply>
								<span style={{ width: "1ch" }} />
								<span style={{ opacity: 0.9 }}>
									Share with your followers on Twitter!
								</span>
							</span>
						</p>
					</a>

					<a href="TODO" {...target_blank}>
						<p className="px-4 py-0.5 pb-4 no-underline hover:underline text-white">
							<span className="inline-flex flex-row items-center">
								<Apply className="w-6 h-6 overflow-visible">
									<svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
										<path fill="#ffcc4d" d="M36 18c0 9.941-8.059 18-18 18S0 27.941 0 18 8.059 0 18 0s18 8.059 18 18" />
										<path fill="#664500" d="M18 21c-3.623 0-6.027-.422-9-1-.679-.131-2 0-2 2 0 4 4.595 9 11 9 6.404 0 11-5 11-9 0-2-1.321-2.132-2-2-2.973.578-5.377 1-9 1z" />
										<path fill="#ffffff" d="M9 22s3 1 9 1 9-1 9-1-2 4-9 4-9-4-9-4z" />
										<path fill="#e95f28" d="M15.682 4.413l-4.542.801L8.8.961C8.542.492 8.012.241 7.488.333c-.527.093-.937.511-1.019 1.039l-.745 4.797-4.542.801c-.535.094-.948.525-1.021 1.064s.211 1.063.703 1.297l4.07 1.932-.748 4.812c-.083.536.189 1.064.673 1.309.179.09.371.133.562.133.327 0 .65-.128.891-.372l3.512-3.561 4.518 2.145c.49.232 1.074.123 1.446-.272.372-.395.446-.984.185-1.459L13.625 9.73l3.165-3.208c.382-.387.469-.977.217-1.459-.254-.482-.793-.743-1.325-.65zm4.636 0l4.542.801L27.2.961c.258-.469.788-.72 1.312-.628.526.093.936.511 1.018 1.039l.745 4.797 4.542.801c.536.094.949.524 1.021 1.063s-.211 1.063-.703 1.297l-4.07 1.932.748 4.812c.083.536-.189 1.064-.673 1.309-.179.09-.371.133-.562.133-.327 0-.65-.128-.891-.372l-3.512-3.561-4.518 2.145c-.49.232-1.074.123-1.446-.272-.372-.395-.446-.984-.185-1.459l2.348-4.267-3.165-3.208c-.382-.387-.469-.977-.217-1.459.255-.482.794-.743 1.326-.65z" />
										{/* <g className="absolute inset-0"> */}
										{/* 	<Apply className="transform scale-125 animate-ping" style={{ transformOrigin: "50% 30%" }}> */}
										{/* 		<path fill="#e95f28" d="M15.682 4.413l-4.542.801L8.8.961C8.542.492 8.012.241 7.488.333c-.527.093-.937.511-1.019 1.039l-.745 4.797-4.542.801c-.535.094-.948.525-1.021 1.064s.211 1.063.703 1.297l4.07 1.932-.748 4.812c-.083.536.189 1.064.673 1.309.179.09.371.133.562.133.327 0 .65-.128.891-.372l3.512-3.561 4.518 2.145c.49.232 1.074.123 1.446-.272.372-.395.446-.984.185-1.459L13.625 9.73l3.165-3.208c.382-.387.469-.977.217-1.459-.254-.482-.793-.743-1.325-.65zm4.636 0l4.542.801L27.2.961c.258-.469.788-.72 1.312-.628.526.093.936.511 1.018 1.039l.745 4.797 4.542.801c.536.094.949.524 1.021 1.063s-.211 1.063-.703 1.297l-4.07 1.932.748 4.812c.083.536-.189 1.064-.673 1.309-.179.09-.371.133-.562.133-.327 0-.65-.128-.891-.372l-3.512-3.561-4.518 2.145c-.49.232-1.074.123-1.446-.272-.372-.395-.446-.984-.185-1.459l2.348-4.267-3.165-3.208c-.382-.387-.469-.977-.217-1.459.255-.482.794-.743 1.326-.65z" /> */}
										{/* 	</Apply> */}
										{/* </g> */}
									</svg>
								</Apply>
								<span style={{ width: "1ch" }} />
								<span style={{ opacity: 0.9 }}>
									Star website on GitHub
								</span>
							</span>
						</p>
					</a>
				</div>

				{/* Background */}
				<div className="absolute top-0 inset-x-0" style={{ height: HEADER_HEIGHT - (24 * 4) /* tw(24) */ }}>
					<div id="header-background" className="h-full" style={{ backgroundColor: "hsl(270, 100%, 50%)" }} />
					<div className="absolute top-full inset-x-0">
						<Apply className="w-full h-24" style={{ color: "hsl(270, 100%, 50%)" }}>
							<svg
								preserveAspectRatio="none"
								fill="currentColor"
								viewBox="0 0 8 1"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path fillRule="evenodd" clipRule="evenodd" d="M4 0.999999C2 1 0.5 0.333333 0 0L8 -1.39876e-06C7.41667 0.333332 6 0.999999 4 0.999999Z" />
							</svg>
						</Apply>
					</div>
				</div>

				{/* Scrolling background */}
				<div className="fixed top-0 inset-x-0" style={{ height: tw(24) }}>
					<div id="header-background" className="h-full" style={{ backgroundColor: "hsl(270, 100%, 50%)" }} />
					<div className="absolute top-full inset-x-0">
						<Apply className="w-full h-24" style={{ color: "hsl(270, 100%, 50%)" }}>
							<svg
								preserveAspectRatio="none"
								fill="currentColor"
								viewBox="0 0 8 1"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path fillRule="evenodd" clipRule="evenodd" d="M4 0.999999C2 1 0.5 0.333333 0 0L8 -1.39876e-06C7.41667 0.333332 6 0.999999 4 0.999999Z" />
							</svg>
						</Apply>
					</div>
				</div>

				{/* Header */}
				<div className="flex flex-row justify-center items-center h-full">
					<div className="flex flex-col justify-center h-full">

						<Apply className="relative">
							<div className="-mt-72">
								<div className="px-1 absolute inset-y-0 right-full flex flex-row items-center">
									<Apply className="-mb-1 w-12 h-12 text-white opacity-50 !text-indigo-500">
										<svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
											<path fillRule="evenodd" clipRule="evenodd" d="M2.02345 6.24396C2.06852 5.51956 2.69586 5.00256 3.41667 4.91762C5.41116 4.68257 7.31447 3.9485 8.94977 2.78439C9.57357 2.34032 10.4264 2.34037 11.0501 2.78452C12.686 3.94937 14.5902 4.68381 16.5857 4.91877C17.3054 5.00352 17.9319 5.5192 17.9766 6.24256C17.9922 6.49348 18 6.74639 18 7.00085C18 12.0385 14.8952 16.3511 10.496 18.13C10.1779 18.2586 9.8221 18.2586 9.50401 18.1299C5.10482 16.3501 2 12.0375 2 6.99985C2 6.74589 2.0079 6.49387 2.02345 6.24396Z" />
										</svg>
									</Apply>
								</div>
								<h1
									className="font-medium tracking-tighter leading-none text-white select-none"
									style={{
										fontSize: tw(14),
										fontFamily: "'DM Sans', var(--sans)",
										opacity: 0.95,
									}}
								>
									<span className="mr-px font-bold" style={{ fontSize: "0.75em" }}>
										H
									</span>
									eroicons
								</h1>
							</div>
						</Apply>

						{/* CTA */}
						{/* <div className="space-x-3 pt-0 sm:pt-12 hidden sm:flex sm:flex-row"> */}
						{/* 	<div className="rounded-6 shadow-lg"> */}
						{/* 		<a className="px-4 py-3 flex flex-row items-center bg-gray-800 rounded-6 focus:outline-none shadow-none focus:shadow-solid-indigo transition duration-200 ease-in-out" style={{ height: tw(18) }} href="https://figma.com/file/vfjBXrSSOCgmVEX5fdvV4L" {...target_blank}> */}
						{/* 			<div className="px-2 py-1 flex flex-row justify-center"> */}
						{/* 				// NOTE: Uses text-gray-200 because text-gray-100 is too sharp. */}
						{/* 				<p className="flex flex-row items-center font-medium text-xl text-gray-200"> */}
						{/* 					<Apply className="mr-4 w-6 h-6"> */}
						{/* 						<svg viewBox="0 0 38 57"> */}
						{/* 							<path fill="#1abcfe" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" /> */}
						{/* 							<path fill="#0acf83" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" /> */}
						{/* 							<path fill="#ff7262" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" /> */}
						{/* 							<path fill="#f24e1e" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" /> */}
						{/* 							<path fill="#a259ff" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" /> */}
						{/* 						</svg> */}
						{/* 					</Apply> */}
						{/* 						Open in Figma */}
						{/* 					<ExternalLinkSVG className="ml-2 w-5 h-5 text-indigo-400" /> */}
						{/* 				</p> */}
						{/* 			</div> */}
						{/* 		</a> */}
						{/* 	</div> */}
						{/* 	<div className="rounded-6 shadow-lg"> */}
						{/* 		<a className="px-4 py-3 flex flex-row items-center bg-gray-800 rounded-6 focus:outline-none shadow-none focus:shadow-solid-indigo transition duration-200 ease-in-out" style={{ height: tw(18) }} href="https://github.com/tailwindlabs/heroicons" {...target_blank}> */}
						{/* 			<div className="px-2 py-1 flex flex-row justify-center"> */}
						{/* 				// NOTE: Uses text-gray-200 because text-gray-100 is too sharp. */}
						{/* 				<p className="flex flex-row items-center font-medium text-xl text-gray-200"> */}
						{/* 					<Apply className="mr-4 w-6 h-6"> */}
						{/* 						<svg viewBox="0 0 16 16" fill="currentColor"> */}
						{/* 							<path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" /> */}
						{/* 						</svg> */}
						{/* 					</Apply> */}
						{/* 						Open in GitHub */}
						{/* 					<ExternalLinkSVG className="ml-2 w-5 h-5 text-indigo-400" /> */}
						{/* 				</p> */}
						{/* 			</div> */}
						{/* 		</a> */}
						{/* 	</div> */}
						{/* </div> */}

					</div>

					{/* Subheader */}
					{/* <h2 className="flex flex-row justify-center items-center flex-wrap text-center font-medium text-xl sm:text-2xl text-gray-100"> */}
					{/* 	<BookOpenSVG className="mr-2 hidden sm:block w-8 h-8" /> */}
					{/* 		MIT open source icons by{" "} */}
					{/* 	<span style={{ width: "0.25em" }} /> */}
					{/* 	<a */}
					{/* 		className="inline-flex flex-row items-center underline" */}
					{/* 		style={{ textDecorationColor: "var(--indigo-500)" }} */}
					{/* 		href="https://twitter.com/steveschoger" */}
					{/* 		{...target_blank} */}
					{/* 	> */}
					{/* 			Steve Schoger{" "} */}
					{/* 		<span style={{ width: "0.25em" }} /> */}
					{/* 		<ExternalLinkSVG className="-mb-1 w-5 h-5 text-indigo-400" /> */}
					{/* 	</a> */}
					{/* </h2> */}

				</div>

			</header>
		</Apply>
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
			el.setAttribute("xmlns", "http://www.w3.org/2000/svg")

			// Remove unsorted attributes:
			const sortedAttrs = [...el.attributes].sort((a, b) => a.name.localeCompare(b.name))
			for (const each of sortedAttrs) {
				el.removeAttributeNode(each)
			}
			// Add sorted attributes:
			for (const each of sortedAttrs) {
				el.setAttributeNode(each)
			}

			copyToClipboardPolyfill(!state.form.copyAsReact ? el.outerHTML : svgToJSX(el.outerHTML))
			buttonRef.current.focus()
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
		<Reset className="w-full h-full select-text focus:outline-none">
			<button
				ref={buttonRef}
				className="flex flex-row justify-center items-center bg-white"
				onClick={handleClick}
				aria-label={icon.name}
			>

				{/* New tag */}
				{icon.statusNew && (
					<div className="-m-px absolute top-0 right-0">
						{/* NOTE: Uses -m-px and tw(... + 0.25) to tuck
						the tag in the corner and uses polygon(105% ...)
						to compensate for a rendering bug in Chrome. */}
						<div className="bg-indigo-500" style={{ width: tw(4 + 0.25), height: tw(4 + 0.25), clipPath: "polygon(105% 0, 105% 105%, 0 0)" }} />
					</div>
				)}

				{/* New tag */}
				{/* {icon.statusNew && ( */}
				{/* 	<div className="p-3 absolute top-0 right-0"> */}
				{/* 		<div className="w-3 h-3 bg-indigo-500 rounded-full" /> */}
				{/* 	</div> */}
				{/* )} */}

				{/* SVG */}
				<SVG
					id={icon.name}
					className="w-8 h-8 text-gray-800"
					svg={icon[!state.form.showOutline ? "solid" : "outline"]}
				/>

				{/* Icon name */}
				{/* */}
				{/* TODO */}
				<div className="py-3 absolute bottom-0">
					<p className="text-xs tracking-wide text-gray-600">
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
		</Reset>
	)
}, (prev, next) => {
	const ok = (
		prev.state.form === next.state.form &&
		prev.state.dispatch === next.state.dispatch &&
		prev.icon === next.icon
	)
	return ok
})

const Main = ({ state, dispatch }) => {
	const inputRef = React.useRef(null)

	const [inputValue, setInputValue] = React.useState("")

	React.useEffect(() => {
		inputRef.current.focus()
	}, [])

	// Debounces inputValue (10ms).
	React.useEffect(
		React.useCallback(() => {
			const id = setTimeout(() => {
				const text = inputValue
				dispatch({
					type: "UPDATE_FORM_SEARCH",
					text,
				})
			}, 10)
			return () => {
				clearTimeout(id)
			}
		}, []),
		[inputValue],
	)

	return (
		<div className="flex flex-row items-start">

			{/* LHS */}
			<Apply className="flex-1">
				<main className="!border !border-gray-200 rounded-6 shadow-md">
					<Apply className="rounded-6 shadow-hero-xl">
						<div className="bg-gray-200">

							<div
								id="main-clip-top"
								className="-mb-24 sticky h-24 rounded-t-6 z-10"
								style={{
									top: tw(4),
									// boxShadow: `0 ${tw(6)} 0 ${tw(6)} var(--red-500)`,
									boxShadow: `
										0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06),
										0 0 0 1px rgba(0, 0, 0, 0.05), 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04),
										0 -${tw(4)} 0 ${tw(4)} hsl(270, 100%, 50%)
									`,
									clipPath: "inset(-100% -100% 50% -100%)",
								}}
							/>

							<DocumentTitle title={!state.form.search.safe ? "Heroicons" : `Heroicons – ${state.results.length} result${state.results.length !== 1 ? "s" : ""}`}>
								{state.results.length > 0 && (
									<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 rounded-6 overflow-hidden" style={{ gap: 1 }}>
										{state.results.map((each, x) => (
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
							</DocumentTitle>

							<div
								id="main-clip-bottom"
								className="-mt-24 sticky h-24 rounded-b-6 z-10"
								style={{
									bottom: tw(8),
									// boxShadow: `0 ${tw(6)} 0 ${tw(6)} var(--red-500)`,
									boxShadow: `
										0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06),
										0 0 0 1px rgba(0, 0, 0, 0.05), 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04),
										0 ${tw(4)} 0 ${tw(4)} var(--white)
									`,
									clipPath: "inset(50% -100% -100% -100%)",
								}}
							/>

						</div>
					</Apply>
				</main>
			</Apply>

			{/* RHS */}
			<div className="w-6" />
			<aside className="sticky" style={{ top: tw(4) }}>
				<div className="!border !border-gray-200 rounded-6 shadow-md">
					<Apply className="rounded-6 shadow-hero-xl">
						<div className="w-96 bg-white">

							{/* Section: Search */}
							<Apply className="relative">
								<section className="flex flex-row h-20">

									{/* LHS */}
									<div className="absolute inset-y-0 left-0 pointer-events-none">
										<div className="px-6 flex flex-row items-center h-full">
											<Apply
												className="w-6 h-6 transform scale-90"
												style={{ color: !inputValue ? "var(--gray-300)" : "var(--indigo-600)" }}
											>
												<Apply className="transition duration-200 ease-in-out">
													<SearchOutlineSVG />
												</Apply>
											</Apply>
										</div>
									</div>

									{/* Search */}
									<Reset className="w-full h-full leading-none bg-transparent focus:outline-none">
										<input
											ref={inputRef}
											className="px-14 text-lg placeholder-gray-300 text-gray-800"
											type="text"
											placeholder="Search"
											value={inputValue}
											onChange={e => setInputValue(e.target.value)}
											autoFocus
											{...disableAutoCorrect}
										/>
									</Reset>

									{/* RHS */}
									{inputValue && (
										<div className="absolute inset-y-0 right-0">
											<Reset className="focus:outline-none">
												<button className="px-6 flex flex-row items-center h-full text-gray-300 hover:text-gray-800 focus:text-gray-800 rounded-tr-6" onClick={e => setInputValue("")}>
													<Apply className="transition duration-200 ease-in-out">
														<Apply className="w-6 h-6 transform scale-90">
															<XCircleSVG />
														</Apply>
													</Apply>
												</button>
											</Reset>
										</div>
									)}

								</section>
							</Apply>

							{/* Section: Copy As */}
							<hr className="border-t border-gray-200" />
							<section className="px-6 py-4">
								<h6 className="font-bold tracking-wider leading-none text-gray-500" style={{ fontSize: "0.625rem" }}>
									<span className="inline-flex flex-row justify-between w-full">
										<span>
											COPY TO CLIPBOARD
										</span>
										{/* <span> */}
										{/* 	DOWNLOAD */}
										{/* </span> */}
									</span>
								</h6>
								<div className="h-4" />
								<div className="flex flex-row justify-between items-center">
									<div className="space-x-2 flex flex-row">
										<div className="w-10 h-10 bg-gray-100 rounded-full" />
										<div className="w-10 h-10 bg-gray-100 rounded-full" />
										<div className="w-10 h-10 bg-gray-100 rounded-full" />
									</div>
									{/* <div className="w-10 h-10 bg-gray-100 rounded-full" /> */}
								</div>
							</section>

							{/* Section: Size */}
							{/* */}
							{/* TODO: Add overflow-visible. */}
							<hr className="border-t border-gray-200" />
							<section className="px-6 py-4">
								<h6 className="font-bold tracking-wider leading-none text-gray-500" style={{ fontSize: "0.625rem" }}>
									SIZE
								</h6>
								<div className="h-4" />
								<div className="flex flex-row justify-between items-center">
									<div className="w-64 h-1 bg-gray-100 rounded-full" />
									<div className="w-16 h-8 bg-gray-100 rounded-full" />
								</div>
							</section>

							{/* Section: Size */}
							{/* */}
							{/* TODO: Add overflow-visible. */}
							{/* <hr className="border-t border-gray-200" /> */}
							{/* <section className="px-6 py-4"> */}
							{/* 	<h6 className="font-bold tracking-wider leading-none text-gray-500" style={{ fontSize: "0.625rem" }}> */}
							{/* 		CARBON ADS */}
							{/* 	</h6> */}
							{/* 	<div className="h-4" /> */}
							{/* 	<div className="w-80 h-32 bg-gray-100 rounded-2" /> */}
							{/* </section> */}

							{/* Section: Class names */}
							{/* */}
							{/* TODO: Add overflow-visible. */}
							{/* <hr className="border-t border-gray-200" /> */}
							{/* <section className="px-6 py-4"> */}
							{/* 	<h6 className="font-bold tracking-wider leading-none text-gray-500" style={{ fontSize: "0.625rem" }}> */}
							{/* 		CLASS NAMES */}
							{/* 	</h6> */}
							{/* 	<div className="h-4" /> */}
							{/* 	<div className="flex flex-row justify-between items-center"> */}
							{/* 		<div className="w-64 h-1 bg-gray-100 rounded-full" /> */}
							{/* 		<div className="w-16 h-8 bg-gray-100 rounded-full" /> */}
							{/* 	</div> */}
							{/* </section> */}

							{/* Section: Stroke-width */}
							{/* */}
							{/* TODO: Heroicons do not currently export stroke-width as an API. */}
							{/* <hr className="border-t border-gray-200" /> */}
							{/* <section className="px-6 py-6"> */}
							{/* 	<h6 className="font-bold tracking-wider leading-none text-gray-500" style={{ fontSize: "0.625rem" }}> */}
							{/* 		STROKE-WIDTH */}
							{/* 	</h6> */}
							{/* 	<div className="h-4" /> */}
							{/* 	<div className="flex flex-row justify-between items-center"> */}
							{/* 		<div className="w-64 h-1 bg-gray-100 rounded-full" /> */}
							{/* 		<div className="w-16 h-8 bg-gray-100 rounded-full" /> */}
							{/* 	</div> */}
							{/* </section> */}

							{/* <hr className="border-t border-gray-200" /> */}
							<div className="h-4" />

							{/* <div className="h-36" /> */}

							{/* <div */}
							{/* 	// id="main-clip-bottom" */}
							{/* 	className="-mt-24 sticky h-24 rounded-b-6 z-10" */}
							{/* 	style={{ */}
							{/* 		bottom: tw(8), */}
							{/* 		// boxShadow: `0 ${tw(6)} 0 ${tw(6)} var(--red-500)`, */}
							{/* 		boxShadow: ` */}
							{/* 			0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), */}
							{/* 			0 0 0 1px rgba(0, 0, 0, 0.05), 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), */}
							{/* 			0 ${tw(4)} 0 ${tw(4)} var(--white) */}
							{/* 		`, */}
							{/* 		clipPath: "inset(50% -100% -100% -100%)", */}
							{/* 	}} */}
							{/* /> */}

						</div>
					</Apply>

				</div>

				<section className="px-6 py-12">
					{/* <h6 className="font-bold tracking-wider leading-none text-gray-500" style={{ fontSize: "0.625rem" }}> */}
					{/* 	CARBON ADS */}
					{/* </h6> */}
					{/* <div className="h-4" /> */}
					<div className="-mx-6 flex flex-row justify-center">
						<div className="bg-gray-100 rounded-3" style={{ width: 330, height: 125 }} />
					</div>
				</section>

			</aside>

		</div>
	)
}

const LayoutFragment = () => {
	const [state, dispatch] = useHeroiconsReducer()

	// React.useEffect(
	// 	React.useCallback(() => {
	// 		const id = setTimeout(() => {
	// 			dispatch({
	// 				type: "HIDE_NOTIFICATION",
	// 			})
	// 		}, 2.2e3)
	// 		return () => {
	// 			clearTimeout(id)
	// 		}
	// 	}, [dispatch]),
	// 	[state.notif.showKey],
	// )

	return (
		<>
			<style>{`

/* https://tailwindcss.com/docs/font-family */
html {
	--sans:  system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
	--serif: Georgia, Cambria, "Times New Roman", Times, serif;
	--mono:  Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}

`}
			</style>
			<section>
				<Header state={state} dispatch={dispatch} />
			</section>
			<section className="-mt-48 px-8 flex flex-row justify-center">
				<div className="w-full z-10" style={{ maxWidth: 1440 }}>
					<Main state={state} dispatch={dispatch} />
				</div>
			</section>
			<div className="h-24" />
		</>
	)
}

export default LayoutFragment
