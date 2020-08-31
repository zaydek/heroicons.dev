import Apply from "lib/x/Apply"
import px from "lib/x/pxToRem"
// import tw from "lib/x/twToRem"

const Hero = () => (
	<header className="!bg-gray-300" style={{ height: px(30 * 16 /* 32 * 16 */) }}>
		{/* ... */}
	</header>
)

const Icon = () => (
	<div className="bg-red-200 shadow-2">
		hello
	</div>
)

function range(max) {
	return Array(max).fill().map((_, x) => x)
}

const App = () => (
	<Apply className="-mt-72" style={{ marginTop: px(-1 * (72 + 16)) }}>
		<main className="flex flex-row justify-center">
			<div style={{ width: "100%", maxWidth: px(1152) }}>

				{/* Search */}
				<div className="rounded-6 shadow-2">
					<div className="bg-white rounded-6" style={{ height: px(72), boxShadow: "inset 0 0 0 0.5px var(--gray-300), 0 0 0 0.5px var(--gray-300)" }}>

					</div>
				</div>

				{/* Icons */}
				<div style={{ height: px(16) }} />
				<div className="rounded-6 shadow-2">
					<main className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 bg-white rounded-6 overflow-hidden" style={{ boxShadow: "inset 0 0 0 0.5px var(--gray-300), 0 0 0 0.5px var(--gray-300)" }}>

						{range(200).map((each, x) => (
							// TODO: each.name
							<div key={each.name} className="pb-full relative">
								<div className="absolute inset-0">
									<div className="h-full red-100" style={{ boxShadow: "inset 0 0 0 0.5px var(--gray-300), 0 0 0 0.5px var(--gray-300)" }} />
									{/* <MemoIcon */}
									{/* 	state={state} */}
									{/* 	dispatch={dispatch} */}
									{/* 	icon={each} */}
									{/* /> */}
									{/* <Icon className="h-full" /> */}
								</div>
							</div>
						))}

					</main>
				</div>

			</div>
		</main>
	</Apply>
)

const Layout = () => (
	<div id="next-root">
		<Hero />
		<App />
	</div>
)

export default Layout
