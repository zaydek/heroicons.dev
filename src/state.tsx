// Only import types here
import type { manifest as manifestV1 } from "./data/manifest@1.0.6"
import type { manifest as manifestV2 } from "./data/manifest@2.0.13"

import { createContext, Dispatch, LazyExoticComponent, PropsWithChildren, SetStateAction, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react"
import { stringifySvgElement } from "../scripts/stringify-svg-element"
import { cache } from "./cache"
import { ICON_SIZE_MAX, ICON_SIZE_MIN, ICON_STROKE_WIDTH_MAX, ICON_STROKE_WIDTH_MIN, INITIAL_ICONSET, INITIAL_ICON_SIZE, INITIAL_ICON_STROKE_WIDTH } from "./constants"
import { toTitleCase } from "./lib/cases"
import { detab, tab } from "./lib/format"
import { round } from "./lib/precision"
import { searchParams } from "./lib/search-params"
import { CopyAs, CopyAsValue, Frameworks, FrameworkValue, Iconsets, IconsetValue } from "./types"

export const SearchConfigContext =
	createContext<{
		size:                  number
		strokeWidth:           number
		selectedName:          string
		selectedSvgElement:    SVGSVGElement | null
		copyAs:                CopyAsValue
		strictJsx:             boolean
		exportComponent:       boolean
		typescript:            boolean
		addImportStatement:    boolean
		framework:             FrameworkValue
		clipboard:             string // Computed
	} | null>(null)
export const SetSearchConfigContext =
	createContext<{
		setSize:               Dispatch<SetStateAction<number>>
		setStrokeWidth:        Dispatch<SetStateAction<number>>
		setSelectedName:       Dispatch<SetStateAction<string>>
		setSelectedSvgElement: Dispatch<SetStateAction<SVGSVGElement | null>>
		setCopyAs:             Dispatch<SetStateAction<CopyAsValue>>
		setStrictJsx:          Dispatch<SetStateAction<boolean>>
		setExportComponent:    Dispatch<SetStateAction<boolean>>
		setTypescript:         Dispatch<SetStateAction<boolean>>
		setAddImportStatement: Dispatch<SetStateAction<boolean>>
		setFramework:          Dispatch<SetStateAction<FrameworkValue>>
		resetAll:              () => void
		resetClipboard:        () => void
	} | null>(null)
export const SearchContext =
	createContext<{
		iconset:               IconsetValue
		manifest:              typeof manifestV1 | typeof manifestV2 // Computed
		Icon:                  LazyExoticComponent<any>              // Computed
		search:                string
		searchResults:         { name: string, indexes: readonly [number, number] | null }[] // Computed
	} | null>(null)
export const SetSearchContext =
	createContext<{
		setIconset:            Dispatch<SetStateAction<IconsetValue>>
		setSearch:             Dispatch<SetStateAction<string>>
		resetAll:              () => void
	} | null>(null)

function isLower(char: string) { return char >= "a" && char <= "z" }

function searchImpl(str: string, substr: string) {
	const index = str.indexOf(substr)
	if (index === -1 || (index > 0 && !isLower(str[index - 1]))) { return null }
	return [index, index + substr.length] as const
}

export function StateProvider({ children }: PropsWithChildren) {
	const [size, setSize] = useState(INITIAL_ICON_SIZE)
	const [strokeWidth, setStrokeWidth] = useState(INITIAL_ICON_STROKE_WIDTH)
	const [selectedName, setSelectedName] = useState("")
	const [selectedSvgElement, setSelectedSvgElement] = useState<SVGSVGElement | null>(null)
	const [copyAs, setCopyAs] = useState<CopyAsValue>("code")
	const [strictJsx, setStrictJsx] = useState(false)
	const [exportComponent, setExportComponent] = useState(false)
	const [typescript, setTypescript] = useState(false)
	const [addImportStatement, setAddImportStatement] = useState(true)
	const [framework, setFramework] = useState<FrameworkValue>("svg")

	// Sync search parameters
	useEffect(() => {
		setSize(searchParams.number({ key: "size", min: ICON_SIZE_MIN, max: ICON_SIZE_MAX, initialValue: INITIAL_ICON_SIZE }))
		setStrokeWidth(searchParams.number({ key: "strokeWidth", min: ICON_STROKE_WIDTH_MIN, max: ICON_STROKE_WIDTH_MAX, initialValue: INITIAL_ICON_STROKE_WIDTH }))
		setCopyAs(searchParams.string<CopyAsValue>({ key: "copyAs", oneOf: CopyAs, initialValue: "code" }))
		setStrictJsx(searchParams.bool({ key: "strictJsx", initialValue: false }))
		setExportComponent(searchParams.bool({ key: "exportComponent", initialValue: false }))
		setTypescript(searchParams.bool({ key: "typescript", initialValue: false }))
		setAddImportStatement(searchParams.bool({ key: "addImportStatement", initialValue: true }))
		setFramework(searchParams.string<FrameworkValue>({ key: "framework", oneOf: Frameworks, initialValue: "svg" }))
	}, [])

	//////////////////////////////////////////////////////////////////////////////

	const [iconset, setIconset] = useState(INITIAL_ICONSET)

	const [manifest, Icon] = useMemo(() => {
		return cache.get(iconset)
	}, [iconset])

	const [search, setSearch] = useState("")
	const _canonicalSearch = useMemo(() => {
		const str = search.replace(/^[\s-]+|[\s-]+$/g, "") // [··]Hello,··world![··]
			.replace(/[\s-]+/g, " ")                         // Hello[··]world!
			.replace(/[^a-zA-Z0-9\s]/g, "")                  // Hello·world[!]
		return toTitleCase(str)
	}, [search])

	const _searchResultsFallback = useMemo(() => manifest.map(name => ({ name, indexes: null })), [manifest])
	const searchResults = useMemo(() => {
		const results: { name: string, indexes: readonly [number, number] | null }[] = []
		if (_canonicalSearch === "") { return _searchResultsFallback }
		for (const name of manifest) {
			const indexes = searchImpl(name, _canonicalSearch)
			if (indexes !== null) {
				results.push({ name, indexes })
			}
		}
		return results
	}, [_canonicalSearch, _searchResultsFallback, manifest])

	// Sync search parameters
	useEffect(() => {
		setIconset(searchParams.string<IconsetValue>({ key: "iconset", oneOf: Iconsets, initialValue: INITIAL_ICONSET }))
		setSearch(searchParams.string({ key: "search", initialValue: "" }))
	}, [])

	//////////////////////////////////////////////////////////////////////////////

	// Depends on iconset
	const clipboard = useMemo(() => {
		if (selectedName === "" || selectedSvgElement === null) { return "" }
		const version = +iconset.slice(1, 2)
		const variant = iconset.slice(3)
		if (copyAs === "code") {
			let contents = stringifySvgElement(selectedSvgElement, { strictJsx, omitAttrs: ["class", "style"] })
			if (exportComponent) {
				if (typescript) {
					contents = detab(`
						import { SVGAttributes } from "react";

						export function ${selectedName}Icon(props: SVGAttributes<SVGElement>) {
							return (
								${tab(contents, 8, { omitStart: true }).replace('aria-hidden="true">', 'aria-hidden="true" {...props}>')}
							);
						}
					`) + "\n" // EOF
				} else {
					contents = detab(`
						export function ${selectedName}Icon(props) {
							return (
								${tab(contents, 8, { omitStart: true }).replace('aria-hidden="true">', 'aria-hidden="true" {...props}>')}
							);
						}
					`) + "\n" // EOF
				}
			}
			return contents.replace(/\t/g, "  ")
		} else if (copyAs === "name") {
			let contents = `<${selectedName}Icon ${framework === "react" ? "className" : "class"}="h-6 h-6 text-gray-500" />`
			if (addImportStatement) {
				contents = detab(`
					import { ${selectedName}Icon } from "@heroicons${version === 1 ? "@1.0.6" : ""}${framework === "svg" ? "" : `/${framework}`}/${variant.replace("-", "/")}";

					${contents}
				`) + "\n" // EOF
			}
			return contents.replace(/\t/g, "  ")
		}
		return "" // Never
	}, [copyAs, exportComponent, framework, iconset, addImportStatement, selectedName, selectedSvgElement, strictJsx, typescript])

	//////////////////////////////////////////////////////////////////////////////

	const resetAllSearchConfig = useCallback(() => {
		setSize(INITIAL_ICON_SIZE)
		setStrokeWidth(INITIAL_ICON_STROKE_WIDTH)
		setSelectedName("")
		setSelectedSvgElement(null)
		setCopyAs("code")
		setStrictJsx(false)
		setExportComponent(false)
		setTypescript(false)
		setAddImportStatement(true)
		setFramework("svg")
	}, [])

	const resetClipboard = useCallback(() => {
		setSelectedName("")
		setSelectedSvgElement(null)
		setCopyAs("code")
		setStrictJsx(false)
		setExportComponent(false)
		setTypescript(false)
		setAddImportStatement(true)
		setFramework("svg")
	}, [])

	const resetAllSearch = useCallback(() => {
		setIconset("v2-20-solid")
		setSearch("")
	}, [])

	return <>
		<SearchConfigContext.Provider value={useMemo(() => ({
			size,
			strokeWidth,
			selectedName,
			selectedSvgElement,
			copyAs,
			strictJsx,
			exportComponent,
			typescript,
			addImportStatement,
			framework,
			clipboard,
		}), [addImportStatement, clipboard, copyAs, exportComponent, framework, selectedName, selectedSvgElement, size, strictJsx, strokeWidth, typescript])}>
			<SetSearchConfigContext.Provider value={useMemo(() => ({
				setIconset,
				setSize,
				setStrokeWidth,
				setSelectedName,
				setSelectedSvgElement,
				setCopyAs,
				setStrictJsx,
				setExportComponent,
				setTypescript,
				setAddImportStatement,
				setFramework,
				resetAll: resetAllSearchConfig,
				resetClipboard,
			}), [resetAllSearchConfig, resetClipboard])}>
				<SearchContext.Provider value={useMemo(() => ({
					iconset,
					manifest,
					Icon,
					search,
					searchResults,
				}), [Icon, iconset, manifest, search, searchResults])}>
					<SetSearchContext.Provider value={useMemo(() => ({
						setIconset,
						setSearch,
						resetAll: resetAllSearch,
					}), [resetAllSearch])}>
						<ClipboardEffect />
						{/* <RestoreSelectedSvgElementEffect /> */}
						<VisibilityChangeEffect />
						<CastSizeAndStrokeWidthAsCSSVariablesEffect />
						<URLSearchParamsEffect />
						{children}
					</SetSearchContext.Provider>
				</SearchContext.Provider>
			</SetSearchConfigContext.Provider>
		</SearchConfigContext.Provider>
	</>
}

function ClipboardEffect() {
	const searchConfig = useContext(SearchConfigContext)!

	const onceRef = useRef(false)
	useEffect(() => {
		if (!onceRef.current) {
			onceRef.current = true
			return
		}
		navigator.clipboard.writeText(searchConfig.clipboard)
	}, [searchConfig.clipboard])

	return <></>
}

//// function RestoreSelectedSvgElementEffect() {
//// 	const searchConfig = useContext(SearchConfigContext)!
//// 	const setSearchConfig = useContext(SetSearchConfigContext)!
//// 	const search = useContext(SearchContext)!
////
//// 	const prevIconset = useRef(search.iconset)
//// 	useEffect(() => {
//// 		queueMicrotask(() => prevIconset.current = search.iconset)
////
//// 		if (searchConfig.selectedName === "") { return }
//// 		if (prevIconset.current.slice(0, 2) === search.iconset.slice(0, 2)) {
//// 			const svgElement = document
//// 				?.getElementById(searchConfig.selectedName)
//// 				?.querySelector("svg")
//// 			if (svgElement === undefined || svgElement === null) { return }
//// 			setSearchConfig.setSelectedSvgElement(svgElement)
//// 		} else {
//// 			setSearchConfig.setSelectedName("")
//// 			setSearchConfig.setSelectedSvgElement(null)
//// 		}
//// 	}, [search.iconset, searchConfig.selectedName, setSearchConfig])
////
//// 	return <></>
//// }

function VisibilityChangeEffect() {
	const search = useContext(SearchContext)!

	useEffect(() => {
		function handleVisibilityChange(e?: Event) {
			if (document.visibilityState === "visible") {
				if (search.searchResults.length === search.manifest.length) {
					document.title = "Heroicons"
				} else {
					const length = search.searchResults.length
					document.title = `Heroicons — ${length} icon${length === 1 ? "" : "s"}`
				}
			} else {
				document.title = "Heroicons"
			}
		}
		handleVisibilityChange()
		window.addEventListener("visibilitychange", handleVisibilityChange, false)
		return () => window.removeEventListener("visibilitychange", handleVisibilityChange, false)
	}, [search.manifest.length, search.searchResults.length])

	return <></>
}

function CastSizeAndStrokeWidthAsCSSVariablesEffect() {
	const searchConfig = useContext(SearchConfigContext)!

	useEffect(() => {
		//// document.body.style.setProperty("--grid-item-icon-size", `${searchConfig.size}px`)
		document.body.style.setProperty("--grid-item-icon-stroke-width", `${searchConfig.strokeWidth}`)
		document.body.style.setProperty("--grid-item-icon-scale", `${round(searchConfig.size / INITIAL_ICON_SIZE, { precision: 2 })}`)
	}, [searchConfig.size, searchConfig.strokeWidth])

	return <></>
}

function URLSearchParamsEffect() {
	const searchConfig = useContext(SearchConfigContext)!
	const search = useContext(SearchContext)!

	useEffect(() => {
		const timeoutId = window.setTimeout(() => {
			const params = new URLSearchParams({
				...(search.iconset                  !== INITIAL_ICONSET           && { "iconset":            "" + search.iconset }),
				...(search.search                   !== ""                        && { "search":             "" + search.search }), // Alias
				...(searchConfig.size               !== INITIAL_ICON_SIZE         && { "size":               "" + searchConfig.size.toFixed(0) }),
				...(searchConfig.strokeWidth        !== INITIAL_ICON_STROKE_WIDTH && { "strokeWidth":        "" + searchConfig.strokeWidth.toFixed(2) }),
				...(searchConfig.copyAs             !== "code"                    && { "copyAs":             "" + searchConfig.copyAs }),
				...(searchConfig.strictJsx          !== false                     && { "strictJsx":          "" + searchConfig.strictJsx }),
				...(searchConfig.exportComponent    !== false                     && { "exportComponent":    "" + searchConfig.exportComponent }),
				...(searchConfig.typescript         !== false                     && { "typescript":         "" + searchConfig.typescript }),
				...(searchConfig.addImportStatement !== true                      && { "addImportStatement": "" + searchConfig.addImportStatement }),
				...(searchConfig.framework          !== "svg"                     && { "framework":          "" + searchConfig.framework }),
			})
			const paramsStr = params.toString()
			window.history.replaceState({}, "", paramsStr === "" ? "/" : `/?${paramsStr}`)
		}, 100)
		return () => window.clearTimeout(timeoutId)
	})

	return <></>
}
