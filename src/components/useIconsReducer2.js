import dataset from "data/dataset"
import React from "react"
import { useImmerReducer } from "use-immer"

import CodeSolidSVG from "heroicons-0.4.1/solid/Code"
import SwitchHorizontalSolidSVG from "heroicons-0.4.1/solid/SwitchHorizontal"

// Generates a 4-character hash.
function shortHash() {
	return Math.random().toString(16).slice(2, 6)
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
			all: false,
		},
		copyAs: {
			name: false,
			svgLiteral: true, // (Default)
			jsxLiteral: false,
			jsxImport: false,
			jsxComponent: false,
			bladeComponent: false,
			download: false,
		},
		theme: {
			lightMode: true, // (Default)
			darkMode: false,
		},
		// size: 32,
		// strokeWidth: 2,
		// classes: "{name}-{variant} w-6 h-6",
	},
	notif: {
		visible: false,
		type: {
			variant: false,
			copyAs: false,
			size: false,
			strokeWidth: false,
			classes: false,
		},
		description: "",
		icon: null,
	},
}

const actions = state => ({
	search(query) {
		state.search.query.user = query
		state.search.query.safe = query
			.trim()
			.toLowerCase()
			.replace(/ +/g, "-")
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
		// XOR:
		if (typeof value === "boolean") {
			Object.keys(state.controls[controlType]).map(each => {
				state.controls[controlType][each] = false
			})
		}
		state.controls[controlType][key] = value
	},

	// showControls() {
	// 	state.controls.visible
	// },
	// showControls() {
	// 	// ...
	// },
	// emitNotification(action.__type, action.description, action.icon) {
	// 	// ...
	// },
	// hideNotification() {
	// 	// ...
	// },
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
	// case "UPDATE_CONTROLS":
	// 	actions(state).updateControls(action.__type, )
	// 	return
	// case "EMIT_NOTIFICATION":
	// 	actions(state).emitNotification(action.__type, action.description, action.icon)
	// 	return
	// case "HIDE_NOTIFICATION":
	// 	actions(state).hideNotification()
	// 	return
	default:
		throw new Error(`IconsReducer: type mismatch; action.type=${action.type}`)
	}
}

function useIconsReducer() {
	return useImmerReducer(IconsReducer, {}, () => initialState)
}

export default useIconsReducer
