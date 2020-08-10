import attrs from "./attrs"
import React from "react"

import ExternalLinkSVG from "heroicons-82f6a4d/react/solid/ExternalLink"
// import HeartSVG from "heroicons-82f6a4d/react/solid/Heart"
// import StarSVG from "heroicons-82f6a4d/react/solid/Star"
import { ReactComponent as FigmaSVG } from "svg/figma.svg"
import { ReactComponent as GitHubSVG } from "svg/github.svg"
import { ReactComponent as TwitterSVG } from "svg/twitter.svg"

const ExternalLinksFragment = () => (
	<>

		{/* https://twitter.com */}
		<a className="block" href="https://twitter.com/intent/tweet?text=Thanks%20@steveschoger,%20@adamwathan,%20and%20@username_ZAYDEK%20for%20Heroicons!%20%F0%9F%A4%A9&url=https://heroicons.dev" {...attrs.target_blank}>
			<p className="flex flex-row items-center font-medium text-gray-100">
				<TwitterSVG className="mr-2 w-5 h-5" style={{ color: "#1da1f2" }} />
				Tweet thank you on Twitter!
				{/* <HeartSVG className="ml-1 w-6 h-6 text-red-500" /> */}
				<ExternalLinkSVG className="ml-1 w-4 h-4 text-indigo-400" />
			</p>
		</a>

		{/* https://github.com */}
		<a className="block" href="https://github.com/codex-src/heroicons.dev" {...attrs.target_blank}>
			<p className="flex flex-row items-center font-medium text-gray-100">
				<GitHubSVG className="mr-2 w-5 h-5" />
				Star on GitHub!
				{/* <StarSVG className="ml-1 w-6 h-6 text-yellow-200" /> */}
				<ExternalLinkSVG className="ml-1 w-4 h-4 text-indigo-400" />
			</p>
		</a>

	</>
)

export default ExternalLinksFragment
