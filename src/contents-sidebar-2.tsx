import { Dispatch, HTMLAttributes, PropsWithChildren, SetStateAction, useContext, useMemo, useState } from "react"
import { AriaButton } from "./aria/aria-button"
import { AriaCheckbox } from "./aria/aria-checkbox"
import { AriaRadio, AriaRadiogroup } from "./aria/aria-radio"
import { AriaSlider } from "./aria/aria-slider"
import { download } from "./lib/download"
import { SearchConfigContext, SetSearchConfigContext } from "./state"

function Label({ children }: PropsWithChildren) {
	return <>
		<div className="color-blue">
			{children}
		</div>
	</>
}

function AltLabel({ children }: PropsWithChildren) {
	return <>
		<div className="color-pink">
			{children}
		</div>
	</>
}

function LabelValue({ children }: PropsWithChildren) {
	return <>
		<div className="px-16 flex align-center h-32 rounded-1e3 shadow-[0_0_0_1px_red]">
			{children}
		</div>
	</>
}

function Radio({ children, ...props }: PropsWithChildren<{ value: string }>) {
	return <>
		<AriaRadio {...props}>
			<div className="flex gap-10 [&_>_*:nth-child(2)]:flex-grow-1">
				<div className="flex justify-center align-center h-32 w-32 rounded-1e3 bg-color-red">
					<div className="w-10 h-10 rounded-1e3 bg-color-white [[role=radio][aria-checked=false]_&]:[display:_none]"></div>
				</div>
				<LabelValue>
					{children}
				</LabelValue>
			</div>
		</AriaRadio>
	</>
}

function Checkbox({ children, ...props }: PropsWithChildren<{ checked: boolean, setChecked: Dispatch<SetStateAction<boolean>> }>) {
	return <>
		<AriaCheckbox {...props}>
			<div className="flex gap-10 [&_>_*:nth-child(2)]:flex-grow-1">
				<div className="flex justify-center align-center h-32 w-32 rounded-14 bg-color-red">
					<div className="w-10 h-10 rounded-1e3 bg-color-white [[role=checkbox][aria-checked=false]_&]:[display:_none]"></div>
				</div>
				<LabelValue>
					{children}
				</LabelValue>
			</div>
		</AriaCheckbox>
	</>
}

function Slider(props: { min: number, max: number, step: number, value: number, setValue: Dispatch<SetStateAction<number>> }) {
	const [track, setTrack] = useState<HTMLDivElement | null>(null)
	const [thumb, setThumb] = useState<HTMLDivElement | null>(null)

	return <>
		<AriaSlider track={track} thumb={thumb} {...props}>
			<div ref={setTrack} className="flex flex-col justify-center h-40">
				<div className="flex align-center h-6 rounded-1e3 bg-color-red">
					<div ref={setThumb} className="h-32 w-32 rounded-1e3 bg-color-pink"></div>
				</div>
			</div>
		</AriaSlider>
	</>
}

//// //// function ReadOnlyTextarea({ placeholder, value, rows }: { placeholder: string, value: string, rows: number }) {
//// function ReadOnlyTextarea({ placeholder, value }: { placeholder: string, value: string }) {
//// 	return <>
//// 		<textarea
//// 			className="aspect-10_/_6 rounded-24 bg-color-lightgray
//// 				[&:is(:hover,_:focus)]:(bg-color-white shadow-[0_0_0_1px_lightgray])"
//// 			placeholder={placeholder}
//// 			value={value}
//// 			//// rows={rows}
//// 			readOnly
//// 		/>
//// 	</>
//// }

function TextareaButton({ children, ...props }: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
	return <>
		<AriaButton {...props}>
			<div className="px-16 flex align-center gap-8 h-32 rounded-1e3 bg-color-orange">
				<div className="h-16 w-16 rounded-1e3 bg-color-white"></div>
				{children}
			</div>
		</AriaButton>
	</>
}

