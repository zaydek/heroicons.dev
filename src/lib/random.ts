export type Base = keyof typeof bases

const bases = {
	"base_26": "abcdefghijklmnopqrstuvwxyz",
	"base_36":
		"abcdefghijklmnopqrstuvwxyz" +
		"0123456789",
	"BASE_26": "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
	"BASE_36":
		"ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
		"0123456789",
	"base_52":
		"abcdefghijklmnopqrstuvwxyz" +
		"ABCDEFGHIJKLMNOPQRSTUVWXYZ",
	"base_62":
		"abcdefghijklmnopqrstuvwxyz" +
		"ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
		"0123456789",
}

// Deterministic random number generator
//
// https://stackoverflow.com/a/19303725
export function createRandomFactory(seed?: number) {
	seed ??= 1 as number
	return () => {
		const x = Math.sin(seed!++) * 10_000
		return x - Math.floor(x)
	}
}

// Generates a random hash from a base and random number generator
export function createHash(random: () => number, { base, length }: { base: Base, length: number }) {
	const charset = bases[base]
	let hashStr = ""
	for (let index = 0; index < length; index++) {
		hashStr += charset[Math.floor(random() * charset.length)]
	}
	return hashStr
}
