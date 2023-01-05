import { useEffect, useState } from "react"
import { SearchBar, SearchResults } from "./contents-search"
import { LayoutSidebar1 } from "./contents-sidebar-1"
import { LayoutSidebar2 } from "./contents-sidebar-2"
import { styled } from "./css/styled"

const StyledSearchBarContainer = styled({
	position: "fixed",
	inset: [
		"$inset-y",
		"calc($sidebar-2-width + $inset-x)",
		"auto",
		"calc($sidebar-1-width + $inset-x)",
	],
	zIndex: 100,
	"[data-column-1-open=false] &": { left:  "$inset-x" },
	"[data-column-2-open=false] &": { right: "$inset-x" },
	"@media (max-width: 1500px)": {
		right: "$inset-x",
		"@media (max-width: 750px)": {
			left: "$inset-x",
		},
	},
})
const StyledSearchBarMask = styled({
	position: "fixed",
	inset: [
		0,
		"$sidebar-2-width",
		"auto",
		"$sidebar-1-width",
	],
	zIndex: StyledSearchBarContainer.style.zIndex - 10,
	height: "calc($inset-y + $search-bar-height + $inset-y / 2)",
	backgroundImage: "linear-gradient(white calc($inset-y + $search-bar-height), red)",
	"[data-column-1-open=false] &": { left:  0 },
	"[data-column-2-open=false] &": { right: 0 },
	"@media (max-width: 1500px)": {
		right: 0,
		"@media (max-width: 750px)": {
			left: 0,
		},
	},
})
const StyledMainContainer = styled({
	position: "absolute",
	inset: [
		"calc($inset-y + $search-bar-height + $inset-y)",
		"$sidebar-2-width",
		"auto",
		"$sidebar-1-width",
	],
	// No z-index (only use z-index for fixed elements)
	padding: ["$inset-y", "$inset-x"],
	"[data-column-1-open=false] &": { left:  0 },
	"[data-column-2-open=false] &": { right: 0 },
	"@media (max-width: 1500px)": {
		right: 0,
		"@media (max-width: 750px)": {
			left: 0,
		},
	},
})
const StyledSidebar1 = styled({
	position: "fixed",
	inset: [ // E.g. inset-l-0
		0,
		"auto",
		0,
		0,
	],
	zIndex: 200,
	width: "$sidebar-1-width",
	backgroundColor: "white",
	boxShadow: "1px 0 0 0 gray",
	transition: "300ms transform ease",
	"[data-column-1-open=false] &":	{ transform: "translateX(-100%)" },
	"@media (max-width: 750px)":    { transform: "translateX(-100%)" },
})
const StyledSidebar2 = styled({
	position: "fixed",
	inset: [ // E.g. inset-r-0
		0,
		0,
		0,
		"auto",
	],
	zIndex: 300,
	width: "$sidebar-2-width",
	backgroundColor: "white",
	boxShadow: "-1px 0 0 0 gray",
	transition: "300ms transform ease",
	"[data-column-2-open=false] &": { transform: "translateX(100%)" },
	"@media (max-width: 750px)":    { transform: "translateX(100%)" },
})
const StyledSidebar2Backdrop = styled({
	position: "fixed",
	inset: 0,
	zIndex: StyledSidebar2.style.zIndex - 10,
	backgroundColor: "hsl(0, 0%, 0%, 0.5)",
	transition: "opacity 300ms ease",
	pointerEvents: "auto",
	"[data-column-2-open=false] &":                   { opacity: 0, pointerEvents: "none" },
	"@media (max-width: 750px), (min-width: 1500px)": { opacity: 0, pointerEvents: "none" },
})

export function App() {
	const [column1Open, setColumn1Open] = useState(true)
	const [column2Open, setColumn2Open] = useState(true)

	useEffect(() => {
		window.addEventListener("keydown", e => {
			if (window.innerWidth > 750) {
				if (e.key === "1") {
					setColumn1Open(curr => !curr)
				} else if (e.key === "2") {
					setColumn2Open(curr => !curr)
				}
			}
		})
	}, [])

	useEffect(() => {
		document.body.setAttribute("data-column-1-open", "" + column1Open)
		document.body.setAttribute("data-column-2-open", "" + column2Open)
	}, [column1Open, column2Open])

	return <>
		<StyledSearchBarContainer>
			<SearchBar />
		</StyledSearchBarContainer>
		<StyledSearchBarMask />
		<StyledMainContainer tag="main">
			<SearchResults />
		</StyledMainContainer>
		<StyledSidebar1 tag="aside">
			<LayoutSidebar1 />
		</StyledSidebar1>
		<StyledSidebar2 tag="aside">
			<LayoutSidebar2 />
		</StyledSidebar2>
		<StyledSidebar2Backdrop onClick={e => setColumn2Open(false)} />
	</>
}
