import * as styled from "./css/bindings"

import { AnchorHTMLAttributes, HTMLAttributes, PropsWithChildren, useCallback, useContext, useEffect, useRef, useTransition } from "react"
import { AriaButton } from "./aria/aria-button"
import { cache } from "./cache"
import { DispatchProgressBarContext } from "./progress-bar"
import { SearchContext, SetSearchContext } from "./state"
import { IconsetValue } from "./types"

function MenuTitle({ children }: PropsWithChildren) {
	return <>
		<div className="px-$sidebar-x-inset flex align-center h-32">
			<styled.TypographyAltCaps>
				{children}
			</styled.TypographyAltCaps>
		</div>
	</>
}

function MenuItem({ children, ...props }: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
	return <>
		<AriaButton {...props}>
			<div className="px-$sidebar-x-inset flex align-center gap-8 h-32 [&:hover,_[role=button][data-active=true]_&]:bg-color-$base-gray-color">
				<div className="h-16 w-16 rounded-1e3 bg-color-$trim-color"></div>
				<styled.TypographyCaps>
					{children}
				</styled.TypographyCaps>
			</div>
		</AriaButton>
	</>
}

// TODO
//// function NavLink({ icon, children, ...props }: { icon?: (_: HTMLAttributes<SVGSVGElement>) => JSX.Element } & HTMLAttributes<HTMLAnchorElement>) {
function NavLink({ children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) {
	return <>
		<a className="px-$sidebar-x-inset flex align-center gap-8 h-32 [&:hover]:bg-color-$base-gray-color" {...props}>
			<div className="h-16 w-16 rounded-1e3 bg-color-$trim-color"></div>
			{/* <styled.TypographySans>
				{children}
			</styled.TypographySans> */}
			{children}
		</a>
	</>
}

export function Sidebar1Contents() {
	const { iconset } = useContext(SearchContext)!
	const { start, end } = useContext(DispatchProgressBarContext)!
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
		<section className="absolute inset-t-0 py-$sidebar-y-inset">
			<div className="px-$sidebar-x-inset flex flex-col gap-20 h-[calc($inset-y_+_$search-bar-height)]">
				<div className="flex align-center gap-8">
					<div className="h-24 w-24 rounded-1e3 bg-color-orange"></div>
					<div className="h-16 w-96 rounded-1e3 bg-color-orange"></div>
				</div>
				<styled.TypographySans>
					<span className="inline-flex align-baseline gap-4">
						<div className="h-16 w-16 rounded-1e3 bg-color-orange [transform:_translateY(3px)]"></div>{" "}
						MIT
					</span>{" "}
					open source icons by{" "}
					<span className="inline-flex align-baseline gap-4">
						@steveschoger{" "}
						<div className="h-16 w-16 rounded-1e3 bg-color-orange [transform:_translateY(3px)]"></div>
					</span>
				</styled.TypographySans>
			</div>
			<div className="flex flex-col gap-20">
				<div>
					<MenuTitle>
						V2
					</MenuTitle>
					<MenuItem onClick={e => setIconset("v2-20-solid")}
						data-active={iconset === "v2-20-solid"}
					>
						20 PX SOLID
					</MenuItem>
					<MenuItem onClick={e => setIconset("v2-24-outline")}
						data-active={iconset === "v2-24-outline"}
					>
						24 PX OUTLINE
					</MenuItem>
					<MenuItem onClick={e => setIconset("v2-24-solid")}
						data-active={iconset === "v2-24-solid"}
					>
						24 PX SOLID
					</MenuItem>
				</div>
				<div>
					<MenuTitle>
						V1 (LEGACY)
					</MenuTitle>
					<MenuItem onClick={e => setIconset("v1-20-solid")}
						data-active={iconset === "v1-20-solid"}
					>
						20 PX SOLID
					</MenuItem>
					<MenuItem onClick={e => setIconset("v1-24-outline")}
						data-active={iconset === "v1-24-outline"}
					>
						24 PX OUTLINE
					</MenuItem>
				</div>
			</div>
		</section>
		<section className="absolute inset-b-0 py-$sidebar-y-inset flex flex-col gap-20 bg-$base-color shadow-[0_-1px_0_0_$hairline-color]">
			<nav>
				<NavLink
					href="https://github.com/tailwindlabs/heroicons"
					rel="noopener noreferrer"
					target="_blank"
				>
					<styled.TypographySans>
						<span className="inline-flex align-baseline gap-4">
							GitHub{" "}
							<div className="h-16 w-16 rounded-1e3 bg-color-orange [transform:_translateY(3px)]"></div>
						</span>
					</styled.TypographySans>
				</NavLink>
				<NavLink
					href="https://www.figma.com/community/file/1143911270904274171"
					rel="noopener noreferrer"
					target="_blank"
				>
					<styled.TypographySans>
						<span className="inline-flex align-baseline gap-4">
							Figma{" "}
							<div className="h-16 w-16 rounded-1e3 bg-color-orange [transform:_translateY(3px)]"></div>
						</span>
					</styled.TypographySans>
				</NavLink>
				<NavLink
					href={`http://twitter.com/intent/tweet?text=${encodeURI("Check out Hericons 💯\n\nThanks @steveschoger for designing Heroicons and @username_ZAYDEK for the new heroicons.dev\n\nheroicons.dev")}`}
					rel="noopener noreferrer"
					target="_blank"
				>
					<styled.TypographySans>
						<span className="inline-flex align-baseline gap-4">
							Share on Twitter{" "}
							<div className="h-16 w-16 rounded-1e3 bg-color-orange [transform:_translateY(3px)]"></div>
						</span>
					</styled.TypographySans>
				</NavLink>
			</nav>
			<div className="px-$sidebar-x-inset">
				<styled.TypographySans>
					{/* <span className="inline-flex align-baseline gap-4">
						Icons by @steveschoger{" "}
						<div className="h-16 w-16 rounded-1e3 bg-color-orange [transform:_translateY(3px)]"></div>
					</span>
					<br /> */}
					Site by{" "}
					<span className="inline-flex align-baseline gap-4">
						@username_ZAYDEK{" "}
						<div className="h-16 w-16 rounded-1e3 bg-color-orange [transform:_translateY(3px)]"></div>
					</span>
				</styled.TypographySans>
			</div>
			<div className="px-$sidebar-x-inset">
				<styled.TypographyLegalese>
					Heroicons are{" "}
					<span className="inline-flex align-baseline gap-4">
						MIT-licensed.{" "}
						<div className="h-16 w-16 rounded-1e3 bg-color-orange [transform:_translateY(3px)]"></div>
					</span>{" "}
					You may use them for commercial and personal application without attribution.
				</styled.TypographyLegalese>
			</div>
		</section>
	</>
}
