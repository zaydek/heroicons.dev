import iconset from "./iconset"
import { useImmerReducer } from "use-immer"

const initialState = {
	darkMode: false,
	form: {
		searchQuery: "",
		copyAsReact: false,
		showOutline: false, // TODO,
	},
	results: iconset,
}

const actions = state => ({
	// Toggles dark mode.
	toggleDarkMode() {
		state.darkMode = !state.darkMode
	},
	// Updates form.searchQuery=text.
	updateFormSearchQuery(text) {
		text = text.toLowerCase()

		if (!text) {
			state.form.searchQuery = ""
			state.results = iconset
			return
		}
		state.form.searchQuery = text
		// state.results = iconset.filter(each => {
		// 	return each.tags.some(each => {
		// 		return each.startsWith(text)
		// 	})
		// })
		state.results = iconset.filter(each => {
			each.searchQueryIndex = each.name.indexOf(text)
			if (each.statusNew && text === "new") {
				return true
			}
			return each.searchQueryIndex >= 0
		})
		state.results.sort((a, b) => {
			return a.searchQueryIndex - b.searchQueryIndex
		})
	},
	// Toggles form.copyAsReact.
	toggleFormCopyAsReact() {
		state.form.copyAsReact = !state.form.copyAsReact
	},
	// Toggles form.showOutline.
	toggleFormShowOutline() {
		// if (state.form.showOutline === "solid") {
		// 	state.form.showOutline = "outline"
		// } else if (state.form.showOutline === "outline") {
		// 	state.form.showOutline = "solid"
		// }
		state.form.showOutline = !state.form.showOutline
	},
})

function HeroiconsReducer(state, action) {
	switch (action.type) {

	// case "TOGGLE_DARK_MODE":
	// 	actions(state).toggleDarkMode()
	// 	return

	case "UPDATE_FORM_SEARCH_QUERY":
		actions(state).updateFormSearchQuery(action.text)
		return
	case "TOGGLE_FORM_COPY_AS_REACT":
		actions(state).toggleFormCopyAsReact()
		return
	case "TOGGLE_FORM_SHOW_OUTLINE":
		actions(state).toggleFormShowOutline()
		return
	default:
		throw new Error(`HeroiconsReducer: type mismatch; action.type=${action.type}`)
	}
}

function useHeroiconsReducer() {
	return useImmerReducer(HeroiconsReducer, {}, () => initialState)
}

export default useHeroiconsReducer
