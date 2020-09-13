import Head from "next/head"

const seo = {
	title: "Heroicons – Open Source SVG Icon Library",
	description: "New, MIT open source SVG icon library designed by Steve Schoger. Solid and stroke variants, one-click copy-paste, and Figma file. Built with Tailwind CSS."
}

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
			{seo.title}
		</title>
		<meta
			name="title"
			content={seo.title}
		/>
		<meta
			name="description"
			content={seo.description}
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
			content={seo.title}
		/>
		<meta
			property="og:description"
			content={seo.description}
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
			content={seo.title}
		/>
		<meta
			property="twitter:description"
			content={seo.description}
		/>
		<meta
			property="twitter:image"
			content="https://heroicons.dev/static/social.png"
		/>

	</Head>
)

export default SEO
