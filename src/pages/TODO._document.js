import NextDocument, { Html, Head, Main, NextScript } from "next/document"

class Document extends NextDocument {
	static async getInitialProps(ctx) {
		const initialProps = await NextDocument.getInitialProps(ctx)
		return { ...initialProps }
	}

	render() {
		return (
			<Html /* className="bg-black" */>
				<Head />
					<title>
						Feathericons 2.0
					</title>
					<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default Document
