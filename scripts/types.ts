// This is for Playwright because of Page.evaluate
declare global {
	interface Window {
		toTitleCase: (_: string) => Promise<string>
		toCamelCase: (_: string) => Promise<string>
	}
}

export type Meta = {
	meta: {
		package: string
		version: string
		created: string
	}
}

export type Dataset = Meta & {
	payload: {
		name: {
			kebab: string
			camel: string
			title: string
		},
		[key: number]: {
			[key: string]: { href: string, svg: string, jsx: string }
		},
	}[]
}

export type Manifest = Meta & {
	payload: {
		kebab: string
		camel: string
		title: string
	}[]
}
