export function unvar(str: string) {
	if (!(str.startsWith("var(--") && str.endsWith(")"))) {
		throw new Error("Internal error")
	}
	return str.slice("var(".length, -1 * ")".length)
}
