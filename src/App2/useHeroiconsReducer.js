import iconset from "./iconset"
import { useImmerReducer } from "use-immer"

const initialState = {
	darkMode: false,
	form: {
		search: "",
		family: "solid", // TODO,
	},
	results: iconset,
}

const actions = state => ({
	// Toggles dark mode.
	toggleDarkMode() {
		state.darkMode = !state.darkMode
	},
	// Updates form.search=text.
	updateFormSearch(text) {
		if (!text) {
			state.form.search = ""
			state.results = iconset
			return
		}
		state.form.search = text
		state.results = iconset.filter(each => {
			return each.tags.some(each => {
				return each.startsWith(text)
			})
		})
	},
	// Toggles form.family.
	toggleFormFamily() {
		if (state.form.family === "solid") {
			state.form.family = "outline"
		} else if (state.form.family === "outline") {
			state.form.family = "solid"
		}
	},
})

function HeroiconsReducer(state, action) {
	switch (action.type) {
	case "TOGGLE_DARK_MODE":
		actions(state).toggleDarkMode()
		return
	case "UPDATE_FORM_SEARCH":
		actions(state).updateFormSearch(action.text)
		return
	case "TOGGLE_FORM_FAMILY":
		actions(state).toggleFormFamily()
		return
	default:
		throw new Error(`HeroiconsReducer: type mismatch; action.type=${action.type}`)
	}
}

function useHeroiconsReducer() {
	return useImmerReducer(HeroiconsReducer, {}, () => initialState)
}

export default useHeroiconsReducer
