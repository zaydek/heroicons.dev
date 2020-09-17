import Head from "next/head"

const TITLE = "Heroicons – Free Open Source SVG Icon Library"
const DESCRIPTION = "New MIT open source SVG icon library designed by Steve Schoger. Solid and stroke variants, one-click copy-paste, and Figma file. Built with Tailwind CSS."

const SEO = () => (
	<Head>

		<meta
			charSet="utf-8"
		/>
		<meta
			name="viewport"
			content="width=device-width, initial-scale=1"
		/>
		<link
			rel="icon"
			href="https://heroicons.dev/static/favicon.ico"
		/>
		<title>
			{TITLE}
		</title>
		<meta
			name="title"
			content={TITLE}
		/>
		<meta
			name="description"
			content={DESCRIPTION}
		/>

		{/* Facebook */}
		<meta
			property="og:type"
			content="website"
		/>
		<meta
			property="og:url"
			content="https://heroicons.dev"
		/>
		<meta
			property="og:title"
			content={TITLE}
		/>
		<meta
			property="og:description"
			content={DESCRIPTION}
		/>
		<meta
			property="og:image"
			content="https://heroicons.dev/static/social.png"
		/>

		{/* Twitter */}
		<meta
			property="twitter:card"
			content="summary_large_image"
		/>
		<meta
			property="twitter:url"
			content="https://heroicons.dev"
		/>
		<meta
			property="twitter:title"
			content={TITLE}
		/>
		<meta
			property="twitter:description"
			content={DESCRIPTION}
		/>
		<meta
			property="twitter:image"
			content="https://heroicons.dev/static/social.png"
		/>

		{/* New */}
		<meta
			name="twitter:creator"
			content="@username_ZAYDEK"
		/>

	</Head>
)

export default SEO
