import * as Hero from "components/heroicons"
import CSSDebugger from "components/CSSDebugger"
import IconGrid from "./IconGrid" // FIXME
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

const searchInfo = [
	"adjustments",
	"annotation",
	"archive",
	"arrow-circle-down",
	"arrow-circle-left",
	"arrow-circle-right",
	"arrow-circle-up",
	"arrow-down",
	"arrow-left",
	"arrow-narrow-down",
	"arrow-narrow-left",
	"arrow-narrow-right",
	"arrow-narrow-up",
	"arrow-right",
	"arrow-up",
	"at-symbol",
	"bell",
	"book-open",
	"bookmark",
	"briefcase",
	"calendar",
	"camera",
	"cash",
	"chart-pie",
	"chat",
	"check-circle",
	"check",
	"cheveron-down",
	"cheveron-left",
	"cheveron-right",
	"cheveron-up",
	"clipboard-check",
	"clipboard-copy",
	"clipboard-list",
	"clipboard",
	"clock",
	"cloud-download",
	"cloud-upload",
	"code",
	"cog",
	"collection",
	"color-swatch",
	"credit-card",
	"currency-dollar",
	"currency-euro",
	"currency-pound",
	"currency-rupee",
	"currency-yen",
	"document-add",
	"document-download",
	"document-duplicate",
	"document-remove",
	"document",
	"dots-circle-horizontal",
	"dots-horizontal",
	"dots-vertical",
	"download",
	"duplicate",
	"emoji-happy",
	"emoji-sad",
	"exclamation-circle",
	"exclamation",
	"external-link",
	"eye",
	"filter",
	"flag",
	"folder",
	"globe-alt",
	"globe",
	"hashtag",
	"heart",
	"home",
	"inbox-in",
	"inbox",
	"information-circle",
	"light-bulb",
	"lightning-bolt",
	"link",
	"location-marker",
	"lock-closed",
	"lock-open",
	"mail-open",
	"mail",
	"menu-alt-1",
	"menu-alt-2",
	"menu-alt-3",
	"menu-alt-4",
	"menu",
	"minus-circle",
	"moon",
	"office-building",
	"paper-clip",
	"pencil-alt",
	"pencil",
	"phone-incoming",
	"phone-outgoing",
	"phone",
	"photograph",
	"plus-circle",
	"plus",
	"printer",
	"qrcode",
	"question-mark-circle",
	"receipt-refund",
	"refresh",
	"reply",
	"scale",
	"search",
	"selector",
	"share",
	"shield-check",
	"shield-exclamation",
	"sort-ascending",
	"sort-descending",
	"sparkles",
	"sun",
	"switch-horizontal",
	"switch-vertical",
	"tag",
	"template",
	"ticket",
	"translate",
	"trash",
	"trending-down",
	"trending-up",
	"upload",
	"user-add",
	"user-circle",
	"user-group",
	"user-remove",
	"user",
	"users",
	"view-boards",
	"view-list",
	"volume-off",
	"volume-up",
	"x-circle",
	"x",
	"zoom-in",
	"zoom-out",
]

const App = props => {
	const [value, setValue] = React.useState("")

	React.useEffect(() => {
		const id = setTimeout(() => {
			// ...
		}, 100)
		return () => {
			clearTimeout(id)
		}
	}, [value])

	return (
		<div className="px-6 py-24 flex flex-row justify-center bg-gray-100 min-h-full">
			<div className="w-full max-w-screen-lg">

				<h1 className="font-semibold font-poppins tracking-tight text-5xl">
					Heroicons viewer
				</h1>
				<h2 className="font-medium text-xl -tracking-px">
					MIT-licensed, <a className="text-indigo-500 hover:underline">open source icons</a> by <a className="text-indigo-500 hover:underline">Steve Schoger</a> and <a className="text-indigo-500 hover:underline">Adam Wathan</a>. <a className="text-indigo-500 hover:underline">Viewer</a> created by <a className="text-indigo-500 hover:underline">Zaydek MG</a>.{"\u00a0\u00a0"}<span className="text-emoji">👋</span>
				</h2>
				<div className="-mx-6 my-6 p-6 pb-0 sticky top-0 z-40 bg-gray-100">
					<input className="px-6 py-4 block w-full text-xl bg-white rounded-lg shadow active:shadow-outline outline-none transition duration-150 ease-in-out" type="text" placeholder="Search 140 icons…" value={value} onChange={e => setValue(e.target.value)} />
	 			</div>
				<div className="mt-6">
					<IconGrid />
				</div>

			</div>
		</div>
	)
}

export default App
