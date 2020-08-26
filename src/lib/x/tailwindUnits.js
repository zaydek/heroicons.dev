// Converts Tailwind units to rem units.
function tailwindUnits(units) {
	return `${units * 4 / 16}rem`
}

export default tailwindUnits
