import * as styled from "./css/bindings"

import spelllDesign from "./assets/spelll-design.png"

import { CSSProperties, Dispatch, HTMLAttributes, PropsWithChildren, SetStateAction, SVGAttributes, useContext, useMemo, useState } from "react"
import { AriaButton } from "./aria/aria-button"
import { AriaCheckbox } from "./aria/aria-checkbox"
import { AriaRadio, AriaRadiogroup } from "./aria/aria-radio"
import { AriaSlider } from "./aria/aria-slider"
import { ArrowDownTrayIcon, CheckIcon, DocumentDuplicateIcon, ReactIcon, SVGIcon, VueIcon, XMarkIcon } from "./icon-config"
import { download } from "./lib/download"
import { Icon } from "./lib/react/icon"
import { SearchConfigContext, SearchContext, SetSearchConfigContext } from "./state"

function Label({ children }: PropsWithChildren) {
	return <>
		<styled.TypographyCaps className="color-$fill-color">
			{children}
		</styled.TypographyCaps>
	</>
}

function AltLabel({ children }: PropsWithChildren) {
	return <>
		<styled.TypographyCaps className="color-$soft-fill-color">
			{children}
		</styled.TypographyCaps>
	</>
}

function OutlinedValue({ children, center }: PropsWithChildren<{ center?: boolean }>) {
	center ??= false
	if (center) {
		return <>
			<div className="flex justify-center align-center h-$form-size rounded-1e3 shadow-inset_0_0_0_1px_$hairline-color">
				{children}
			</div>
		</>
	} else {
		return <>
			<div className="px-calc($form-size_/_2) flex align-center h-$form-size rounded-1e3 shadow-inset_0_0_0_1px_$hairline-color">
				<styled.TypographyCaps className="color-$fill-color">
					{children}
				</styled.TypographyCaps>
			</div>
		</>
	}
}

function RevertButton(props: HTMLAttributes<HTMLDivElement>) {
	return <>
		<AriaButton {...props}>
			<div className="flex justify-center align-center h-20 w-20 rounded-1e3 bg-color-$gray-color">
				<Icon className="h-12 w-12 [stroke-width]-3 color-$soft-fill-color" icon={XMarkIcon} />
			</div>
		</AriaButton>
	</>
}

function Radio({ children, center, ...props }: PropsWithChildren<{ value: string, center?: boolean } & HTMLAttributes<HTMLDivElement>>) {
	return <>
		<AriaRadio {...props}>
			<div className="flex align-center gap-10 [&_>_:nth-child(2)]:flex-grow-1">
				<styled.Radio className="flex justify-center align-center">
					<styled.RadioIcon />
				</styled.Radio>
				<OutlinedValue center={center}>
					{children}
				</OutlinedValue>
			</div>
		</AriaRadio>
	</>
}

function Checkbox({ children, ...props }: PropsWithChildren<{ checked: boolean, setChecked: Dispatch<SetStateAction<boolean>> } & HTMLAttributes<HTMLDivElement>>) {
	return <>
		<AriaCheckbox {...props}>
			<div className="flex align-center gap-10 [&_>_:nth-child(2)]:flex-grow-1">
				<styled.Checkbox className="flex justify-center align-center">
					<styled.CheckboxIcon as={CheckIcon} />
				</styled.Checkbox>
				<OutlinedValue>
					{children}
				</OutlinedValue>
			</div>
		</AriaCheckbox>
	</>
}

function Slider(props: { min: number, max: number, step: number, value: number, setValue: Dispatch<SetStateAction<number>> }) {
	const [track, setTrack] = useState<HTMLDivElement | null>(null)
	const [thumb, setThumb] = useState<HTMLDivElement | null>(null)

	return <>
		<AriaSlider track={track} thumb={thumb} {...props}>
			<styled.Slider.Forward ref={setTrack} className="flex flex-col justify-center">
				<styled.SliderTrack className="flex align-center">
					<styled.SliderThumb.Forward ref={setThumb} />
				</styled.SliderTrack>
			</styled.Slider.Forward>
		</AriaSlider>
	</>
}

