import * as Hero from "components/heroicons"
import IconGrid from "./IconGrid" // FIXME
import originalIcons from "./originalIcons" // FIXME
import React from "react"

const IconPane = ({ outline_md: Icon, /* solid_sm: B, */ text: originalText, ...props }) => {
	const ref = React.useRef()

	const [text, setText] = React.useState(originalText)

	const handleClick = e => {
		const { outerHTML }= ref.current
		navigator.clipboard.writeText(outerHTML).then(() => {
			setText("copied!")
			setTimeout(() => {
				setText(originalText)
			}, 1e3)
		}, () => {
			// console.log()
		})
	}

	return (
		<div className="relative" style={{ paddingBottom: "100%" }} onClick={handleClick}>
			<div className="absolute inset-0">
				<div className="relative flex flex-col justify-center items-center h-full text-gray-800 hover:text-white bg-white hover:bg-indigo-500 rounded-lg shadow hover:z-30 transition duration-150 ease-in-out">
					<Icon ref={ref} className="p-px w-8 h-8" />
					<div className="p-4 absolute x-inset-0 bottom-0">
						<p className="whitespace-pre text-center font-semibold text-sm">
							{text}
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

const App = props => {
	const [icons, setIcons] = React.useState([])
	const [value, setValue] = React.useState("")

	React.useEffect(() => {
		const filteredIcons = originalIcons.filter(each => each.name.includes(value))
		setIcons(filteredIcons)

		// const id = setTimeout(() => {
		//
		// }, 100)
		// return () => {
		// 	clearTimeout(id)
		// }
	}, [value])

	return (
		<div className="px-6 py-24 flex flex-row justify-center bg-gray-100 min-h-full">
			<div className="w-full max-w-screen-lg">

				<h1 className="text-center font-bold font-sans-round tracking-tighter text-5xl">
					Heroicons viewer
				</h1>
				<h2 className="text-center font-medium text-xl -tracking-px">
					<a className="text-indigo-500 hover:underline" href="https://github.com/refactoringui/heroicons">Open source icons</a> by{" "}
					<a className="text-indigo-500 hover:underline" href="https://twitter.com/steveschoger">Steve S<span className="sm:hidden">.</span><span className="hidden sm:inline">choger</span></a> and{" "}
					<a className="text-indigo-500 hover:underline" href="https://twitter.com/adamwathan">Adam W<span className="sm:hidden">.</span><span className="hidden sm:inline">athan</span></a><br />
					Viewer by{" "}
					<a className="text-indigo-500 hover:underline" href="https://twitter.com/username_ZAYDEK">Zaydek M<span className="sm:hidden">.</span><span className="hidden sm:inline">ichels-</span>G<span className="sm:hidden">.</span><span className="hidden sm:inline">ualtieri</span></a>
				</h2>

				<div className="-mx-6 mt-12 mb-6 p-6 pb-0 sticky top-0 bg-gray-100 z-40">
					<div className="relative px-6 py-4 flex flex-row items-center">
						<Hero.Search_md className="mr-4 w-6 h-6 text-gray-500 z-10 pointer-events-none" />
						<input className="pl-16 absolute inset-0 w-full h-full text-xl bg-white rounded-lg outline-none shadow-hero focus:shadow-outline transition duration-150 ease-in-out" type="text" placeholder="Search 140 icons…" value={value} onChange={e => setValue(e.target.value)} />
					</div>
	 			</div>
				<div className="mt-6">
					<IconGrid icons={icons} />
				</div>

			</div>
		</div>
	)
}

export default App
