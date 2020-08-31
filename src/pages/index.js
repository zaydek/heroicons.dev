import Apply from "lib/x/Apply"
import px from "lib/x/pxToRem"
import Reset from "lib/x/Reset"
import tw from "lib/x/twToRem"

const Hero = () => (
	<div className="!bg-gray-300" style={{ height: px(30 * 16 /* 32 * 16 */) }}>
		{/* ... */}
	</div>
)

// const SearchBar = () => (
// 	<div className="rounded-6 shadow-2">
// 		<div className="relative rounded-6" style={{ height: px(72), boxShadow: "inset 0 0 0 0.5px var(--gray-300), 0 0 0 0.5px var(--gray-300)" }}>
//
// 			{/* LHS */}
// 			<div className="absolute left-0 inset-y-0">
// 				lhs
// 			</div>
//
// 			{/* Search */}
// 			<Reset className="block w-full h-full">
// 				<input
// 					className="rounded-6"
// 					// style={{ borderRadius: "2rem" }}
// 				/>
// 			</Reset>
//
// 			{/* RHS */}
// 			<div className="absolute right-0 inset-y-0">
// 				rhs
// 			</div>
//
// 		</div>
// 	</div>
// )

const Search = () => (
	// NOTE: Uses h-full because of absolute inset-0.
	<Apply className="h-full">
		<div className="relative">

			{/* LHS */}
			<div className="absolute left-0 inset-y-0">
				{/* ... */}
			</div>

			{/* Search */}
			<Reset className="block w-full h-full focus:outline-none">
				<input
					className="px-16 rounded-6"
					style={{ boxShadow: "0 0 0 4px var(--indigo-500)" }}
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
		<div style={{ boxShadow: "inset 0 0 0 0.5px var(--gray-300), 0 0 0 0.5px var(--gray-300)" }}>
			{/* */}
		</div>
	</Apply>
)

function range(max) {
	return Array(max).fill().map((_, x) => x)
}

const App = () => (
	<Apply className="-mt-72" style={{ marginTop: px(-1 * (72 + 16)) }}>
		{/* NOTE: Uses items-start because of sticky top-*. */}
		<div className="flex flex-row justify-center items-start">
			<div style={{ width: "100%", maxWidth: px(1152) }}>

				{/* Search */}
				<div className="sticky z-10" style={{ top: tw(4) }}>
					<div className="rounded-6 shadow-2">
						<div className="rounded-6" style={{ height: px(72), boxShadow: "inset 0 0 0 0.5px var(--gray-300), 0 0 0 0.5px var(--gray-300)" }}>
							<Search />
						</div>
					</div>
				</div>

				{/* Icons */}
				<div style={{ height: px(16) }} />
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
