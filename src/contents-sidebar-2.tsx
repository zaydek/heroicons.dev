import form from "./css/form.module.scss"

import { Dispatch, HTMLAttributes, PropsWithChildren, SetStateAction, useContext, useMemo, useState } from "react"
import { AriaButton } from "./aria/aria-button"
import { AriaCheckbox } from "./aria/aria-checkbox"
import { AriaRadio, AriaRadiogroup } from "./aria/aria-radio"
import { AriaSlider } from "./aria/aria-slider"
import { cx } from "./lib/cx"
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

function LabelValue({ children, center }: PropsWithChildren<{ center?: boolean }>) {
	return <>
		<div className={cx(`px-[calc($form-size_/_2)] flex ${center ? "justify-center" : ""} align-center h-$form-size rounded-1e3 shadow-[0_0_0_1px_$hairline-color]`)}>
			{children}
		</div>
	</>
}

function RevertButton(props: HTMLAttributes<HTMLDivElement>) {
	return <>
		<AriaButton {...props}>
			<div className="flex justify-center align-center h-24 w-24 rounded-1e3 bg-color-red">
				<div className="h-8 w-8 rounded-1e3 bg-color-white"></div>
			</div>
		</AriaButton>
	</>
}

function Radio({ children, center, ...props }: PropsWithChildren<{ value: string, center?: boolean }>) {
	return <>
		<AriaRadio {...props}>
			<div className="flex gap-10 [&_>_*:nth-child(2)]:flex-grow-1">
				<div className={cx(form.radio, "flex justify-center align-center")}>
					<div className={form.radioIcon} />
				</div>
				<LabelValue center={center}>
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
				<div className={cx(form.checkbox, "flex justify-center align-center")}>
					<div className={cx(form.checkboxIcon)} />
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
			<div ref={setTrack} className={cx(form.slider, "flex flex-col justify-center")}>
				<div className={cx(form.sliderTrack, "flex align-center")}>
					<div ref={setThumb} className={form.sliderThumb} />
				</div>
			</div>
		</AriaSlider>
	</>
}

function TextareaButton({ children, ...props }: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
	return <>
		<AriaButton {...props}>
			<div className="px-[calc($form-size_/_2)] flex align-center gap-8 h-$form-size rounded-1e3 bg-color-$form-color shadow-$shadow">
				<div className="h-16 w-16 rounded-1e3 bg-color-$trim-color"></div>
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
				<Label>
					SIZE
				</Label>
				<div className="flex align-center gap-10">
					<AltLabel>
						{size.toFixed(0)} PX
					</AltLabel>
					<RevertButton />
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
				<Label>
					STROKE WIDTH
				</Label>
				<div className="flex align-center gap-10">
					<AltLabel>
						{strokeWidth.toFixed(2)}
					</AltLabel>
					<RevertButton />
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
				<Label>
					COPY AS
				</Label>
				<RevertButton />
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
					className="p-24 aspect-1.75 rounded-24 bg-color-$base-gray-color
						[&:is(:hover,_:focus)]:(bg-color-$base-color shadow-[0_0_0_1px_$hairline-color])"
					placeholder="Click an icon to get started"
					value={clipboard}
					readOnly
				/>
				<div className="absolute inset-br-16 flex gap-8">
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
						<Radio value="svg" center>
							<div className="h-20 w-20 rounded-1e3
								bg-color-$svg-orange"></div>
						</Radio>
						<Radio value="react" center>
							<div className="h-20 w-20 rounded-1e3
								bg-color-$react-blue"></div>
						</Radio>
						<Radio value="vue" center>
							<div className="h-20 w-20 rounded-1e3
								bg-color-$vue-green"></div>
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
		<hr className="h-1 bg-color-$hairline-color" />
		<SectionStrokeWidth />
		<hr className="h-1 bg-color-$hairline-color" />
		<SectionClipboard />
		<hr className="h-1 bg-color-$hairline-color" />
	</>
}
