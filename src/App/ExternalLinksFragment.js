import attrs from "./attrs"
import React from "react"

import ExternalLinkSVG from "heroicons-82f6a4d/react/solid/ExternalLink"
import { ReactComponent as GitHubSVG } from "svg/github.svg"
import { ReactComponent as TwitterSVG } from "svg/twitter.svg"

const ExternalLinksFragment = () => (
	<>

		{/* Tweet */}
		<a className="block" href="https://twitter.com/intent/tweet?text=Thanks%20@steveschoger,%20@adamwathan,%20and%20@username_ZAYDEK%20for%20Heroicons!%20%F0%9F%A4%A9&url=https://heroicons.dev" {...attrs.target_blank}>
			<p className="flex flex-row items-center font-medium text-gray-100">
				<TwitterSVG className="mr-2 w-5 h-5" style={{ color: "#1da1f2" }} />
				Tweet thank you on Twitter!
				<ExternalLinkSVG className="ml-1 w-4 h-4 text-indigo-400" />
			</p>
		</a>

		{/* Star */}
		<a className="block" href="https://github.com/codex-src/heroicons.dev" {...attrs.target_blank}>
			<p className="flex flex-row items-center font-medium text-gray-100">
				{/* <svg className="mr-2 w-5 h-5 fill-current text-yellow-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"> */}
				{/* 	<path fillRule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z" /> */}
				{/* </svg> */}
				Star on GitHub
				<ExternalLinkSVG className="ml-1 w-4 h-4 text-indigo-400" />
			</p>
		</a>

		{/* Sponsor */}
		<a className="block" href="https://github.com/sponsors/codex-zaydek" {...attrs.target_blank}>
			<p className="flex flex-row items-center font-medium text-gray-100">
				{/* <svg className="mr-2 w-5 h-5 fill-current" style={{ color: "rgb(234, 74, 170)" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"> */}
				{/* 	<path fillRule="evenodd" d="M7.655 14.916L8 14.25l.345.666a.752.752 0 01-.69 0zm0 0L8 14.25l.345.666.002-.001.006-.003.018-.01a7.643 7.643 0 00.31-.17 22.08 22.08 0 003.433-2.414C13.956 10.731 16 8.35 16 5.5 16 2.836 13.914 1 11.75 1 10.203 1 8.847 1.802 8 3.02 7.153 1.802 5.797 1 4.25 1 2.086 1 0 2.836 0 5.5c0 2.85 2.045 5.231 3.885 6.818a22.075 22.075 0 003.744 2.584l.018.01.006.003h.002z" /> */}
				{/* </svg> */}
				Sponsor on GitHub
				<ExternalLinkSVG className="ml-1 w-4 h-4 text-indigo-400" />
			</p>
		</a>

	</>
)

export default ExternalLinksFragment
