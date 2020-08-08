import dataset from "./dataset"
import { useImmerReducer } from "use-immer"

const initialState = {
	// darkMode: false,

	form: {
		searchQuery: "",
		copyAsReact: false,
		showOutline: false, // TODO,
	},
	results: dataset,
	showClipboardIconNotification: false,
	clipboardIcon: "",
}

// Generates a 4-character hash.
function shortHash() {
	return Math.random().toString(16).slice(2, 6)
}

const actions = state => ({
	// Updates state.form.searchQuery=text.
	updateFormSearchQuery(text) {
		text = text.toLowerCase()
		if (!text) {
			state.form.searchQuery = ""
			state.results = dataset
			return
		}
		state.form.searchQuery = text
		state.results = dataset.filter(each => {
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
	// Toggles state.form.copyAsReact.
	toggleFormCopyAsReact() {
		state.form.copyAsReact = !state.form.copyAsReact
	},
	// Toggles state.form.showOutline.
	toggleFormShowOutline() {
		state.form.showOutline = !state.form.showOutline
	},
	// Updates state.showClipboardIconNotification and
	// state.clipboardIcon.
	updateClipboardIcon(icon) {
		// NOTE: Uses shortHash(...) so
		// showClipboardIconNotification used as an effect
		// dependency is never deeply equal.
		state.showClipboardIconNotification = icon.name + "-" + shortHash()
		state.clipboardIcon = icon
	},
	// Updates state.showClipboardIconNotification.
	hideClipboardIconNotification() {
		state.showClipboardIconNotification = false
	},
})

function HeroiconsReducer(state, action) {
	switch (action.type) {
	case "UPDATE_FORM_SEARCH_QUERY":
		actions(state).updateFormSearchQuery(action.text)
		return
	case "TOGGLE_FORM_COPY_AS_REACT":
		actions(state).toggleFormCopyAsReact()
		return
	case "TOGGLE_FORM_SHOW_OUTLINE":
		actions(state).toggleFormShowOutline()
		return
	case "UPDATE_CLIPBOARD_ICON":
		actions(state).updateClipboardIcon(action.icon)
		return
	case "HIDE_CLIPBOARD_ICON_NOTIFICATION":
		actions(state).hideClipboardIconNotification()
		return
	default:
		throw new Error(`HeroiconsReducer: type mismatch; action.type=${action.type}`)
	}
}

function useHeroiconsReducer() {
	return useImmerReducer(HeroiconsReducer, {}, () => initialState)
}

export default useHeroiconsReducer
