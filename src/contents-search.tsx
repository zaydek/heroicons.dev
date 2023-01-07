import * as styled from "./css/bindings"

import { PropsWithChildren, Suspense, useContext, useEffect } from "react"
import { iota } from "./lib/iota"
import { DispatchProgressBarContext } from "./progress-bar"
import { SearchContext, SetSearchConfigContext, SetSearchContext } from "./state"

export function SearchBar() {
	const { search } = useContext(SearchContext)!
	const { setSearch } = useContext(SetSearchContext)!

	return <>
		<div
			className="px-calc($search-bar-height_/_8) flex align-center h-$search-bar-height rounded-1e3 bg-color-$base-gray-color
				[&:is(:hover,_:focus)]:(bg-color-$base-color shadow-0_0_0_1px_$hairline-color) [&_>_*:nth-child(2)]:flex-grow-1"
		>
			<div className="flex justify-center align-center h-75% aspect-1 rounded-1e3 bg-color-red [@media_(max-width:_750px)]:[display]-none">
				<div className="h-24 w-24 rounded-1e3 bg-color-white"></div>
			</div>
			<styled.TypographySearchBar
				tag="input"
				type="text"
				className="px-16 flex align-center h-$search-bar-height color-$fill-color
					[&::placeholder]:color-$soft-fill-color"
				placeholder="Search Heroicons"
				value={search}
				onChange={e => setSearch(e.currentTarget.value)}
				autoFocus
			/>
			<div className="flex justify-center align-center h-75% aspect-1 rounded-1e3 bg-color-red [@media_(max-width:_750px)]:[display]-none">
				<div className="h-24 w-24 rounded-1e3 bg-color-white"></div>
			</div>
		</div>
	</>
}

function GridScaffold({ children }: PropsWithChildren) {
	return <>
		<div className="p-$inset-y p-$inset-x grid grid-cols-repeat(auto-fill,_minmax($grid-item-size,_1fr)) gap-y-20 gap-x-10">
			{children}
		</div>
	</>
}

const placeholderIconStyles = {
	width: "var(--grid-item-icon-size)",
	height: "var(--grid-item-icon-size)",
}

const iconStyles = {
	width: "var(--grid-item-icon-size)",
	height: "var(--grid-item-icon-size)",
	strokeWidth: "var(--grid-item-icon-stroke-width)",
}

function SkeletonFallback() {
	const { searchResults } = useContext(SearchContext)!
	const { start, end } = useContext(DispatchProgressBarContext)!

	useEffect(() => {
		start()
		return () => {
			end()
		}
	}, [end, start])

	return <>
		<GridScaffold>
			{iota(searchResults.length).map(index =>
				<div key={index} className="flex flex-col gap-8">
					<div className="flex justify-center align-center h-$grid-item-size w-$grid-item-size">
						<div className="h-32 w-32 rounded-1e3 bg-color-$placeholder-color" style={placeholderIconStyles} />
					</div>
					<div className="flex justify-center align-center h-24">
						<div className="h-6 w-67% rounded-1e3 bg-color-$placeholder-color"></div>
					</div>
				</div>
			)}
		</GridScaffold>
	</>
}

function Highlight({ children, indexes }: PropsWithChildren<{ indexes: readonly [number, number] | null }>) {
	const name = children as string

	if (indexes === null) {
		return <>{name}</>
	} else {
		const parts = [name.slice(0, indexes[0]), name.slice(indexes[0], indexes[1]), name.slice(indexes[1])]
		return <>
			{parts[0]}
			<span className="color-$hard-fill-color bg-color-$highlight-color">
				{parts[1]}
			</span>
			{parts[2]}
		</>
	}
}

export function SearchResults() {
	const { Icon, searchResults } = useContext(SearchContext)!
	const { setSelectedName, setSelectedSvgElement } = useContext(SetSearchConfigContext)!

	return <>
		<Suspense fallback={<SkeletonFallback />}>
			<GridScaffold>
				{searchResults.map(({ name, indexes }) =>
					<div key={name} className="flex flex-col gap-8">
						{/* Don't use <AriaButton> here (create fewer DOM elements) */}
						<button className="flex justify-center align-center h-$grid-item-size w-$grid-item-size " onClick={e => {
							setSelectedName(name)
							setSelectedSvgElement(e.currentTarget.querySelector("svg"))
						}}>
							<Icon className="h-32 w-32 color-$fill-color" style={iconStyles} name={name} />
						</button>
						<div className="flex justify-center align-center h-24">
							<styled.TypographySearchResult className="color-$soft-fill-color ellipsis [-webkit-user-select]-all [user-select]-all">
								<Highlight indexes={indexes}>
									{name}
								</Highlight>
							</styled.TypographySearchResult>
						</div>
					</div>
				)}
			</GridScaffold>
		</Suspense>
	</>
}