function TextareaButton({ icon, children, ...props }: { icon: (_: SVGAttributes<SVGSVGElement>) => JSX.Element } & HTMLAttributes<HTMLDivElement>) {
	return <>
		<AriaButton {...props}>
			<div className="px-calc($form-size_/_2) flex align-center gap-8 h-$form-size rounded-1e3 bg-color-$form-color shadow-$inset-shadow [[role=button]:hover:active_&]:(bg-color-$trim-color shadow-$inset-shadow)">
				<Icon className="h-16 w-16 [stroke-width]-2 color-$trim-color [[role=button]:hover:active_&]:color-WHITE"
					icon={icon} />
				<styled.TypographyCaps className="color-$fill-color [[role=button]:hover:active_&]:color-WHITE">
					{children}
				</styled.TypographyCaps>
			</div>
		</AriaButton>
	</>
}

export function SectionSize() {
	const { size } = useContext(SearchConfigContext)!
	const { setSize } = useContext(SetSearchConfigContext)!

	return <>
		<section className="py-$sidebar-2-inset-y px-$sidebar-2-inset-x flex flex-col gap-10 [&:nth-child(1)]:pt-48">
			<div className="flex justify-space-between align-center h-20">
				<Label>
					PREVIEW SIZE
				</Label>
				<div className="flex align-center gap-8">
					<AltLabel>
						{size.toFixed(0)} PX
					</AltLabel>
					<RevertButton onClick={e => setSize(30)} />
				</div>
			</div>
			<Slider
				min={0}
				max={60}
				step={2}
				value={size}
				setValue={setSize}
			/>
		</section>
	</>
}

function SectionStrokeWidth() {
	const { strokeWidth } = useContext(SearchConfigContext)!
	const { setStrokeWidth } = useContext(SetSearchConfigContext)!

	return <>
		<section className="py-$sidebar-2-inset-y px-$sidebar-2-inset-x flex flex-col gap-10 [&:nth-child(1)]:pt-48">
			<div className="flex justify-space-between align-center h-20">
				<Label>
					PREVIEW STROKE WIDTH
				</Label>
				<div className="flex align-center gap-8">
					<AltLabel>
						{strokeWidth.toFixed(2)}
					</AltLabel>
					<RevertButton onClick={e => setStrokeWidth(2)} />
				</div>
			</div>
			<Slider
				min={0}
				max={4}
				step={0.125}
				value={strokeWidth}
				setValue={setStrokeWidth}
			/>
		</section>
	</>
}

