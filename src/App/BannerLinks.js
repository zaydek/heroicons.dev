import attrs from "./attrs"
import ExternalLinkSVG from "heroicons-82f6a4d/react/solid/ExternalLink"
import Gap from "./Gap"
import React from "react"
import { ReactComponent as GitHubSVG } from "svg/github.svg"
import { ReactComponent as TwitterSVG } from "svg/twitter.svg"

const BannerLinks = () => (
	<div className="space-x-6 flex flex-row justify-center">

		{/* https://github.com/refactoringui/heroicons */}
		<a className="block" href="https://github.com/refactoringui/heroicons" {...attrs.target_blank}>
			<p className="flex flex-row items-center font-medium text-gray-100">
				<GitHubSVG className="mr-2 w-5 h-5" />
				Star heroicons
				<ExternalLinkSVG className="ml-1 w-4 h-4 text-indigo-400" />
			</p>
		</a>

		{/* https://github.com/codex-src/heroicons.dev */}
		<a className="block" href="https://github.com/codex-src/heroicons.dev" {...attrs.target_blank}>
			<p className="flex flex-row items-center font-medium text-gray-100">
				<GitHubSVG className="mr-2 w-5 h-5" />
				Star heroicons.dev
				<ExternalLinkSVG className="ml-1 w-4 h-4 text-indigo-400" />
			</p>
		</a>

		{/* https://twitter.com/... */}
		<a className="block" href="https://twitter.com/intent/tweet?text=Thanks%20@steveschoger,%20@adamwathan,%20and%20@username_ZAYDEK%20for%20Heroicons!%20%F0%9F%A4%A9&url=https://heroicons.dev" {...attrs.target_blank}>
			<p className="flex flex-row items-center font-medium text-gray-100">
				<TwitterSVG className="mr-2 w-5 h-5" style={{ color: "#1da1f2" }} />
				Say thanks on Twitter!
				<ExternalLinkSVG className="ml-1 w-4 h-4 text-indigo-400" />
			</p>
		</a>

	</div>
)

export default BannerLinks
