import * as styled from "./css/bindings"

import { AnchorHTMLAttributes, HTMLAttributes, PropsWithChildren, SVGAttributes, useCallback, useContext, useEffect, useRef, useTransition } from "react"
import { AriaButton } from "./aria/aria-button"
import { cache } from "./cache"
import { DispatchProgressBarContext } from "./progress-bar"
import { SearchContext, SetSearchContext } from "./state"
import { IconsetValue } from "./types"
import { Icon } from "./lib/react/icon"
import { ArrowTopRightOnSquareIcon, FigmaIcon, GitHubIcon, LightningIcon, ScaleIcon, TwitterIcon } from "./icon-config"

function MenuTitle({ children }: PropsWithChildren) {
	return <>
		<div className="px-$sidebar-x-inset flex align-center h-36">
			<styled.TypographyAltCaps>
				{children}
			</styled.TypographyAltCaps>
		</div>
	</>
}

function MenuItem({ icon, children, ...props }: { icon: (_: SVGAttributes<SVGSVGElement>) => JSX.Element } & PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
	return <>
		<AriaButton {...props}>
			<div className="px-$sidebar-x-inset flex align-center gap-8 h-36 [&:hover,_[role=button][data-active=true]_&]:bg-color-$base-gray-color">
				<Icon className="h-20 h-20 color-$trim-color" icon={icon} />
				<styled.TypographyCaps>
					{children}
				</styled.TypographyCaps>
			</div>
		</AriaButton>
	</>
}

function NavLink({ icon, children, ...props }: { icon: (_: SVGAttributes<SVGSVGElement>) => JSX.Element } & AnchorHTMLAttributes<HTMLAnchorElement>) {
	return <>
		<a className="px-$sidebar-x-inset flex align-center gap-8 h-36 [&:hover]:bg-color-$base-gray-color" {...props}>
			<Icon className="h-20 w-20" icon={icon} />
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
				<styled.TypographySans className="[line-height]-1.6">
					<span className="inline-flex align-baseline gap-4">
						<Icon className="h-16 w-16 color-$fill-hard-color [transform]-translateY(2px)"
							icon={ScaleIcon} />
						MIT
					</span>{" "}
					open source icons by{" "}
					<span className="inline-flex align-baseline gap-4">
						@steveschoger{" "}
						<Icon className="h-16 w-16 color-$anchor-blue [transform]-translateY(2px)"
							icon={ArrowTopRightOnSquareIcon} />
					</span>
				</styled.TypographySans>
			</div>
			<div className="flex flex-col gap-20">
				<div>
					<MenuTitle>
						V2
					</MenuTitle>
					<MenuItem
						icon={LightningIcon.V2_20_solid}
						onClick={e => setIconset("v2-20-solid")}
						data-active={iconset === "v2-20-solid"}
					>
						20 PX SOLID
					</MenuItem>
					<MenuItem
						icon={LightningIcon.v2_24_outline}
						onClick={e => setIconset("v2-24-outline")}
						data-active={iconset === "v2-24-outline"}
					>
						24 PX OUTLINE
					</MenuItem>
					<MenuItem
						icon={LightningIcon.v2_24_solid}
						onClick={e => setIconset("v2-24-solid")}
						data-active={iconset === "v2-24-solid"}
					>
						24 PX SOLID
					</MenuItem>
				</div>
				<div>
					<MenuTitle>
						V1 (LEGACY)
					</MenuTitle>
					<MenuItem
						icon={LightningIcon.v1_20_solid}
						onClick={e => setIconset("v1-20-solid")}
						data-active={iconset === "v1-20-solid"}
					>
						20 PX SOLID
					</MenuItem>
					<MenuItem
						icon={LightningIcon.v1_24_outline}
						onClick={e => setIconset("v1-24-outline")}
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
					icon={GitHubIcon}
					href="https://github.com/tailwindlabs/heroicons"
					rel="noopener noreferrer"
					target="_blank"
				>
					<styled.TypographySans>
						<span className="inline-flex align-baseline gap-4">
							GitHub{" "}
							<Icon className="h-16 w-16 color-$anchor-blue [transform]-translateY(2px)"
								icon={ArrowTopRightOnSquareIcon} />
						</span>
					</styled.TypographySans>
				</NavLink>
				<NavLink
					icon={FigmaIcon}
					href="https://figma.com/community/file/1143911270904274171"
					rel="noopener noreferrer"
					target="_blank"
				>
					<styled.TypographySans>
						<span className="inline-flex align-baseline gap-4">
							Figma{" "}
							<Icon className="h-16 w-16 color-$anchor-blue [transform]-translateY(2px)"
								icon={ArrowTopRightOnSquareIcon} />
						</span>
					</styled.TypographySans>
				</NavLink>
				<NavLink
					icon={TwitterIcon}
					href={`http://twitter.com/intent/tweet?text=${encodeURI("Check out Hericons 💯\n\nThanks @steveschoger for designing Heroicons and @username_ZAYDEK for the new heroicons.dev\n\nheroicons.dev")}`}
					rel="noopener noreferrer"
					target="_blank"
				>
					<styled.TypographySans>
						<span className="inline-flex align-baseline gap-4">
							Share on Twitter{" "}
							<Icon className="h-16 w-16 color-$anchor-blue [transform]-translateY(2px)"
								icon={ArrowTopRightOnSquareIcon} />
						</span>
					</styled.TypographySans>
				</NavLink>
			</nav>
			<div className="px-$sidebar-x-inset">
				<styled.TypographySans className="[line-height]-1.6">
					{/* <span className="inline-flex align-baseline gap-4">
						Icons by @steveschoger{" "}
						<Icon className="h-16 w-16 color-$anchor-blue [transform]-translateY(2px)"
							icon={ArrowTopRightOnSquareIcon} />
					</span>
					<br /> */}
					Web app and design by{" "}
					<span className="inline-flex align-baseline gap-4">
						@username_ZAYDEK{" "}
						<Icon className="h-16 w-16 color-$anchor-blue [transform]-translateY(2px)"
							icon={ArrowTopRightOnSquareIcon} />
					</span>
				</styled.TypographySans>
			</div>
			<div className="px-$sidebar-x-inset">
				<styled.TypographySmallAltSans className="[line-height]-1.6">
					Heroicons are{" "}
					<span className="inline-flex align-baseline gap-4">
						MIT-licensed.{" "}
						<Icon className="h-16 w-16 color-$fill-color [transform]-translateY(2px)"
							icon={ScaleIcon} />
					</span>
					<br />
					You may use them for commercial and personal application without attribution.
				</styled.TypographySmallAltSans>
			</div>
		</section>
	</>
}
