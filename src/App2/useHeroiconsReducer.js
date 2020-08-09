import dataset from "./dataset"
import { useImmerReducer } from "use-immer"

const initialState = {
	form: {
		searchQuery: "",    // TODO
		copyAsReact: false,
		showOutline: false, // TODO
	},
	notif: {
		visible: false,
		notifType: "",
		notifInfo: null,
	},
	results: dataset,
}

const actions = state => ({

	/*
	 * state.form
	 */
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
	toggleFormCopyAsReact() {
		state.form.copyAsReact = !state.form.copyAsReact
	},
	toggleFormShowOutline() {
		state.form.showOutline = !state.form.showOutline
	},

	/*
	 * state.notif
	 */
	updateNotification(notifType, notifInfo) {
		state.notif.visible = true
		state.notif.notifType = notifType
		state.notif.notifInfo = notifInfo
	},
	hideNotification() {
		state.notif.visible = false
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
	case "UPDATE_NOTIFICATION":
		actions(state).updateNotification(action.notifType, action.notifInfo)
		return
	case "HIDE_NOTIFICATION":
		actions(state).hideNotification()
		return
	default:
		throw new Error(`HeroiconsReducer: type mismatch; action.type=${action.type}`)
	}
}

function useHeroiconsReducer() {
	return useImmerReducer(HeroiconsReducer, {}, () => initialState)
}

export default useHeroiconsReducer
