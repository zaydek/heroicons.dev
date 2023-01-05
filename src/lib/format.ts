export function tab(str: string, count: number, { omitStart }: { omitStart?: boolean } = {}) {
	omitStart ??= false
	const lines = str.split("\n")
	return lines.map((line, index) => {
		if (omitStart && !index) {
			return line
		} else {
			if (line.length > 0) {
				return "\t".repeat(count) + line
			} else {
				return line
			}
		}
	}).join("\n")
}

export function detab(str: string) {
	const lines = str.trim().split("\n")
	const indexes = lines.map(line => {
		let index = 0
		while (index < line.length) {
			if (line[index] !== "\t") {
				break
			}
			index++
		}
		return index
	})
	const min = Math.min(...indexes.filter(index => index > 0))
	return lines.map(line => {
		if (!line || !line.startsWith("\t")) { return line }
		return line.slice(min)
	}).join("\n")
}

//// if (import.meta.vitest) {
//// 	const { expect, it: test } = import.meta.vitest
//// 	test("detab", () => {
//// 		expect(detab(`Hello, world!`)).toBe("Hello, world!")
//// 		expect(detab(`
//// Hello, world!
//// `)).toBe(`
//// Hello, world!
//// `)
//// 		expect(detab(`
//// 	Hello, world!
//// `)).toBe(`
//// Hello, world!
//// `)
//// 		expect(detab(`
//// 		Hello, world!
//// `)).toBe(`
//// Hello, world!
//// `)
//// 		expect(detab(`
//// 			Hello, world!
//// `)).toBe(`
//// Hello, world!
//// `)
//// 		expect(detab(`
//// 			Hello, world!
//// 			Hello, world!
//// `)).toBe(`
//// Hello, world!
//// Hello, world!
//// `)
//// 		expect(detab(`
//// 			Hello, world!
//// 			Hello, world!
////
//// 			Hello, world!
//// 			Hello, world!
//// `)).toBe(`
//// Hello, world!
//// Hello, world!
////
//// Hello, world!
//// Hello, world!
//// `)
//// 		expect(detab(`
////
//// 			Hello, world!
//// 			Hello, world!
////
//// 			Hello, world!
//// 			Hello, world!
////
//// `)).toBe(`
////
//// Hello, world!
//// Hello, world!
////
//// Hello, world!
//// Hello, world!
////
//// `)
//// 	})
//// 	test("tab", () => {
//// 		expect(tab("Hello, world!", 0)).toBe("Hello, world!")
//// 		expect(tab("Hello, world!", 1)).toBe("\tHello, world!")
//// 		expect(tab("Hello, world!", 2)).toBe("\t\tHello, world!")
//// 		expect(tab("Hello, world!", 3)).toBe("\t\t\tHello, world!")
//// 		expect(tab(`
//// Hello, world!
//// `, 0)).toBe("\nHello, world!\n")
//// 		expect(tab(`
//// Hello, world!
//// `, 1)).toBe("\n\tHello, world!\n")
//// 		expect(tab(`
//// 	Hello, world!
//// `, 1)).toBe("\n\t\tHello, world!\n")
//// 		expect(tab(`
//// 		Hello, world!
//// `, 1)).toBe("\n\t\t\tHello, world!\n")
//// 		expect(tab(`
//// 			Hello, world!
//// `, 1)).toBe("\n\t\t\t\tHello, world!\n")
//// 		expect(tab(`
//// 			Hello, world!
//// 			Hello, world!
//// `, 1)).toBe("\n\t\t\t\tHello, world!\n\t\t\t\tHello, world!\n")
//// 		expect(tab(`
//// 			Hello, world!
//// 			Hello, world!
////
//// 			Hello, world!
//// 			Hello, world!
//// `, 1)).toBe("\n\t\t\t\tHello, world!\n\t\t\t\tHello, world!\n\n\t\t\t\tHello, world!\n\t\t\t\tHello, world!\n")
//// 		expect(tab(`
////
//// 			Hello, world!
//// 			Hello, world!
////
//// 			Hello, world!
//// 			Hello, world!
////
//// `, 1)).toBe("\n\n\t\t\t\tHello, world!\n\t\t\t\tHello, world!\n\n\t\t\t\tHello, world!\n\t\t\t\tHello, world!\n\n")
//// 	})
//// }
