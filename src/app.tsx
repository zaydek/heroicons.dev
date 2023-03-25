import * as styled from "./css/bindings"

import { useContext } from "react"
import { AriaButton } from "./aria/aria-button"
import { SearchBar, SearchResults } from "./contents-search"
import { Sidebar1 } from "./contents-sidebar-1"
import { Sidebar2 } from "./contents-sidebar-2"
import { SidebarContext } from "./providers/sidebars"

export function App() {
	const { setSidebar1, setSidebar2 } = useContext(SidebarContext)!

	return <>
		<div className="fixed t-10 l-$sidebar-1-inset-x z-500 [@media_(max-width:_750px)]:[display]-none">
			<AriaButton onClick={e => setSidebar1(curr => !curr)}>
				<styled.TypographySmallCaps className="[color]-$soft-fill-color">
					TOGGLE SIDEBAR
				</styled.TypographySmallCaps>
			</AriaButton>
		</div>
		<div className="fixed t-10 r-$sidebar-2-inset-x z-500 [@media_(max-width:_750px)]:[display]-none">
			<AriaButton onClick={e => setSidebar2(curr => !curr)}>
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
		<styled.Sidebar2Backdrop onClick={e => setSidebar2(false)} />
	</>
}
