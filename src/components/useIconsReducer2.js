import dataset from "data/dataset"
import React from "react"
import { useImmerReducer } from "use-immer"

import CodeSolidSVG from "heroicons-0.4.1/solid/Code"
import SwitchHorizontalSolidSVG from "heroicons-0.4.1/solid/SwitchHorizontal"

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
			safe: "",
		},
		results: dataset, // NOTE: Do not marshal to localStorage.
	},
	controls: {
		variant: {
			solid: false,
			outline: true, // (Default)
			// all: false,
		},
		copyAs: {
			// name: false,
			svgLiteral: true, // (Default)
			jsxLiteral: false,
			// jsxImport: false,
			// jsxComponent: false,
			// bladeComponent: false,
			// download: false,
		},
		// theme: {
		// 	lightMode: true, // (Default)
		// 	darkMode: false,
		// },
		// size: 32,
		// strokeWidth: 2,
		// classes: "{name}-{variant} w-6 h-6",
	},
	notif: {
		visible: false,
		controlType: {
			variant: false,
			copyAs: false,
			// theme: false,
			// size: false,
			// strokeWidth: false,
			// classes: false,
		},
		context: "",
	},
}

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
	toggleShowControls() {
		state.controls.visible = !state.controls.visible
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
	case "TOGGLE_SHOW_CONTROLS":
		actions(state).toggleShowControls()
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
