import { HTMLAttributes, PropsWithChildren, useCallback, useContext, useEffect, useRef, useTransition } from "react"
import { AriaButton } from "./aria/aria-button"
import { cache } from "./cache"
import { DispatchProgressBarContext } from "./progress-bar"
import { SearchContext, SetSearchContext } from "./state"
import { IconsetValue } from "./types"

function MenuTitle({ children }: PropsWithChildren) {
	return <>
		<div className="px-16 flex align-center h-32">
			<div>
				{children}
			</div>
		</div>
	</>
}

function MenuItem({ children, ...props }: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
	return <>
		<AriaButton {...props}>
			<div className="px-16 flex align-center gap-16 h-32 [&:hover]:bg-color-orange">
				<div className="h-24 w-24 rounded-1e3 bg-color-red"></div>
				<div>
					{children}
				</div>
			</div>
		</AriaButton>
	</>
}

function NavItem({ children }: PropsWithChildren) {
	return <>
		<div className="px-16 flex align-center gap-16 h-32 [&:hover]:bg-color-orange">
			<div className="h-24 w-24 rounded-1e3 bg-color-red"></div>
			<div>
				{children}
			</div>
		</div>
	</>
}

export function LayoutSidebar1() {
	const { start, end } = useContext(DispatchProgressBarContext)!
	//// const search = useContext(SearchContext)!
	const { setIconset: _setIconset } = useContext(SetSearchContext)!

	const [pending, startTransition] = useTransition()

	const setIconset = useCallback((iconset: IconsetValue) => {
		const transition = cache.has(iconset)
			? (fn: () => void) => fn()
			: startTransition
		transition(() => {
			_setIconset(iconset)
		})
	}, [_setIconset])

	const onceRef = useRef(false)
	useEffect(() => {
		if (!onceRef.current) {
			onceRef.current = true
			return
		}
		if (pending) {
			start()
		} else {
			end()
		}
	}, [end, pending, start])

	return <>
		<section className="absolute inset-t-0 py-48">
			<div className="px-16 flex flex-col gap-10 h-[calc($inset-y_+_$search-bar-height_+_$inset-y)]">
				<div>HELLO</div>
				<div>HELLO</div>
			</div>
			<div className="flex flex-col gap-20">
				<div>
					<MenuTitle>
						V2
					</MenuTitle>
					<MenuItem onClick={e => setIconset("v2-20-solid")}>
						20 PX SOLID
					</MenuItem>
					<MenuItem onClick={e => setIconset("v2-24-outline")}>
						24 PX OUTLINE
					</MenuItem>
					<MenuItem onClick={e => setIconset("v2-24-solid")}>
						24 PX SOLID
					</MenuItem>
				</div>
				<div>
					<MenuTitle>
						V1 (LEGACY)
					</MenuTitle>
					<MenuItem onClick={e => setIconset("v1-20-solid")}>
						20 PX SOLID
					</MenuItem>
					<MenuItem onClick={e => setIconset("v1-24-outline")}>
						24 PX OUTLINE
					</MenuItem>
				</div>
			</div>
		</section>
		<section className="absolute inset-b-0 py-32 flex flex-col gap-20 bg-color-white shadow-[0_-1px_0_0_gray]">
			<nav>
				<NavItem>
					GitHub
				</NavItem>
				<NavItem>
					Figma
				</NavItem>
				<NavItem>
					Share on Twitter
				</NavItem>
			</nav>
			<div></div>
			<div className="px-16">
				Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
			</div>
			<div className="px-16">
				<div>
					Heroicons are MIT-licensed.{" "}
					You may use them for commercial and personal application without attribution.
				</div>
			</div>
		</section>
	</>
}
