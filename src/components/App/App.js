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

	React.useLayoutEffect(() => {
		setIcons(originalIcons)
	}, [])

	// React.useEffect(() => {
	// 	// const id = setTimeout(() => {
	// 	//
	// 	// }, 100)
	// 	// return () => {
	// 	// 	clearTimeout(id)
	// 	// }
	// }, [value])

	return (
		<div className="px-6 py-24 flex flex-row justify-center bg-gray-100 min-h-full">
			<div className="w-full max-w-screen-lg">

				<h1 className="font-semibold font-poppins tracking-tight text-5xl">
					Heroicons viewer
				</h1>
				<h2 className="font-medium text-xl -tracking-px">
					MIT-licensed,{" "}
					<a className="text-indigo-500 hover:underline" href="https://github.com/refactoringui/heroicons">open source icons</a> by{" "}
					<a className="text-indigo-500 hover:underline" href="https://twitter.com/steveschoger">Steve Schoger</a> and{" "}
					<a className="text-indigo-500 hover:underline" href="https://twitter.com/adamwathan">Adam Wathan</a>. Viewer created by{" "}
					<a className="text-indigo-500 hover:underline" href="https://twitter.com/username_ZAYDEK">Zaydek MG</a>.{"\u00a0\u00a0"}<span className="text-emoji">👋</span>
				</h2>
				<div className="-mx-6 my-6 p-6 pb-0 sticky top-0 z-40 bg-gray-100">
					<input className="px-6 py-4 block w-full text-xl bg-white rounded-lg shadow active:shadow-outline outline-none transition duration-150 ease-in-out" type="text" placeholder="Search 140 icons…" value={value} onChange={e => setValue(e.target.value)} />
	 			</div>
				<div className="mt-6">
					<IconGrid icons={icons} />
				</div>

			</div>
		</div>
	)
}

export default App
