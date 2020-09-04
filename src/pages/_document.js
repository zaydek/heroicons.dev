import NextDocument, { Html, Head, Main, NextScript } from "next/document"

class Document extends NextDocument {
	static async getInitialProps(ctx) {
		const initialProps = await NextDocument.getInitialProps(ctx)
		return { ...initialProps }
	}

	render() {
		return (
			<Html className="bg-gray-50 antialiased" lang="en">
				<Head />
				<title>
					Heroicons
				</title>
				<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
				{/* <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@500&display=swap&text=abcdefghijklmnopqrstuvwxyz" rel="stylesheet" /> */}
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
