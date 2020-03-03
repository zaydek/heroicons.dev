import * as Hero from "components/Heroicons"
import Container from "components/Container"
import IconView from "./IconView"
import originalIcons from "./originalIcons"
import React from "react"
import { ReactComponent as GitHubLogo } from "svg/github.svg"
import { ReactComponent as TwitterLogo } from "svg/twitter.svg"

// ;(() => {
// 	document.body.classList.add("debug-css")
// })()

const Search = ({ value, setValue, solid, setSolid, ...props }) => {
	const ref = React.useRef()
	const lhs = React.useRef()
	const rhs = React.useRef()

	React.useLayoutEffect(() => {
		const w1 = lhs.current.getBoundingClientRect().width
		const w2 = rhs.current.getBoundingClientRect().width
		ref.current.style.padding = `0px ${w2}px 0px ${w1}px`
	}, [])

	const handleKeyDown = e => {
		if (e.keyCode !== 27) {
			// No-op
			return
		}
		setValue("")
	}

	return (
		<div className="-mx-6 mb-6 p-6 pb-0 sticky top-0 bg-gray-100 z-40">
			<div className="relative flex flex-row justify-between h-16 text-xl tracking-px text-gray-800">

				{/* LHS */}
				<div ref={lhs} className="px-6 flex flex-row items-center rounded-l-lg-xl focus:outline-none z-10 pointer-events-none">
					<Hero.SearchOutlineMd className="-mr-2 w-6 h-6 text-gray-400" />
				</div>

				{/* Search bar */}
				<div className="absolute inset-0">
					<input
						ref={ref}
						className="w-full h-full bg-white outline-none shadow-hero focus:shadow-outline trans-150"
						style={{ borderRadius: "0.75rem" }}
						type="text"
						placeholder="Search 140 icons"
						value={value}
						onKeyDown={handleKeyDown}
						onChange={e => setValue(e.target.value)}
					/>
				</div>

				{/* RHS */}
				<button ref={rhs} className="px-6 flex flex-row items-center rounded-r-lg-xl focus:outline-none focus:shadow-outline z-10" onClick={e => setSolid(!solid)}>
					<p className="w-16">
						{!solid ? (
							"Outline"
						) : (
							"Solid"
						)}
					</p>
					<Hero.SwitchVerticalOutlineMd className="ml-4 w-6 h-6 text-gray-400" />
				</button>

			</div>
		</div>
	)
}

const App = props => {
	const [value, setValue] = React.useState("")
	const [solid, setSolid] = React.useState(false)
	const [icons, setIcons] = React.useState(originalIcons)

	React.useEffect(() => {
		const id = setTimeout(() => {
			const query = value.toLowerCase()
			const filteredIcons = originalIcons.filter(each => each.name.includes(query))
			setIcons(filteredIcons)
		}, 25)
		return () => {
			clearTimeout(id)
		}
	}, [value])

	return (
		<Container>

			{/* H1 */}
			<h1 className="text-center font-dm-sans font-bold text-5xl tracking-tighter">
				Heroicons
			</h1>

			{/* H2 */}
			<div className="h-3" />
			<h2 className="text-center font-medium text-xl -tracking-px leading-relaxed text-gray-800">
				<a className="text-indigo-500" href="https://github.com/refactoringui/heroicons">
					Free, open source icons
				</a>{" "}
				by{" "}
				<a className="text-indigo-500" href="https://twitter.com/steveschoger">
					Steve Schoger
					<TwitterLogo className="ml-2 -mt-1 inline-block w-5 h-5 text-twitter-blue" />
				</a>
				<br />
				<a className="text-indigo-500" href="https://github.com/codex-src/heroicons-viewer">
					Viewer
				</a>{" "}
				by{" "}
				<a className="text-indigo-500" href="https://twitter.com/username_ZAYDEK">
					Zaydek MG
					<TwitterLogo className="ml-2 -mt-1 inline-block w-5 h-5 text-twitter-blue" />
				</a>
			</h2>

			{/* Buttons */}
			{/* <div className="h-12" /> */}
			{/* <div className="flex flex-row justify-center"> */}
			{/* 	<button className="px-6 py-4 bg-white shadow" style={{ borderRadius: "0.75rem" }}> */}
			{/* 		<p className="font-semibold text-lg text-indigo-500"> */}
			{/* 			Get the icons! */}
			{/* 		</p> */}
			{/* 	</button> */}
			{/* 	<div className="w-3" /> */}
			{/* 	<button className="px-6 py-4 bg-white shadow" style={{ borderRadius: "0.75rem" }}> */}
			{/* 		<p className="font-semibold text-lg text-indigo-500"> */}
			{/* 			Contribute */}
			{/* 			<GitHubLogo className="ml-3 inline-block w-5 h-5 text-black" /> */}
			{/* 		</p> */}
			{/* 	</button> */}
			{/* </div> */}

			{/* Etc. */}
			<div className="h-12" />
			<Search value={value} setValue={setValue} solid={solid} setSolid={setSolid} />
			<IconView icons={icons} solid={solid} />

		</Container>
	)
}

export default App
