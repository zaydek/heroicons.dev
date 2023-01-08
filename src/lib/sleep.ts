export function sleep(durationMs: number) {
	return new Promise(resolve => setTimeout(resolve, durationMs))
}
