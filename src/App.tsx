import layout from "./css/layout.module.scss"

import { useEffect, useState } from "react"
import { SearchBar, SearchResults } from "./contents-search"
import { LayoutSidebar1 } from "./contents-sidebar-1"
import { LayoutSidebar2 } from "./contents-sidebar-2"

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
		<div className={layout.searchBarContainer}>
			<SearchBar />
		</div>
		<div className={layout.searchBarMask} />
		<main className={layout.mainContainer}>
			<SearchResults />
		</main>
		<aside className={layout.sidebar1}>
			<LayoutSidebar1 />
		</aside>
		<aside className={layout.sidebar2}>
			<LayoutSidebar2 />
		</aside>
		<div className={layout.sidebar2Backdrop} onClick={e => setColumn2Open(false)} />
	</>
}
