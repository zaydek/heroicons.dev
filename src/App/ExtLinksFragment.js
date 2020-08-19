import ExternalLinkSVG from "heroicons-82f6a4d/react/solid/ExternalLink"
import React from "react"
import target_blank from "lib/x/target_blank"
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
				{/* <GitHubSVG className="mr-2 w-5 h-5" /> */}
				<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="mr-2 w-5 h-5">
					{/* <path d="M7.97471 16C9.23376 16 10.1473 15.8214 11.1438 15.4913C10.671 15.5672 10.4925 15.2625 10.4925 15.0055C10.4925 14.8918 10.4939 14.6951 10.4958 14.4333C10.4995 13.912 10.5051 13.1325 10.5051 12.2359C10.5051 11.2917 10.1904 10.6874 9.8253 10.3727C12.0661 10.1209 14.4203 9.26489 14.4203 5.40006C14.4203 4.29222 14.03 3.3984 13.388 2.69341C13.4887 2.44163 13.8412 1.40933 13.2873 0.0245402C13.2873 0.0245402 12.4438 -0.252418 10.5177 1.05684C9.712 0.830238 8.85594 0.716937 7.99989 0.716937C7.14384 0.716937 6.28778 0.830238 5.48208 1.05684C3.55596 -0.239829 2.7125 0.0245402 2.7125 0.0245402C2.15858 1.40933 2.51107 2.44163 2.61178 2.69341C1.96974 3.3984 1.57948 4.30481 1.57948 5.40006C1.57948 9.2523 3.92104 10.1209 6.16189 10.3727C5.87234 10.6245 5.60797 11.0651 5.51985 11.7198C4.94075 11.9841 3.49302 12.4121 2.58661 10.8889C2.39777 10.5867 1.83126 9.84398 1.03815 9.85657C0.194689 9.86916 0.698251 10.335 1.05074 10.5238C1.47877 10.763 1.96974 11.6568 2.08304 11.9464C2.28447 12.5129 2.9391 13.5955 5.46949 13.1297C5.46949 13.6801 5.47485 14.209 5.47858 14.5766L5.47858 14.5767C5.48056 14.7724 5.48208 14.9224 5.48208 15.0055C5.48208 15.2699 5.29325 15.572 4.78968 15.4839C5.79666 15.8238 6.71566 16 7.97471 16Z" /> */}
					<path d="M7.975 16a9.39 9.39 0 003.169-.509c-.473.076-.652-.229-.652-.486l.004-.572c.003-.521.01-1.3.01-2.197 0-.944-.316-1.549-.68-1.863 2.24-.252 4.594-1.108 4.594-4.973 0-1.108-.39-2.002-1.032-2.707.1-.251.453-1.284-.1-2.668 0 0-.844-.277-2.77 1.032A9.345 9.345 0 008 .717c-.856 0-1.712.113-2.518.34C3.556-.24 2.712.025 2.712.025c-.553 1.384-.2 2.417-.1 2.668-.642.705-1.033 1.612-1.033 2.707 0 3.852 2.342 4.72 4.583 4.973-.29.252-.554.692-.642 1.347-.58.264-2.027.692-2.933-.831-.19-.302-.756-1.045-1.549-1.032-.843.012-.34.478.013.667.428.239.919 1.133 1.032 1.422.201.567.856 1.65 3.386 1.184 0 .55.006 1.079.01 1.447l.003.428c0 .265-.189.567-.692.479 1.007.34 1.926.516 3.185.516z"/>
				</svg>
				Star on GitHub
				<ExternalLinkSVG className="ml-1 w-4 h-4 text-indigo-400" />
			</p>
		</a>

	</>
)

export default ExtLinksFragment
