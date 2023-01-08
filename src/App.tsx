import * as styled from "./css/bindings"

import { useEffect, useState } from "react"
import { AriaButton } from "./aria/aria-button"
import { SearchBar, SearchResults } from "./contents-search"
import { Sidebar1Contents as Sidebar1 } from "./contents-sidebar-1"
import { Sidebar2Contents as Sidebar2 } from "./contents-sidebar-2"

export function App() {
	const [column1Open, setColumn1Open] = useState(true)
	const [column2Open, setColumn2Open] = useState(true)

	//// useEffect(() => {
	//// 	window.addEventListener("keydown", e => {
	//// 		if (window.innerWidth > 750) {
	//// 			if (isMac()) {
	//// 				if (e.metaKey && e.key === "[") {
	//// 					setColumn1Open(curr => !curr)
	//// 				} else if (e.metaKey && e.key === "]") {
	//// 					setColumn2Open(curr => !curr)
	//// 				}
	//// 			} else {
	//// 				if (e.ctrlKey && e.key === "[") {
	//// 					setColumn1Open(curr => !curr)
	//// 				} else if (e.ctrlKey && e.key === "]") {
	//// 					setColumn2Open(curr => !curr)
	//// 				}
	//// 			}
	//// 		}
	//// 	})
	//// }, [])

	useEffect(() => {
		document.body.setAttribute("data-column-1-open", "" + column1Open)
		document.body.setAttribute("data-column-2-open", "" + column2Open)
	}, [column1Open, column2Open])

	return <>
		<div className="fixed t-10 l-$sidebar-1-inset-x z-500 [@media_(max-width:_750px)]:[display]-none">
			<AriaButton onClick={e => setColumn1Open(curr => !curr)}>
				<styled.TypographySmallCaps className="color-$soft-fill-color">
					TOGGLE SIDEBAR
					{/* CLICK OR{" "}
					<styled.TypographySmallCode tag="span" className="py-2 px-4 rounded-4 shadow-inset_0_0_0_1px_$soft-fill-color">
						{isMac() ? "CMD" : "CTRL"}+[
					</styled.TypographySmallCode>{" "}
					TO TOGGLE */}
				</styled.TypographySmallCaps>
			</AriaButton>
		</div>
		<div className="fixed t-10 r-$sidebar-2-inset-x z-500 [@media_(max-width:_750px)]:[display]-none">
			<AriaButton onClick={e => setColumn2Open(curr => !curr)}>
				<styled.TypographySmallCaps className="color-$soft-fill-color">
					TOGGLE SIDEBAR
					{/* CLICK OR{" "}
					<styled.TypographySmallCode tag="span" className="py-2 px-4 rounded-4 shadow-inset_0_0_0_1px_$soft-fill-color">
						{isMac() ? "CMD" : "CTRL"}+]
					</styled.TypographySmallCode>{" "}
					TO TOGGLE */}
				</styled.TypographySmallCaps>
			</AriaButton>
		</div>

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
