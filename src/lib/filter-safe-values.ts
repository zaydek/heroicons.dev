import { isSafeValue } from "./pedantic"

export function filterSafeValues<T extends {}>(ref: T) {
	return Object.fromEntries(
		Object.entries(ref).filter(
			([, value]) => isSafeValue(value))) as T
}
