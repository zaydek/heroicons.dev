import { styled } from "./css/styled"
import { iota } from "./lib/iota"

const StyledCSSGrid = styled({
	display: "grid",
	gridTemplateColumns: "repeat(auto-fill, minmax($grid-item-size, 1fr))",
	rowGap: 20,    // Y-axis
	columnGap: 10, // X-axis
})

function GridItem() {
	return <>
		<div className="flex flex-col gap-20">
			<div className="flex justify-center align-center h-$grid-item-size w-$grid-item-size">
				<div className="h-32 w-32 rounded-1e3 bg-red"></div>
			</div>
			<div className="flex justify-center align-center h-24">
				HELLO
			</div>
		</div>
	</>
}

export function SearchBar() {
	return <>
		<div className="px-[calc($search-bar-height_/_8)] flex align-center h-$search-bar-height rounded-1e3 bg-lightgray
				[&:is(:hover,_:focus-within)]:(bg-white shadow-[0_0_0_1px_lightgray]) [&_>_*:nth-child(2)]:flex-grow-1">
			<div className="flex justify-center align-center h-75% aspect-1 rounded-1e3 bg-red [@media_(max-width:_750px)]:[display:none]">
				<div className="h-24 w-24 rounded-1e3 bg-white"></div>
			</div>
			<div className="px-16 flex align-center h-$search-bar-height" tabIndex={0}>
				<div>HELLO</div>
			</div>
			<div className="flex justify-center align-center h-75% aspect-1 rounded-1e3 bg-red [@media_(max-width:_750px)]:[display:none]">
				<div className="h-24 w-24 rounded-1e3 bg-white"></div>
			</div>
		</div>
	</>
}

export function SearchResults() {
	return <>
		<StyledCSSGrid>
			{iota(400).map(index =>
				<GridItem key={index} />
			)}
		</StyledCSSGrid>
	</>
}
