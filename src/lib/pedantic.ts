export function isSafeValue(value: unknown) {
	return value !== undefined && value !== null
}

export function isStrictArray(value: unknown) {
	return isSafeValue(value) &&
		(typeof value === "object" && Array.isArray(value))
}

export function isStrictObject(value: unknown) {
	return isSafeValue(value) &&
		(typeof value === "object" && !Array.isArray(value))
}
