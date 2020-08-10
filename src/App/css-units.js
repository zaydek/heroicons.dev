// Converts Tailwind units to rem.
export function tw(units) {
	return `${units * 4 / 16}rem`
}

// Converts px to rem.
export function rem(px) {
	return `${px / 16}px`
}
