import * as styled from "./css/bindings"

import { useEffect, useState } from "react"
import { SearchBar, SearchResults } from "./contents-search"
import { Sidebar1Contents as Sidebar1 } from "./contents-sidebar-1"
import { Sidebar2Contents as Sidebar2 } from "./contents-sidebar-2"

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
		<styled.SearchBarContainer>
			<SearchBar />
		</styled.SearchBarContainer>
		<styled.SearchBarMask />
		<styled.MainContainer tag="main">
			<SearchResults />
		</styled.MainContainer>
		<styled.Sidebar1 tag="aside">
			<Sidebar1 />
		</styled.Sidebar1>
		<styled.Sidebar2 tag="aside">
			<Sidebar2 />
		</styled.Sidebar2>
		<styled.Sidebar2Backdrop onClick={e => setColumn2Open(false)} />
	</>
}
