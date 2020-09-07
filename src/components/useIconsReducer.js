import dataset from "data/dataset"
import merge from "lodash/merge"
import { useImmerReducer } from "use-immer"

// Disables all properties of an object (sets to false).
function disableAll(obj) {
	Object.keys(obj).map(each => {
		obj[each] = false
	})
}

const initialState = {
	search: {
		query: {
			user: "",
			__safe: "",
		},
		__results: dataset,
	},
	controls: {
		variant: {
			solid: false,
			outline: true, // (Default)
		},
		copyAs: {
			svg: true, // (Default)
			jsx: false,
		},
		theme: {
			lightMode: true, // (Default) // TODO
			darkMode: false,
		},
	},
	__toast: {
		key: "",
		value: "",
		visible: false,
	},
}

// state.__results = dataset.filter(each => {
// 	// each.searchIndex = each.name.indexOf(state.form.search.__safe)
// 	// return each.searchIndex >= 0
//
// 	// FIXME
// 	return true
// })
// state.__results.sort((a, b) => {
// 	return a.searchIndex - b.searchIndex
// })

const actions = state => ({
	restorePreferences(localStoragePrefs) {
		merge(state, localStoragePrefs)
		this.showToast("localStorage")
	},
	search(query) {
		state.search.query.user = query
		state.search.query.__safe = query.trim().toLowerCase().replace(/ +/g, "-")
		const safe = state.search.query.__safe
		if (safe === "") {
			state.search.__results = dataset
			return
		}
		if (safe === "new") {
			state.search.__results = dataset.filter(each => each.new)
			return
		}
		state.search.__results = dataset.filter(each => {
			return each.tags.some(each => {
				return each.startsWith(safe)
			})
		})
	},
	updateControls(controlType, key, value) {
		if (typeof value === "boolean") {
			disableAll(state.controls[controlType])
		}
		state.controls[controlType][key] = value
		this.showToast(`${controlType}:${key}`)
	},
	showToast(key, value = "") {
		state.__toast.key = key
		state.__toast.value = value
		state.__toast.visible = true
	},
	hideToast() {
		state.__toast.visible = false
	},
})

function IconsReducer(state, action) {
	switch (action.type) {
	case "RESTORE_PREFERENCES":
		actions(state).restorePreferences(action.localStoragePrefs)
		return
	case "SEARCH":
		actions(state).search(action.query)
		return
	case "UPDATE_CONTROLS":
		actions(state).updateControls(action.controlType, action.key, action.value)
		return
	case "SHOW_TOAST":
		actions(state).showToast(action.key, action.value)
		return
	case "HIDE_TOAST":
		actions(state).hideToast()
		return
	default:
		throw new Error(`IconsReducer: type mismatch; action.type=${action.type}`)
	}
}

function useIconsReducer() {
	return useImmerReducer(IconsReducer, {}, () => initialState)
}

export default useIconsReducer
