export function cx(...args: unknown[]) {
	const className = args
		.flat()
		.filter(Boolean)
		.join(" ")
		.replaceAll(/\s+/g, " ")
		.trim()
	return className === "" ? undefined : className
}
