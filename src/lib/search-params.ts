// https://github.com/microsoft/TypeScript/issues/24509#issue-327938554
type Mutable<T> = T & {
	-readonly [P in keyof T]: T[P]
}

function createSearchParams(url: string) {
	const urlSearchParams = new URLSearchParams(url)
	return {
		bool({ key, initialValue }: { key: string, initialValue: boolean }) {
			const value = urlSearchParams.get(key)
			if (value === null) {
				// No-op; return initial value
				return initialValue
			}
			const parsedValue = value === "true" || value === "1"
			return parsedValue
		},
		number({ key, min, max, initialValue }: { key: string, min: number, max: number, initialValue: number }) {
			const value = urlSearchParams.get(key)
			if (value === null) {
				// No-op; return initial value
				return initialValue
			}
			const parsedValue = +value
			if (isNaN(parsedValue) || !(parsedValue >= min && parsedValue <= max)) { return initialValue }
			return parsedValue
		},
		string<T extends string>({ key, oneOf, initialValue }: { key: string, oneOf?: readonly T[], initialValue: T }) {
			const value = urlSearchParams.get(key)
			if (value === null) {
				// No-op; return initial value
				return initialValue as Mutable<T>
			}
			if (oneOf !== undefined && !oneOf.includes(value as T)) { return initialValue as Mutable<T> }
			return value as Mutable<T>
		},
	}
}

export const searchParams = createSearchParams(window.location.search)