function SectionClipboard() {
	const { selectedName, copyAs, strictJsx, exportComponent, typescript, addImportStatement, framework, clipboard } = useContext(SearchConfigContext)!
	const { setCopyAs, setStrictJsx, setExportComponent, setTypescript, setAddImportStatement, setFramework, resetClipboard } = useContext(SetSearchConfigContext)!

	const extension = useMemo(() => {
		let extension = "svg"
		if (exportComponent) {
			if (typescript) {
				extension = "tsx"
			} else {
				extension = "jsx"
			}
		}
		return extension
	}, [exportComponent, typescript])

	return <>
		<section className="py-$sidebar-2-inset-y px-$sidebar-2-inset-x flex flex-col gap-10 [&:nth-child(1)]:pt-48">
			<div className="flex justify-space-between align-center h-20">
				<Label>
					COPY AS
				</Label>
				<RevertButton onClick={resetClipboard} />
			</div>
			<AriaRadiogroup groupValue={copyAs} setGroupValue={setCopyAs as Dispatch<SetStateAction<string>>}>
				<div className="grid grid-cols-2 gap-10">
					<Radio value="code">
						CODE
					</Radio>
					<Radio value="name">
						NAME
					</Radio>
				</div>
			</AriaRadiogroup>
			{/* Use flex flex-col to reset <textarea> */}
			<div></div>
			<div className="relative flex flex-col">
				<styled.TypographyCode
					tag="textarea"
					className="p-calc($form-size_*_2_/_3) aspect-1.75 rounded-24 color-$fill-color bg-color-$gray-color
						[&::placeholder]:color-$soft-fill-color [&:is(:hover,_:focus)]:(bg-color-$base-color shadow-inset_0_0_0_1px_$hairline-color)"
					placeholder="Click to copy an icon"
					value={clipboard}
					readOnly
				/>
				<div className="absolute inset-br-16 flex gap-10">
					{copyAs === "code" &&
						<TextareaButton
							icon={ArrowDownTrayIcon}
							onClick={e => {
								if (clipboard === "") { return }
								const filename = `${selectedName}.${extension}`
								download(filename, clipboard)
							}}
						>
							DOWNLOAD
						</TextareaButton>
					}
					<TextareaButton
						icon={DocumentDuplicateIcon}
						onClick={e => {
							if (clipboard === "") { return }
							navigator.clipboard.writeText(clipboard)
						}}
					>
						COPY
					</TextareaButton>
				</div>
			</div>
			<div></div>
			{copyAs === "code" && <>
				<Checkbox checked={strictJsx} setChecked={setStrictJsx}>
					STRICT JSX
				</Checkbox>
				<Checkbox checked={exportComponent} setChecked={setExportComponent}>
					EXPORT COMPONENT
				</Checkbox>
				{exportComponent &&
					<Checkbox checked={typescript} setChecked={setTypescript}>
						TYPESCRIPT
					</Checkbox>
				}
			</>}
			{copyAs === "name" && <>
				<Checkbox checked={addImportStatement} setChecked={setAddImportStatement}>
					ADD IMPORT STATEMENT
				</Checkbox>
				<AriaRadiogroup groupValue={framework} setGroupValue={setFramework as Dispatch<SetStateAction<string>>}>
					<div className="grid grid-cols-3 gap-10">
						<Radio
							style={{ "--color": "var(--svg-orange)" } as CSSProperties}
							value="svg"
							center
						>
							<Icon className="h-20 w-20"
								icon={SVGIcon} />
						</Radio>
						<Radio
							style={{ "--color": "var(--react-blue)" } as CSSProperties}
							value="react"
							center
						>
							<Icon className="h-20 w-20"
								icon={ReactIcon} />
						</Radio>
						<Radio
							style={{ "--color": "var(--vue-green)"  } as CSSProperties}
							value="vue"
							center
						>
							<Icon className="h-20 w-20"
								icon={VueIcon} />
						</Radio>
					</div>
				</AriaRadiogroup>
			</>}
		</section>
	</>
}

export function Sidebar2() {
	const { iconset } = useContext(SearchContext)!

	return <>
		<SectionSize />
		{iconset.includes("outline") && <>
			<hr className="h-1 bg-color-$hairline-color" />
			<SectionStrokeWidth />
		</>}
		<hr className="h-1 bg-color-$hairline-color" />
		<SectionClipboard />
		<hr className="h-1 bg-color-$hairline-color" />
		<div className="absolute inset-b-0 py-$sidebar-2-inset-y px-$sidebar-2-inset-x shadow-0_-1px_0_0_$hairline-color">
			<a
				className="flex gap-20 [&_>_:nth-child(2)]:flex-grow-1"
				href="https://spelll.design?ref=heroicons.dev"
				rel="noopener noreferrer"
				target="_blank"
			>
				<div className="flex justify-center align-center h-80 aspect-1.67 rounded-16 bg-color-#4f27fa">
					<img className="h-45%" src={spelllDesign} alt="Spelll Design -- Spell Checker for Figma" />
				</div>
				<div className="flex flex-col gap-2">
					{/* Use h-24 to constrain sponsor badge bounding box */}
					<div className="flex align-center gap-8 h-24">
						{/* TODO: Unfortunately we need to use !important here because UnoCSS
						seems to sort class names */}
						<styled.TypographySans className="![font-weight]-500 color-$hard-fill-color">
							spelll.design
						</styled.TypographySans>
						<styled.TypographySmallCaps className="flex justify-center align-center py-5 px-10 rounded-1e3
							[font-weight]-700 color-white
								bg-color-black">
							SPONSOR
						</styled.TypographySmallCaps>
					</div>
					{/* TODO: Unfortunately we need to use !important here because UnoCSS
					seems to sort class names */}
					<styled.TypographySans className="![line-height]-1.4 color-$fill-color">
						{/* Don't let <span className="[text-decoration]-underline_red_wavy">mistaks</span> ruin your design. */}
						<span className="[text-decoration]-underline_red_wavy">Spellng</span> and Grammer Checker for Figma
					</styled.TypographySans>
				</div>
			</a>
		</div>
	</>
}
