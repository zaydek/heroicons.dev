import ExternalLinkSVG from "heroicons-82f6a4d/react/solid/ExternalLink"
import React from "react"
import target_blank from "lib/x/target_blank"
import { ReactComponent as GitHubSVG } from "svg/github.svg"
import { ReactComponent as TwitterSVG } from "svg/twitter.svg"

const ExtLinksFragment = () => (
	<>

		{/* Twitter (1) */}
		<a className="block" href="https://twitter.com/intent/tweet?text=Thanks%20@steveschoger,%20@adamwathan,%20and%20@username_ZAYDEK%20for%20Heroicons!%20%F0%9F%A4%A9&url=https://heroicons.dev" {...target_blank}>
			<p className="flex flex-row items-center font-medium text-gray-100">
				<TwitterSVG className="mr-2 w-5 h-5" style={{ color: "#1da1f2" }} />
				Tweet thank you on Twitter!
				<ExternalLinkSVG className="ml-1 w-4 h-4 text-indigo-400" />
			</p>
		</a>

		{/* Twitter (2) */}
		{/* <a className="block" href="https://twitter.com/intent/tweet?text=Thanks%20@steveschoger,%20@adamwathan,%20and%20@username_ZAYDEK%20for%20Heroicons!%20%F0%9F%A4%A9&url=https://heroicons.dev" {...target_blank}> */}
		{/* 	<p className="flex flex-row items-center font-medium text-gray-100"> */}
		{/* 		<TwitterSVG className="mr-2 w-5 h-5" style={{ color: "#1da1f2" }} /> */}
		{/* 		Follow username_ZAYDEK on Twitter */}
		{/* 		<ExternalLinkSVG className="ml-1 w-4 h-4 text-indigo-400" /> */}
		{/* 	</p> */}
		{/* </a> */}

		{/* GitHub */}
		<a className="block" href="https://github.com/codex-zaydek/heroicons.dev" {...target_blank}>
			<p className="flex flex-row items-center font-medium text-gray-100">
				<GitHubSVG className="mr-2 w-5 h-5" />
				Star on GitHub
				<ExternalLinkSVG className="ml-1 w-4 h-4 text-indigo-400" />
			</p>
		</a>

	</>
)

export default ExtLinksFragment
