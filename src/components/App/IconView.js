import * as Hero from "components/heroicons"
import React from "react"

const IconPane = ({ outline: Outline, /* solid: Solid, */ text: originalText, ...props }) => {
	const ref = React.useRef()

	const [text, setText] = React.useState(originalText)

	const handleClick = e => {
		const { outerHTML } = ref.current
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
					<Outline ref={ref} className="p-px w-8 h-8" />
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

const IconView = React.memo(props => (
	<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
		{props.icons.map(each => (
			<IconPane key={each.name} outline={each.outline} solid={each.solid} text={each.name} />
		))}
	</div>
))

export default IconView
