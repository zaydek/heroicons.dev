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
	__notif: {
		visible: false,
		controlType: {
			variant: false,
			copyAs: false,
			theme: false,
		},
		context: "", // TODO: Rename?
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
	restorePreferences(prefs) {
		merge(state, prefs)
		// TODO
		console.log(JSON.parse(JSON.stringify(state)))
	},
	search(query) {
		state.search.query.user = query
		state.search.query.__safe = query.trim().toLowerCase().replace(/ +/g, "-")
		const __safe = state.search.query.__safe
		if (__safe === "") {
			state.search.__results = dataset
			return
		}
		if (__safe === "new") {
			state.search.__results = dataset.filter(each => each.new)
			return
		}
		state.search.__results = dataset.filter(each => {
			return each.tags.some(each => {
				return each.startsWith(__safe)
			})
		})
	},
	updateControls(controlType, key, value) {
		if (typeof value === "boolean") {
			disableAll(state.controls[controlType])
		}
		state.controls[controlType][key] = value
		this.emitNotification(controlType)
	},
	emitNotification(controlType, context = "") {
		state.__notif.visible = true
		disableAll(state.__notif.controlType)
		state.__notif.controlType[controlType] = true
		state.__notif.context = context
	},
	hideNotification() {
		state.__notif.visible = false
	},
})

function IconsReducer(state, action) {
	switch (action.type) {
	case "RESTORE_PREFERENCES":
		actions(state).restorePreferences(action.prefs)
		return
	case "SEARCH":
		actions(state).search(action.query)
		return
	case "UPDATE_CONTROLS":
		actions(state).updateControls(action.controlType, action.key, action.value)
		return
	case "EMIT_NOTIFICATION":
		actions(state).emitNotification(action.controlType, action.context)
		return
	case "HIDE_NOTIFICATION":
		actions(state).hideNotification()
		return
	default:
		throw new Error(`IconsReducer: type mismatch; action.type=${action.type}`)
	}
}

function useIconsReducer() {
	return useImmerReducer(IconsReducer, {}, () => initialState)
}

export default useIconsReducer
