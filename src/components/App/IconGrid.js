import * as Hero from "components/Heroicons"
import copyToClipboard from "./helpers/copyToClipboard"
import React from "react"

const IconSurface = ({ outline: Outline, solid: Solid, ...props }) => {
	const ref = React.useRef()

	const [text, setText] = React.useState(props.name)

	const handleClick = async e => {
		const { outerHTML } = ref.current
		if (!navigator.clipboard) {
			copyToClipboard(outerHTML)
			setText("copied!")
			setTimeout(() => {
				setText(props.name)
			}, 1e3)
		} else {
			try {
				await navigator.clipboard.writeText(outerHTML)
			} catch (error) {
				console.warn({ error })
				return // Eager return
			}
		}
		setText("copied!")
		setTimeout(() => {
			setText(props.name)
		}, 1e3)
	}

	const Icon = !props.prefersSolid ? Outline : Solid
	return (
		<div className="pb-1/1 relative">
			<div className="absolute inset-0">
				{/* NOTE: Use w/h-full because of button */}
				<button className="relative flex flex-row justify-center items-center w-full h-full text-gray-800 hover:text-white bg-white hover:bg-indigo-500 rounded-lg-xl shadow trans-150" onClick={handleClick}>
					{(props.prefersSolid && props.buggy) && (
						<div className="p-3 absolute inset-0 flex flex-row justify-end text-red-500 hover:text-white z-10 trans-150">
							<Hero.ExclamationSolidSm className="w-6 h-6" />
						</div>
					)}
					<Icon ref={ref} className="w-10 h-10" />
					<div className="my-4 absolute x-inset-0 bottom-0">
						<p className="text-center font-semibold -text-px tracking-wide">
							{text}
						</p>
					</div>
				</button>
			</div>
		</div>
	)
}

const IconGrid = React.memo(props => (
	<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
		{props.icons.map(each => (
			<IconSurface
				key={each.name}
				prefersSolid={props.solid}
				{...each}
			/>
		))}
	</div>
))

export default IconGrid
