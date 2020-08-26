import Apply from "lib/x/Apply"
import ExternalLinkSVG from "heroicons-0.4.0/solid/ExternalLink"
import target_blank from "lib/x/target_blank"

const ExtLinksFragment = () => (
	<>

		{/* Twitter (1) */}
		<a className="block" href="https://twitter.com/intent/tweet?text=Thanks%20@steveschoger%20for%20Heroicons%20and%20@username_ZAYDEK%20for%20heroicons.dev!&url=https://heroicons.dev" {...target_blank}>
			<p className="flex flex-row items-center font-medium text-gray-200">
				<Apply className="mr-2 w-5 h-5" style={{ color: "#1da1f2" }}>
					<svg fill="currentColor" viewBox="0 0 24 24">
						<path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" />
					</svg>
				</Apply>
				Tweet thank you on Twitter!
				<ExternalLinkSVG className="ml-1 w-4 h-4 text-indigo-400" />
			</p>
		</a>

		{/* GitHub */}
		<a className="block" href="https://github.com/codex-zaydek/heroicons.dev" {...target_blank}>
			<p className="flex flex-row items-center font-medium text-gray-200">
				<Apply className="mr-2 w-5 h-5">
					<svg fill="currentColor" viewBox="0 0 16 16">
						<path d="M7.975 16a9.39 9.39 0 003.169-.509c-.473.076-.652-.229-.652-.486l.004-.572c.003-.521.01-1.3.01-2.197 0-.944-.316-1.549-.68-1.863 2.24-.252 4.594-1.108 4.594-4.973 0-1.108-.39-2.002-1.032-2.707.1-.251.453-1.284-.1-2.668 0 0-.844-.277-2.77 1.032A9.345 9.345 0 008 .717c-.856 0-1.712.113-2.518.34C3.556-.24 2.712.025 2.712.025c-.553 1.384-.2 2.417-.1 2.668-.642.705-1.033 1.612-1.033 2.707 0 3.852 2.342 4.72 4.583 4.973-.29.252-.554.692-.642 1.347-.58.264-2.027.692-2.933-.831-.19-.302-.756-1.045-1.549-1.032-.843.012-.34.478.013.667.428.239.919 1.133 1.032 1.422.201.567.856 1.65 3.386 1.184 0 .55.006 1.079.01 1.447l.003.428c0 .265-.189.567-.692.479 1.007.34 1.926.516 3.185.516z"/>
					</svg>
				</Apply>
				Star on GitHub
				<ExternalLinkSVG className="ml-1 w-4 h-4 text-indigo-400" />
			</p>
		</a>

	</>
)

export default ExtLinksFragment
