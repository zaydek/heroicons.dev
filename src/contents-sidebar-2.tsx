import { PropsWithChildren } from "react"

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

function Radio({ children }: PropsWithChildren) {
	return <>
		<div className="flex gap-10 [&_>_*:nth-child(2)]:flex-grow-1">
			<div className="flex justify-center align-center h-32 w-32 rounded-1e3 bg-color-red">
				<div className="w-10 h-10 rounded-1e3 bg-color-white"></div>
			</div>
			<LabelValue>
				{children}
			</LabelValue>
		</div>
	</>
}

function Checkbox() {
	return <>
		<div className="flex gap-10 [&_>_*:nth-child(2)]:flex-grow-1">
			<div className="flex justify-center align-center h-32 w-32 rounded-14 bg-color-red">
				<div className="w-10 h-10 rounded-1e3 bg-color-white"></div>
			</div>
			<LabelValue>
				HELLO
			</LabelValue>
		</div>
	</>
}

function Slider() {
	return <>
		<div className="flex flex-col justify-center h-40">
			<div className="flex justify-center align-center h-6 rounded-1e3 bg-color-red">
				<div className="h-32 w-32 rounded-1e3 bg-color-pink"></div>
			</div>
		</div>
	</>
}

function Textarea() {
	return <>
		<div className="aspect-10_/_6 rounded-24 bg-color-lightgray
				[&:is(:hover,_:focus)]:(bg-color-white shadow-[0_0_0_1px_lightgray])"
			tabIndex={0}></div>
	</>
}

function TextareaButton({ children }: PropsWithChildren) {
	return <>
		<div className="px-16 flex align-center gap-8 h-32 rounded-1e3 bg-color-orange" tabIndex={0}>
			<div className="h-16 w-16 rounded-1e3 bg-color-white"></div>
			{children}
		</div>
	</>
}

function SliderSection() {
	return <>
		<section className="py-$sidebar-y-inset px-$sidebar-x-inset flex flex-col gap-10 [&:nth-child(1)]:pt-48">
			<div className="flex justify-space-between align-center h-20">
				<Label>STROKE WIDTH</Label>
				<div className="flex align-center gap-10">
					<AltLabel>XX</AltLabel>
					<div className="flex justify-center align-center w-32 h-32 rounded-1e3 bg-color-red">
						<div className="w-16 h-16 rounded-1e3 bg-color-white"></div>
					</div>
				</div>
			</div>
			<Slider />
		</section>
	</>
}

function ClipboardSection() {
	return <>
		<section className="py-$sidebar-y-inset px-$sidebar-x-inset flex flex-col gap-10 [&:nth-child(1)]:pt-48">
			<div className="flex justify-space-between align-center h-20">
				<Label>STROKE WIDTH</Label>
				<div className="flex justify-center align-center w-32 h-32 rounded-1e3 bg-color-red">
					<div className="w-16 h-16 rounded-1e3 bg-color-white"></div>
				</div>
			</div>
			<div className="grid grid-cols-2 gap-10">
				<Radio>HELLO</Radio>
				<Radio>HELLO</Radio>
			</div>
			<div className="relative my-16 -mx-8">
				<Textarea />
				<div className="absolute inset-br-16 flex gap-16">
					<TextareaButton>HELLO</TextareaButton>
					<TextareaButton>HELLO</TextareaButton>
				</div>
			</div>
			<Checkbox />
			<Checkbox />
			<Checkbox />
		</section>
	</>
}

export function LayoutSidebar2() {
	return <>
		<SliderSection />
		<hr className="h-1 bg-color-gray" />
		<SliderSection />
		<hr className="h-1 bg-color-gray" />
		<ClipboardSection />
		<hr className="h-1 bg-color-gray" />
	</>
}
