import Head from "next/head"

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
			href="/static/favicon.ico"
		/>
		<title>
			Heroicons — Open Source SVG Icons
		</title>
		<meta
			name="title"
			content="Heroicons — Open Source SVG Icons"
		/>
		<meta
			name="description"
			content="Beautiful, free MIT-licensed SVG icons, designed by Steve Schoger. 200+ icons solid and stroke icons, one-click copy-paste, dark mode, and Figma file."
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
			content="Heroicons — Open Source SVG Icons"
		/>
		<meta
			property="og:description"
			content="Beautiful, free MIT-licensed SVG icons, designed by Steve Schoger. 200+ icons solid and stroke icons, one-click copy-paste, dark mode, and Figma file."
		/>
		<meta
			property="og:image"
			content="/static/social.png"
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
			content="Heroicons — Open Source SVG Icons"
		/>
		<meta
			property="twitter:description"
			content="Beautiful, free MIT-licensed SVG icons, designed by Steve Schoger. 200+ icons solid and stroke icons, one-click copy-paste, dark mode, and Figma file."
		/>
		<meta
			property="twitter:image"
			content="/static/social.png"
		/>

	</Head>
)

export default SEO
