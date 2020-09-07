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
								background-color: #f8fafc;
								background-color: var(--cool-gray-50);
							}
							html.dark {
								background-color: #000000;
								background-color: var(--black);
							}
						`}
					</style>
					<script src="/scripts/layout-dark-mode.js" />

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
