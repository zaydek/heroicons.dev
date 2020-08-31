import Apply from "lib/x/Apply"
import disableAutoCorrect from "lib/x/disableAutoCorrect"
import px from "lib/x/pxToRem"
import Reset from "lib/x/Reset"
import tw from "lib/x/twToRem"

import SVGSearchOutline from "heroicons-0.4.1/outline/Search"

// hsl(272.5, 100%, 47.5%)

const Hero = () => (
	<div className="relative">

		<div className="bg-gray-200" style={{ height: px(32 * 16) }}>
			{/* ... */}
		</div>
		<Apply className="-z-10">
			<div className="absolute inset-x-0 top-full">
				<Apply className="text-gray-300">
					<svg fill="currentColor" viewBox="0 0 8 1" xmlns="http://www.w3.org/2000/svg">
						<path fillRule="evenodd" clipRule="evenodd" d="M4 0.999999C2 1 0.5 0.333333 0 0L8 -1.39876e-06C7.41667 0.333332 6 0.999999 4 0.999999Z" />
					</svg>
				</Apply>
			</div>
		</Apply>

		<Apply className="-z-10">
			<div className="fixed inset-x-0 top-0">
				<div className="h-24 bg-gray-200" />
				<Apply className="text-gray-300">
					<svg fill="currentColor" viewBox="0 0 8 1" xmlns="http://www.w3.org/2000/svg">
						<path fillRule="evenodd" clipRule="evenodd" d="M4 0.999999C2 1 0.5 0.333333 0 0L8 -1.39876e-06C7.41667 0.333332 6 0.999999 4 0.999999Z" />
					</svg>
				</Apply>
			</div>
		</Apply>

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
			{!Math.floor(Math.random() * 5) && (
				<div className="p-4 absolute right-0 top-0">
					<div className="w-3 h-3 bg-gray-300 rounded-full animate-pulse" />
				</div>
			)}

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
	<Apply style={{ marginTop: tw(-(18 + 6)) }}>
		{/* NOTE: Uses items-start because of sticky top-*. */}
		<div className="px-4 flex flex-row justify-center items-start">
			<div className="w-full" style={{ maxWidth: px(1152) }}>

				{/* Search */}
				<div className="-mt-4 pt-4 sticky top-0 z-10">
					<div className="-mx-4 absolute inset-0 top-0">
						<div className="h-4 bg-gray-200" />
						<div className="h-9 bg-gray-200" />
						<div className="h-9 bg-gradient-to-b from-gray-200 to-transparent" />
					</div>
					<div className="rounded-6 shadow-2">
						<div className="rounded-6" style={{ height: tw(18) }}>
							<Search />
						</div>
					</div>
				</div>

				{/* Icons */}
				<div style={{ height: tw(6) }} />
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

		{/* TODO: Remove. */}
		<div className="h-24" />

	</div>
)

export default Layout
