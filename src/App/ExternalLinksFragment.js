import attrs from "./attrs"
import ExternalLinkSVG from "heroicons-82f6a4d/react/solid/ExternalLink"
import React from "react"
import { ReactComponent as FigmaSVG } from "svg/figma.svg"
import { ReactComponent as GitHubSVG } from "svg/github.svg"
import { ReactComponent as TwitterSVG } from "svg/twitter.svg"

const ExternalLinksFragment = ({
	// twitter,
	// heroicons,
	// heroicons_dev,
	// figma,
}) => (
	<>

		{/* https://twitter.com/... */}
		{/* {twitter && ( */}
		<a className="block" href="https://twitter.com/intent/tweet?text=Thanks%20@steveschoger,%20@adamwathan,%20and%20@username_ZAYDEK%20for%20Heroicons!%20%F0%9F%A4%A9&url=https://heroicons.dev" {...attrs.target_blank}>
			<p className="flex flex-row items-center font-medium text-gray-100">
				<TwitterSVG className="mr-2 w-5 h-5" style={{ color: "#1da1f2" }} />
				Tweet thank you! on Twitter
				<ExternalLinkSVG className="ml-1 w-4 h-4 text-indigo-400" />
			</p>
		</a>
		{/* )} */}

		{/* https://github.com/refactoringui/heroicons */}
		{/* {heroicons && ( */}
		{/* 	<a className="block" href="https://github.com/refactoringui/heroicons" {...attrs.target_blank}> */}
		{/* 		<p className="flex flex-row items-center font-medium text-gray-100"> */}
		{/* 			<GitHubSVG className="mr-2 w-5 h-5" /> */}
		{/* 			Star heroicons */}
		{/* 			<ExternalLinkSVG className="ml-1 w-4 h-4 text-indigo-400" /> */}
		{/* 		</p> */}
		{/* 	</a> */}
		{/* )} */}

		{/* https://github.com/codex-src/heroicons.dev */}
		{/* {heroicons_dev && ( */}
		<a className="block" href="https://github.com/codex-src/heroicons.dev" {...attrs.target_blank}>
			<p className="flex flex-row items-center font-medium text-gray-100">
				<GitHubSVG className="mr-2 w-5 h-5" />
				Star on GitHub
				{/* TODO: Add <HeartSVG> */}
				<ExternalLinkSVG className="ml-1 w-4 h-4 text-indigo-400" />
			</p>
		</a>
		{/* )} */}

		{/* https://figma.com/... */}
		{/* {figma && ( */}
		{/* 	<a className="block" href="https://github.com/codex-src/heroicons.dev" {...attrs.target_blank}> */}
		{/* 		<p className="flex flex-row items-center font-medium text-gray-100"> */}
		{/* 			<FigmaSVG className="mr-2 w-5 h-5" /> */}
		{/* 			Open in Figma */}
		{/* 			<ExternalLinkSVG className="ml-1 w-4 h-4 text-indigo-400" /> */}
		{/* 		</p> */}
		{/* 	</a> */}
		{/* )} */}

	</>
)

export default ExternalLinksFragment
