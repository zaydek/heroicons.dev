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
				<button className="flex flex-row justify-center items-center w-full h-full text-gray-800 dark:text-white hover:text-white bg-white dark:bg-gray-800 hover:bg-indigo-500 rounded-lg-xl focus:outline-none shadow focus:shadow-outline trans-150" onPointerDown={e => e.preventDefault()} onClick={handleClick}>
					<Icon ref={ref} className="w-8 h-8" />
					<div className="m-3 absolute inset-x-0 bottom-0">
						<p className="text-center font-ibm-plex-mono font-semibold text-sm leading-snug">
							{text}
						</p>
					</div>
				</button>
			</div>
		</div>
	)
}

const IconGrid = React.memo(props => (
	<div style={{ minHeight: "calc(100vh - 10rem - 5.5rem - 1.5rem)" /* py-40 - <Search> - h-6 */ }}>
		<div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
			{props.icons.map(each => (
				<IconSurface
					key={each.name}
					prefersSolid={props.solid}
					{...each}
				/>
			))}
		</div>
	</div>
))

export default IconGrid
