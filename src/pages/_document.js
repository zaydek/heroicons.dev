import NextDocument, { Html, Head, Main, NextScript } from "next/document"

class Document extends NextDocument {
	static async getInitialProps(ctx) {
		const initialProps = await NextDocument.getInitialProps(ctx)
		return { ...initialProps }
	}

	render() {
		return (
			<Html className="antialiased" lang="en">
				<Head>

					<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
					{process.env.NODE_ENV === "production" && (
						<script async src="https://cdn.splitbee.io/sb.js" />
					)}

					{/* Layout dark mode */}
					<style>
						{`
							html {
								/* cool-gray-50 */
								background-color: #f8fafc;
							}
							html.dark {
								/* cool-gray-950 */
								background-color: #0d1017;
							}
						`}
					</style>
					<script src="/scripts/layoutDarkMode.js" />

				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default Document
