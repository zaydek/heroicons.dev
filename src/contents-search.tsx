import { useContext } from "react"
import { iota } from "./lib/iota"
import { SearchContext, SetSearchContext } from "./state"

function GridItem() {
	return <>
		<div className="flex flex-col gap-20">
			<div className="flex justify-center align-center h-$grid-item-size w-$grid-item-size">
				<div className="h-32 w-32 rounded-1e3 bg-color-red"></div>
			</div>
			<div className="flex justify-center align-center h-24">
				HELLO
			</div>
		</div>
	</>
}

export function SearchBar() {
	const { search } = useContext(SearchContext)!
	const { setSearch } = useContext(SetSearchContext)!

	return <>
		<div className="px-[calc($search-bar-height_/_8)] flex align-center h-$search-bar-height rounded-1e3 bg-color-lightgray
				[&:is(:hover,_:focus-within)]:(bg-color-white shadow-[0_0_0_1px_lightgray]) [&_>_*:nth-child(2)]:flex-grow-1">
			<div className="flex justify-center align-center h-75% aspect-1 rounded-1e3 bg-color-red [@media_(max-width:_750px)]:[display:_none]">
				<div className="h-24 w-24 rounded-1e3 bg-color-white"></div>
			</div>
			<input
				type="text"
				className="px-16 flex align-center h-$search-bar-height"
				placeholder="Search Heroicons"
				value={search}
				onChange={e => setSearch(e.currentTarget.value)}
				autoFocus
			/>
			<div className="flex justify-center align-center h-75% aspect-1 rounded-1e3 bg-color-red [@media_(max-width:_750px)]:[display:_none]">
				<div className="h-24 w-24 rounded-1e3 bg-color-white"></div>
			</div>
		</div>
	</>
}

export function SearchResults() {
	return <>
		<div className="grid [grid-template-columns:_repeat(auto-fill,_minmax($grid-item-size,_1fr))] gap-y-20 gap-x-10">
			{iota(400).map(index =>
				<GridItem key={index} />
			)}
		</div>
	</>
}
