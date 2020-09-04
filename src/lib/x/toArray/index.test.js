import toArray from "./index"

test("toArray(...)", () => {
	expect(toArray(undefined)).toEqual([undefined])
	expect(toArray(null)).toEqual([null])
	expect(toArray(0)).toEqual([0])
	expect(toArray([0])).toEqual([0])
	expect(toArray([[0]])).toEqual([[0]])
})
