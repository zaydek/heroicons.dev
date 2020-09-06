import NextDocument, { Html, Head, Main, NextScript } from "next/document"

class Document extends NextDocument {
	static async getInitialProps(ctx) {
		const initialProps = await NextDocument.getInitialProps(ctx)
		return { ...initialProps }
	}

	render() {
		return (
			<Html className="bg-gray-50 dark:bg-black antialiased" lang="en">
				<Head />
				<title>
					Heroicons
				</title>

				{/* Meta */}
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/static/favicon.ico" />
				<title>Heroicons – MIT Open Source Icons by Steve Schoger.</title>
				<meta name="title" content="Heroicons – MIT Open Source Icons by Steve Schoger." />
				<meta name="description" content="A set of free MIT-licensed high-quality SVG icons for you to use in your web projects." />

				{/* Facebook */}
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://heroicons.dev" />
				<meta property="og:title" content="Heroicons – MIT Open Source Icons by Steve Schoger." />
				<meta property="og:description" content="A set of free MIT-licensed high-quality SVG icons for you to use in your web projects." />
				<meta property="og:image" content="/static/social.png" />

				{/* Twitter */}
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://heroicons.dev" />
				<meta property="twitter:title" content="Heroicons – MIT Open Source Icons by Steve Schoger." />
				<meta property="twitter:description" content="A set of free MIT-licensed high-quality SVG icons for you to use in your web projects." />
				<meta property="twitter:image" content="/static/social.png" />

				<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
				<script async src="https://cdn.splitbee.io/sb.js" />
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default Document
