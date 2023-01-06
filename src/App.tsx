import { useEffect, useState } from "react"
import { SearchBar, SearchResults } from "./contents-search"
import { LayoutSidebar1 } from "./contents-sidebar-1"
import { LayoutSidebar2 } from "./contents-sidebar-2"
import { MainContainer, SearchBarContainer, SearchBarMask, Sidebar1, Sidebar2, Sidebar2Backdrop } from "./css/layout"

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
		<SearchBarContainer>
			<SearchBar />
		</SearchBarContainer>
		<SearchBarMask />
		<MainContainer tag="main">
			<SearchResults />
		</MainContainer>
		<Sidebar1 tag="aside">
			<LayoutSidebar1 />
		</Sidebar1>
		<Sidebar2 tag="aside">
			<LayoutSidebar2 />
		</Sidebar2>
		<Sidebar2Backdrop onClick={e => setColumn2Open(false)} />
	</>
}
