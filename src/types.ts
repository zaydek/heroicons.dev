export const Iconsets = [
	"v1-20-solid",
	"v1-24-outline",
	"v2-20-solid",
	"v2-24-outline",
	"v2-24-solid",
] as const

export type IconsetValue = typeof Iconsets[number]

export const CopyAs = [
	"code",
	"name",
] as const

export type CopyAsValue = typeof CopyAs[number]

export const Frameworks = [
	"svg",
	"react",
	"vue",
] as const

export type FrameworkValue = typeof Frameworks[number]
