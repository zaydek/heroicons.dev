import { createContext, Dispatch, PropsWithChildren, SetStateAction, useEffect, useState } from "react"

export const SidebarContext = createContext<{
	sidebar1:    boolean
	setSidebar1: Dispatch<SetStateAction<boolean>>
	sidebar2:    boolean
	setSidebar2: Dispatch<SetStateAction<boolean>>
} | null>(null)

export function SidebarProvider({ children }: PropsWithChildren) {
	const [sidebar1, setSidebar1] = useState(true)
	const [sidebar2, setSidebar2] = useState(true)

	useEffect(() => {
		document.body.setAttribute("data-column-1-open", "" + sidebar1)
		document.body.setAttribute("data-column-2-open", "" + sidebar2)
	}, [sidebar1, sidebar2])

	return <>
		<SidebarContext.Provider
			value={{
				sidebar1,
				setSidebar1,
				sidebar2,
				setSidebar2,
			}}
		>
			{children}
		</SidebarContext.Provider>
	</>
}
