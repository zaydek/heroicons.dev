import Apply from "lib/x/Apply"
import Reset from "lib/x/Reset"
import target_blank from "lib/x/target_blank"
import tw from "lib/x/tailwindUnits"

import FlagSVG from "heroicons-0.4.0/solid/Flag"

// {/* LHS */}
// {/* <Reset className="block"> */}
// {/* 	<a href="TODO" {...target_blank}> */}
// {/* 		<Apply className="w-8 h-8 text-indigo-400"> */}
// {/* 			<FlagSVG /> */}
// {/* 		</Apply> */}
// {/* 	</a> */}
// {/* </Reset> */}

// {/* RHS */}
// {false && (
// 	<div className="space-x-6 flex flex-row justify-center items-center">
//
// 		<Reset className="block">
// 			<a href="TODO" {...target_blank}>
// 				<Apply className="w-auto h-6 text-gray-200">
// 					<svg fill="currentColor" viewBox="0 0 38 57" xmlns="http://www.w3.org/2000/svg">
// 						<path /* fill="#1abcfe" */ d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" />
// 						<path /* fill="#0acf83" */ d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" />
// 						<path /* fill="#ff7262" */ d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" />
// 						<path /* fill="#f24e1e" */ d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" />
// 						<path /* fill="#a259ff" */ d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" />
// 					</svg>
// 				</Apply>
// 			</a>
// 		</Reset>
//
// 		<Reset className="block">
// 			<a href="TODO" {...target_blank}>
// 				<Apply className="w-auto h-6 text-gray-200 transform scale-110">
// 					<svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// 						<path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" />
// 					</svg>
// 				</Apply>
// 			</a>
// 		</Reset>
//
// 		{/* <Reset className="block"> */}
// 		{/* 	<a href="TODO" {...target_blank}> */}
// 		{/* 		<Apply className="w-auto h-6 text-gray-200"> */}
// 		{/* 			<svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> */}
// 		{/* 				<path d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z" /> */}
// 		{/* 			</svg> */}
// 		{/* 		</Apply> */}
// 		{/* 	</a> */}
// 		{/* </Reset> */}
//
// 		<Reset className="block">
// 			<a href="TODO" {...target_blank}>
// 				<Apply className="w-auto h-6 text-gray-200">
// 					<svg fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
// 						<path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
// 					</svg>
// 				</Apply>
// 			</a>
// 		</Reset>
//
// 	</div>
// )}

const Footer = () => (
	<footer className="py-12 flex flex-row justify-center border-t-8 border-gray-900">
		<div className="px-8 flex flex-row justify-between items-center w-full max-w-screen-xl">

			{/* LHS */}
			<div>

				<Reset className="block">
					<a href="TODO" {...target_blank}>
						<h6
							className="text-gray-200"
							style={{
								fontWeight: 700,
								fontSize: tw(8),
								lineHeight: 1,
								fontFamily: "'DM Sans', var(--sans)",
								letterSpacing: "-0.025em",
							}}>
							<span className="inline-flex flex-row items-center">
								Heroicons{" "}
								<span style={{ width: "0.25ch" }} />
								<Apply className="w-8 h-8 text-indigo-400">
									<FlagSVG />
								</Apply>
							</span>
						</h6>
					</a>
				</Reset>

				<div className="h-4" />
				<p className="text-gray-200">
					Icons are designed by Steve Schoger
				</p>

				<p className="text-gray-200">
					Website is designed and maintained by Zaydek MG
				</p>

			</div>

			<Reset className="block">
				<a href="TODO" {...target_blank}>
					<p className="text-gray-200">
						<span className="inline-flex flex-row items-center">
							Share on Twitter{" "}
							<span style={{ width: "1ch" }} />
							<Apply className="w-auto h-6 transform scale-110" style={{ color: "#1da1f2" }}>
								<svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" />
								</svg>
							</Apply>
						</span>
					</p>
				</a>
			</Reset>

		</div>
	</footer>
)

export default Footer
