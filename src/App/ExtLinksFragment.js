import attrs from "./attrs"
import ExternalLinkSVG from "heroicons-82f6a4d/react/solid/ExternalLink"
import React from "react"
import { ReactComponent as TwitterSVG } from "svg/twitter.svg"

const ExtLinksFragment = () => (
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
		<a className="block" href="https://github.com/codex-zaydek/heroicons.dev" {...attrs.target_blank}>
			<p className="flex flex-row items-center font-medium text-gray-100">
				<svg className="mr-2 w-5 h-5 text-yellow-200" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
					<path fillRule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z" />
				</svg>
				Star on GitHub
				<ExternalLinkSVG className="ml-1 w-4 h-4 text-indigo-400" />
			</p>
		</a>

	</>
)

export default ExtLinksFragment
