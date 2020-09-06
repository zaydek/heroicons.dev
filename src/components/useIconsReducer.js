import dataset from "data/dataset"
import { useImmerReducer } from "use-immer"

// Disables all properties of an object (sets to false).
function disableAll(obj) {
	Object.keys(obj).map(each => {
		obj[each] = false
	})
}

// NOTE: Do not marshal to localStorage; change results to
// _results?
const initialState = {
	search: {
		query: {
			user: "",
			safe: "",
		},
		results: dataset,
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
	notif: {
		visible: false,
		controlType: {
			variant: false,
			copyAs: false,
			theme: false,
		},
		context: "", // TODO: Rename?
	},
}

// state.results = dataset.filter(each => {
// 	// each.searchIndex = each.name.indexOf(state.form.search.safe)
// 	// return each.searchIndex >= 0
//
// 	// FIXME
// 	return true
// })
// state.results.sort((a, b) => {
// 	return a.searchIndex - b.searchIndex
// })

const actions = state => ({
	search(query) {
		state.search.query.user = query
		state.search.query.safe = query.trim().toLowerCase().replace(/ +/g, "-")
		const safe = state.search.query.safe
		if (safe === "") {
			state.search.results = dataset
			return
		}
		if (safe === "new") {
			state.search.results = dataset.filter(each => each.new)
			return
		}
		state.search.results = dataset.filter(each => {
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
		this.emitNotification(controlType)
	},
	emitNotification(controlType, context = "") {
		state.notif.visible = true
		disableAll(state.notif.controlType)
		state.notif.controlType[controlType] = true
		state.notif.context = context
	},
	hideNotification() {
		state.notif.visible = false
	},
})

function IconsReducer(state, action) {
	switch (action.type) {
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
