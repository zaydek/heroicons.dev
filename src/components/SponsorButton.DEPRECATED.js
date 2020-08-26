import React from "react"

const SponsorButton = () => {
	// const noopAdsForSponsor = React.useMemo(() => {
	// 	const key = localStorage.getItem(SPONSOR_KEY)
	// 	if (key === null) {
	// 		return false
	// 	}
	// 	let decoded = ""
	// 	try {
	// 		decoded = atob(key)
	// 	} catch (error) {
	// 		console.log("Nice try. 😉")
	// 	}
	// 	return sponsorMap[decoded] || false
	// }, [])

	return (
		<div
			className="px-3 py-2 relative flex flex-row justify-center items-center border border-gray-700 rounded-75"
			style={{
				width: 332,
				height: 127,
				backgroundColor: "hsl(0, 0%, 10%)",
			}}
		>
			<div className="flex flex-col items-center w-full">
				<div className="flex flex-row items-center">
					<img className="mr-4 w-12 h-12 rounded-full" src={srcZaydekMG} alt="Zaydek MG" />
					<p className="font-medium leading-relaxed text-gray-100" style={{ fontSize: tw(3.75) }}>
						Ad blocked! Why not sponsor?<br />
						Sponsor me on GitHub.{" "}
						<EmojiHappySVG className="-mt-1 inline-block w-5 h-5" />
					</p>
				</div>
				<div className="h-4" />
				<div className="px-2 w-full">
					<div className="w-full shadow">
						<a className="py-1 inline-block w-full bg-gray-800 border border-gray-600 focus:border-transparent rounded focus:outline-none shadow-none focus:shadow-solid-indigo transition duration-200 ease-in-out" href="https://github.com/sponsors/codex-zaydek" {...attrs.target_blank}>
							<p className="flex flex-row justify-center items-center font-semibold text-md leading-none text-gray-100" style={{ fontSize: tw(3.75) }}>
								<svg className="mr-2 w-5 h-5 fill-current text-indigo-500 transform scale-90" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
									<path fillRule="evenodd" d="M7.655 14.916L8 14.25l.345.666a.752.752 0 01-.69 0zm0 0L8 14.25l.345.666.002-.001.006-.003.018-.01a7.643 7.643 0 00.31-.17 22.08 22.08 0 003.433-2.414C13.956 10.731 16 8.35 16 5.5 16 2.836 13.914 1 11.75 1 10.203 1 8.847 1.802 8 3.02 7.153 1.802 5.797 1 4.25 1 2.086 1 0 2.836 0 5.5c0 2.85 2.045 5.231 3.885 6.818a22.075 22.075 0 003.744 2.584l.018.01.006.003h.002z" />
								</svg>
								Sponsor
							</p>
						</a>
					</div>
				</div>
			</div>

			<button className="px-4 py-3 absolute inset-x-0 top-full block w-full focus:outline-none" onClick={e => {
				const username = window.prompt("What’s your GitHub username? If you just sponsored me, allow me up to a day to update the site. 😊")
				if (username === null) {
					// No-op
					return
				}
				const usernameSafe = username
					.trim()            // Remove spaces
					.replace(/^@/, "") // Remove [@]username
					.toLowerCase()     // Lowercase
				if (sponsorMap[usernameSafe]) {
					localStorage.setItem(SPONSOR_KEY, btoa(usernameSafe))
					setShowCarbonAds(false)
				}
			}}>
				<div className="flex flex-row justify-center">
					<p className="text-sm text-gray-100 hover:underline">
						Are you a GitHub Sponsor? Click here.
					</p>
				</div>
			</button>

		</div>
	)
}

export default SponsorButton
