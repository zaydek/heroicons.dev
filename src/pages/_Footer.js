import Apply from "lib/x/Apply"
import target_blank from "lib/x/target_blank"
import tw from "lib/x/tailwindUnits"

import FlagSVG from "heroicons-0.4.0/solid/Flag"

const FooterLHS = () => (
	<nav>

		<a href="TODO" {...target_blank}>
			<h6
				className="text-gray-100"
				style={{
					fontWeight: 700,
					fontSize: tw(10),
					lineHeight: 1,
					fontFamily: "'DM Sans', var(--sans)",
					letterSpacing: "-0.025em",
				}}
			>
				<span className="inline-flex flex-row items-center">
					Heroicons{" "}
					<span style={{ width: "0.25ch" }} />
					<Apply className="w-10 h-10 text-indigo-500">
						<FlagSVG />
					</Apply>
				</span>
			</h6>
		</a>

		<div className="h-4" />
		<div className="flex flex-row">

			<a href="TODO" {...target_blank}>
				<p className="text-gray-100 leading-relaxed" style={{ fontSize: tw(4.75) }}>
					<span className="inline-flex flex-row items-center">
						<Apply className="-m-1 mr-0 w-5 h-5">
							<svg stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
							</svg>
						</Apply>{" "}
						<span style={{ width: "0.5ch" }} />
						MIT License
					</span>
				</p>
			</a>

			<div className="w-4" />
			<a href="TODO" {...target_blank}>
				<p className="text-gray-100 leading-relaxed" style={{ fontSize: tw(4.75) }}>
					<span className="inline-flex flex-row items-center">
						<Apply className="-m-1 mr-0 w-5 h-5">
							<svg stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
							</svg>
						</Apply>{" "}
						<span style={{ width: "0.5ch" }} />
						Version 0.4.0
					</span>
				</p>
			</a>

		</div>

		<p className="text-gray-100 leading-relaxed">
			<span className="inline-flex flex-row items-center">
				MIT means you can use the icons commercially and without attribution{" "}
				<span style={{ width: "0.5ch" }} />
				<Apply className="transform scale-125">
					<span aria-label="OK hand" role="img">
						👌
					</span>
				</Apply>
			</span>
		</p>

		<div className="h-8" />
		<p className="leading-relaxed text-gray-300">
			<span className="inline-flex flex-row items-center">
				Icons designed by{" "}
				<span style={{ width: "0.5ch" }} />
				<a className="font-medium no-underline hover:underline text-gray-200" href="TODO" {...target_blank}>
					@steveschoger
				</a>{" "}
				<span style={{ width: "1ch" }} />
				<Apply className="transform scale-125">
					<span aria-label="man artist" role="img">
						👨‍🎨
					</span>
				</Apply>
			</span>
		</p>

		<p className="leading-relaxed text-gray-300">
			<span className="inline-flex flex-row items-center">
				Website designed and maintained by{" "}
				<span style={{ width: "0.5ch" }} />
				<a className="font-medium no-underline hover:underline text-gray-200" href="TODO" {...target_blank}>
					@username_ZAYDEK
				</a>{" "}
				<span style={{ width: "1ch" }} />
				<Apply className="transform scale-125">
					<span aria-label="man technologist" role="img">
						👨‍💻
					</span>
				</Apply>
			</span>
		</p>

	</nav>
)

const FooterRHS = () => (
	<nav className="flex flex-col items-end">

		<h6 className="font-semibold text-xs tracking-wider text-gray-400">
			USEFUL LINKS
		</h6>

		<div className="h-8" />
		<a href="TODO" {...target_blank}>
			<p className="font-medium text-gray-200">
				<span className="inline-flex flex-row items-center">
					Share on Twitter!{" "}
					<Apply className="ml-3 w-6 h-6 transform scale-110" style={{ color: "#1da1f2" }}>
						<svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" />
						</svg>
					</Apply>
				</span>
			</p>
		</a>

		<div className="h-4" />
		<a href="TODO" {...target_blank}>
			<p className="font-medium text-gray-200">
				<span className="inline-flex flex-row items-center">
					Open in Figma{" "}
					<Apply className="ml-3 w-5 h-6">
						<svg fill="currentColor" viewBox="0 0 38 57" xmlns="http://www.w3.org/2000/svg">
							<path fill="#1abcfe" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" />
							<path fill="#0acf83" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" />
							<path fill="#ff7262" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" />
							<path fill="#f24e1e" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" />
							<path fill="#a259ff" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" />
						</svg>
					</Apply>
				</span>
			</p>
		</a>

		<div className="h-4" />
		<a href="TODO" {...target_blank}>
			<p className="font-medium text-gray-200">
				<span className="inline-flex flex-row items-center">
					Open in GitHub{" "}
					<Apply className="ml-3 w-5 h-6">
						<svg fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
							<path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
						</svg>
					</Apply>
				</span>
			</p>
		</a>

		<div className="h-4" />
		<a href="TODO" {...target_blank}>
			<p className="font-medium text-gray-200">
				<span className="inline-flex flex-row items-center">
					Contribute on GitHub{" "}
					<Apply className="ml-3 w-5 h-6">
						<svg fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
							<path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
						</svg>
					</Apply>
				</span>
			</p>
		</a>

	</nav>
)

const Footer = () => (
	<Apply className="relative">
		<footer className="py-16 flex flex-row justify-center border-t border-gray-800">
			<div className="-mt-2 px-6 flex flex-row justify-between items-end w-full max-w-screen-xl">
				<FooterLHS />
				<FooterRHS />
			</div>
		</footer>
	</Apply>
)

export default Footer
