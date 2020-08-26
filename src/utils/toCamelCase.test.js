import toCamelCase from "./toCamelCase"

test("toCamelCase(...)", () => {
	expect(toCamelCase("")).toBe("")
	expect(toCamelCase("hello")).toBe("Hello")
	expect(toCamelCase("hello-world")).toBe("HelloWorld")
})
