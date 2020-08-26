import svgToJSX from "./svgToJSX"

test("svgToJSX(...)", () => {
	/* eslint-disable quotes */
	const adjustments = `<svg viewBox="0 0 20 20" fill="currentColor" class="arrow-narrow-right w-6 h-6"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>`
	expect(svgToJSX(adjustments)).toBe(`<svg viewBox="0 0 20 20" fill="currentColor" className="arrow-narrow-right w-6 h-6"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>`)
	/* eslint-enable */

	/* eslint-disable quotes */
	const adjustmentsAlt = `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="arrow-narrow-right w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>`
	expect(svgToJSX(adjustmentsAlt)).toBe(`<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="arrow-narrow-right w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>`)
	/* eslint-enable */
})
