import Apply from "lib/x/Apply"
import disableAutoCorrect from "lib/x/disableAutoCorrect"
import px from "lib/x/pxToRem"
import Reset from "lib/x/Reset"
import tw from "lib/x/twToRem"

import SVGSearchOutline from "heroicons-0.4.1/outline/Search"

const Hero = () => (
	<div className="bg-gray-300" style={{ height: px(30 * 16 /* 32 * 16 */) }}>
		{/* ... */}
	</div>
)

const Search = () => (
	// NOTE: Uses h-full because of absolute inset-0.
	<Apply className="h-full">
		<div className="relative">

			{/* LHS */}
			<div className="absolute left-0 inset-y-0">
				<div className="px-8 pr-4 flex flex-row items-center h-full">
					<Apply className="w-6 h-6 text-gray-400">
						<SVGSearchOutline />
					</Apply>
				</div>
			</div>

			{/* Search */}
			<Reset className="block w-full h-full focus:outline-none">
				<input
					className="px-16 text-xl text-gray-800 bg-white rounded-6"
					style={{
						paddingLeft: tw(8 + 6 + 4),
						boxShadow: "inset 0 0 0 0.5px var(--gray-300), 0 0 0 0.5px var(--gray-300)",
					}}
					{...disableAutoCorrect}
				/>
			</Reset>

			{/* RHS */}
			<div className="absolute right-0 inset-y-0">
				{/* ... */}
			</div>

		</div>
	</Apply>
)

const Icon = () => (
	// NOTE: Uses h-full because of absolute inset-0.
	<Apply className="h-full">
		<div className="relative" style={{ boxShadow: "inset 0 0 0 0.5px var(--gray-300), 0 0 0 0.5px var(--gray-300)" }}>

			{/* New */}

			{/* Icon */}
			<div className="flex flex-row justify-center items-center h-full">
				<div className="w-8 h-8 bg-gray-500 rounded-full" />
			</div>

			{/* Text */}
			<div className="pb-4 absolute inset-x-0 bottom-0">
				<div className="flex flex-row justify-center">
					<div className="w-24 h-3 bg-gray-300 rounded-1" />
				</div>
			</div>

		</div>
	</Apply>
)

function range(max) {
	return Array(max).fill().map((_, x) => x)
}

const App = () => (
	<Apply style={{ marginTop: px(-1 * (72 + 24)) }}>
		{/* NOTE: Uses items-start because of sticky top-*. */}
		<div className="px-4 flex flex-row justify-center items-start">
			<div style={{ width: "100%", maxWidth: px(1152) }}>

				{/* Search */}
				<div className="sticky z-10" style={{ top: tw(4) }}>
					<div className="rounded-6 shadow-2">
						<div className="rounded-6" style={{ height: px(72) }}>
							<Search />
						</div>
					</div>
				</div>

				{/* Icons */}
				<div style={{ height: px(24) }} />
				<div className="rounded-6 shadow-2">
					{/* TODO: Drop overflow-hidden here? */}
					<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 bg-white rounded-6 overflow-hidden" style={{ boxShadow: "inset 0 0 0 0.5px var(--gray-300), 0 0 0 0.5px var(--gray-300)" }}>

						{range(200).map((each, x) => (
							// TODO: each.name
							<div key={each.name} className="pb-full relative">
								<div className="absolute inset-0">
									{/* <MemoIcon */}
									{/* 	state={state} */}
									{/* 	dispatch={dispatch} */}
									{/* 	icon={each} */}
									{/* /> */}
									<Icon />
								</div>
							</div>
						))}

					</div>
				</div>

			</div>
		</div>
	</Apply>
)

const Layout = () => (
	<div id="next-root">
		<header>
			<Hero />
		</header>
		<main>
			<App />
		</main>
	</div>
)

export default Layout
