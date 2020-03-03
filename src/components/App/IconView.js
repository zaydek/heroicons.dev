import * as Hero from "components/Heroicons"
import React from "react"
import copyToClipboard from "../../copyToClipboard"

const IconPane = ({ outline: Outline, solid: Solid, ...props }) => {
	const ref = React.useRef()

	const [text, setText] = React.useState(props.name)

	const handleClick = e => {
		const { outerHTML } = ref.current
		if (navigator.clipboard) {
			navigator.clipboard.writeText(outerHTML).then(() => {
				setText("copied!")
				setTimeout(() => {
					setText(props.name) // Reset
				}, 1e3)
			}).catch(error => {
				console.warn({ error })
			})
		} else {
			copyToClipboard(outerHTML)
			setText("copied!")
			setTimeout(() => {
				setText(props.name) // Reset
			}, 1e3)
		}
	}

	const Icon = !props.prefersSolid ? Outline : Solid
	return (
		<button className="pb-1/1 relative cursor-pointer focus:outline-none focus:shadow-outline rounded-lg trans-150" onClick={handleClick}>
			<div className="absolute inset-0">
				<div className="relative flex flex-col justify-center items-center h-full text-gray-800 hover:text-white bg-white hover:bg-indigo-500 rounded-lg shadow hover:z-30 trans-150">
					{props.buggy && (
						<div className="p-3 absolute inset-0 flex flex-row justify-end text-red-500 hover:text-white z-10 trans-150">
							<Hero.ExclamationSolidSm className="w-6 h-6" />
						</div>
					)}
					<Icon ref={ref} className="w-8 h-8" />
					<div className="mb-3 absolute x-inset-0 bottom-0">
						<p className="text-center font-semibold -text-px">
							{text}
						</p>
					</div>
				</div>
			</div>
		</button>
	)
}

const IconView = React.memo(props => (
	<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
		{props.icons.map(each => (
			<IconPane key={each.name} {...each} prefersSolid={props.solid} />
		))}
	</div>
))

export default IconView
