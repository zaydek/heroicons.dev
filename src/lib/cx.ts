export function cx(...args: unknown[]) {
	const className = args
		.flat()
		.filter(Boolean)
		.join(" ")
		.trim()
		.replaceAll(/\s+/g, " ")
	return className === "" ? undefined : className
}
