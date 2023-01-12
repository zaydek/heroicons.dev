import * as styled from "./css/bindings"

import { useEffect, useState } from "react"
import { AriaButton } from "./aria/aria-button"
import { SearchBar, SearchResults } from "./contents-search"
import { Sidebar1 } from "./contents-sidebar-1"
import { Sidebar2 } from "./contents-sidebar-2"
import { ProgressBarProvider } from "./progress-bar"
import { StateProvider } from "./state"

function AppImpl() {
	const [column1Open, setColumn1Open] = useState(true)
	const [column2Open, setColumn2Open] = useState(true)

	useEffect(() => {
		document.body.setAttribute("data-column-1-open", "" + column1Open)
		document.body.setAttribute("data-column-2-open", "" + column2Open)
	}, [column1Open, column2Open])

	return <>
		<div className="fixed t-10 l-$sidebar-1-inset-x z-500 [@media_(max-width:_750px)]:[display]-none">
			<AriaButton onClick={e => setColumn1Open(curr => !curr)}>
				<styled.TypographySmallCaps className="[color]-$soft-fill-color">
					TOGGLE SIDEBAR
				</styled.TypographySmallCaps>
			</AriaButton>
		</div>
		<div className="fixed t-10 r-$sidebar-2-inset-x z-500 [@media_(max-width:_750px)]:[display]-none">
			<AriaButton onClick={e => setColumn2Open(curr => !curr)}>
				<styled.TypographySmallCaps className="[color]-$soft-fill-color">
					TOGGLE SIDEBAR
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

export function App() {
	return <>
		<ProgressBarProvider>
			<StateProvider>
				<AppImpl />
			</StateProvider>
		</ProgressBarProvider>
	</>
}
