import dataset from "./dataset"
import { useImmerReducer } from "use-immer"

import CodeSolidSVG from "heroicons-82f6a4d/react/solid/Code"
import SwitchHorizontalSolidSVG from "heroicons-82f6a4d/react/solid/SwitchHorizontal"

// Generates a 4-character hash.
function shortHash() {
	return Math.random().toString(16).slice(2, 6)
}

const initialState = {
	form: {
		search: {
			user: "", // User search query
			safe: "", // App-safe search query
		},
		copyAsReact: false,
		showOutline: false,
	},
	notif: {
		showKey: "",
		notifType: "",
		notifInfo: null,
	},
	results: dataset,
}

const actions = state => ({
	/*
	 * state.form
	 */
	__internalResetSearch() {
		state.form.search.user = ""
		state.form.search.safe = ""
		state.results = dataset
	},
	updateFormSearch(text) {
		if (!text) {
			this.__internalResetSearch()
			return
		}
		state.form.search.user = text
		state.form.search.safe = text.toLowerCase().replace(/ /g, "-")
		if (state.form.search.safe === "new") {
			state.results = dataset.filter(each => each.statusNew)
			return
		}
		state.results = dataset.filter(each => {
			each.searchIndex = each.name.indexOf(state.form.search.safe)
			return each.searchIndex >= 0
		})
		state.results.sort((a, b) => {
			return a.searchIndex - b.searchIndex
		})
	},
	toggleFormCopyAsReact() {
		state.form.copyAsReact = !state.form.copyAsReact
		this.updateNotification("form-jsx", {
			name: "code",
			icon: CodeSolidSVG,
		})
	},
	toggleFormShowOutline() {
		state.form.showOutline = !state.form.showOutline
		this.updateNotification("form-alt", {
			name: "switch-horizontal",
			icon: SwitchHorizontalSolidSVG,
		})
	},
	/*
	 * state.notif
	 */
	updateNotification(notifType, notifInfo) {
		state.notif.showKey = notifInfo.icon.name + "-" + shortHash()
		state.notif.notifType = notifType
		state.notif.notifInfo = notifInfo
	},
	hideNotification() {
		state.notif.showKey = ""
	},
})

function HeroiconsReducer(state, action) {
	switch (action.type) {
	case "UPDATE_FORM_SEARCH":
		actions(state).updateFormSearch(action.text)
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
