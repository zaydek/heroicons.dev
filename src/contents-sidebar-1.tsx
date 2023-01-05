function MenuTitle() {
	return <>
		<div className="px-16 flex align-center h-32">
			<div>HELLO</div>
		</div>
	</>
}

function LiMenuItem() {
	return <>
		<li className="px-16 flex align-center gap-16 h-32 [&:hover]:bg-orange">
			<div className="h-24 w-24 rounded-1e3 bg-red"></div>
			<div>HELLO</div>
		</li>
	</>
}

function LiNavItem() {
	return <>
		<li className="px-16 flex align-center gap-16 h-32 [&:hover]:bg-orange">
			<div className="h-24 w-24 rounded-1e3 bg-red"></div>
			<div>HELLO</div>
		</li>
	</>
}

export function LayoutSidebar1() {
	return <>
		{/* <aside className="fixed inset-l-0 z-100 w-$sidebar-1-width bg-white shadow-[1px_0_0_0_gray]"> */}
		<section className="absolute inset-t-0 py-48">
			<div className="px-16 flex flex-col gap-10 h-[calc($inset-y_+_$search-bar-height_+_$inset-y)]">
				<div>HELLO</div>
				<div>HELLO</div>
			</div>
			<div className="flex flex-col gap-20">
				<ul>
					<MenuTitle />
					<LiMenuItem />
					<LiMenuItem />
					<LiMenuItem />
				</ul>
				<ul>
					<MenuTitle />
					<LiMenuItem />
					<LiMenuItem />
					<LiMenuItem />
				</ul>
			</div>
		</section>
		<section className="absolute inset-b-0 py-32 flex flex-col gap-20 bg-white shadow-[0_-1px_0_0_gray]">
			<nav>
				<LiNavItem />
				<LiNavItem />
				<LiNavItem />
				<LiNavItem />
			</nav>
			<div></div>
			<div className="px-16">
				Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
			</div>
			<div className="px-16">
				Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
				Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
			</div>
		</section>
		{/* </aside> */}
	</>
}