export function SectionSize() {
	const { size } = useContext(SearchConfigContext)!
	const { setSize } = useContext(SetSearchConfigContext)!

	return <>
		<section className="py-$sidebar-y-inset px-$sidebar-x-inset flex flex-col gap-10 [&:nth-child(1)]:pt-48">
			<div className="flex justify-space-between align-center h-20">
				<Label>SIZE</Label>
				<div className="flex align-center gap-10">
					<AltLabel>{size.toFixed(0)} PX</AltLabel>
					<div className="flex justify-center align-center w-32 h-32 rounded-1e3 bg-color-red">
						<div className="w-16 h-16 rounded-1e3 bg-color-white"></div>
					</div>
				</div>
			</div>
			<Slider
				min={0}
				max={60}
				step={1}
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
		<section className="py-$sidebar-y-inset px-$sidebar-x-inset flex flex-col gap-10 [&:nth-child(1)]:pt-48">
			<div className="flex justify-space-between align-center h-20">
				<Label>STROKE WIDTH</Label>
				<div className="flex align-center gap-10">
					<AltLabel>{strokeWidth.toFixed(2)}</AltLabel>
					<div className="flex justify-center align-center w-32 h-32 rounded-1e3 bg-color-red">
						<div className="w-16 h-16 rounded-1e3 bg-color-white"></div>
					</div>
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
	const { setCopyAs, setStrictJsx, setExportComponent, setTypescript, setAddImportStatement, setFramework } = useContext(SetSearchConfigContext)!

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
		<section className="py-$sidebar-y-inset px-$sidebar-x-inset flex flex-col gap-10 [&:nth-child(1)]:pt-48">
			<div className="flex justify-space-between align-center h-20">
				<Label>COPY AS</Label>
				<div className="flex justify-center align-center w-32 h-32 rounded-1e3 bg-color-red">
					<div className="w-16 h-16 rounded-1e3 bg-color-white"></div>
				</div>
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
			<div className="relative my-16 -mx-8 flex flex-col">
				<textarea
					className="p-24 aspect-1.75 rounded-24 bg-color-lightgray
						[&:is(:hover,_:focus)]:(bg-color-white shadow-[0_0_0_1px_lightgray])"
					placeholder="Click an icon to get started"
					value={clipboard}
					readOnly
				/>
				<div className="absolute inset-br-16 flex gap-16">
					{copyAs === "code" &&
						<TextareaButton onClick={e => {
							if (clipboard === "") { return }
							const filename = `${selectedName}.${extension}`
							const contents = clipboard
							download(filename, contents)
						}}>
							DOWNLOAD
						</TextareaButton>
					}
					<TextareaButton onClick={e => {
						if (clipboard === "") { return }
						navigator.clipboard.writeText(clipboard)
					}}>
						COPY
					</TextareaButton>
				</div>
			</div>
			{copyAs === "code" && <>
				<Checkbox checked={strictJsx} setChecked={setStrictJsx}>
					STRICT JSX
				</Checkbox>
				<Checkbox checked={exportComponent} setChecked={setExportComponent}>
					EXPORT COMPONENT
				</Checkbox>
				<Checkbox checked={typescript} setChecked={setTypescript}>
					TYPESCRIPT
				</Checkbox>
			</>}
			{copyAs === "name" && <>
				<Checkbox checked={addImportStatement} setChecked={setAddImportStatement}>
					ADD IMPORT STATEMENT
				</Checkbox>
				<AriaRadiogroup groupValue={framework} setGroupValue={setFramework as Dispatch<SetStateAction<string>>}>
					<div className="grid grid-cols-3 gap-10">
						<Radio value="svg">
							SVG
						</Radio>
						<Radio value="react">
							REACT
						</Radio>
						<Radio value="vue">
							VUE
						</Radio>
					</div>
				</AriaRadiogroup>
			</>}
		</section>
	</>
}

export function LayoutSidebar2() {
	return <>
		<SectionSize />
		<hr className="h-1 bg-color-gray" />
		<SectionStrokeWidth />
		<hr className="h-1 bg-color-gray" />
		<SectionClipboard />
		<hr className="h-1 bg-color-gray" />
	</>
}
