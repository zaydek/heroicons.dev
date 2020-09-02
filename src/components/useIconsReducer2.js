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
		query: "",
		results: dataset, // NOTE: Do not marshal to localStorage.
	},
	controls: {
		show: true,
		variant: {
			solid: true,
			outline: false,
			all: false,
		},
		copyAs: {
			name: false,
			svgLiteral: true,
			jsxLiteral: false,
			jsxImport: false,
			jsxComponent: false,
			bladeComponent: false,
			download: false,
		},
		size: 32,
		strokeWidth: 2,
		classes: "{name}-{variant} w-6 h-6",
	},
	notif: {
		show: false,
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
		state.query = query
		// state.results =
	},
	// showControls() {
	// 	state.controls.show
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
	// case "TOGGLE_CONTROLS":
	// 	actions(state).toggleControls()
	// 	return
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
