// https://stackoverflow.com/a/27862868
export function isMac() {
	return navigator.platform.includes("Mac")
}

export function isWin() {
	return navigator.platform.includes("Win")
}
