import originalDataset from "data/dataset"
import React from "react"
import { useImmerReducer } from "use-immer"

import CodeSolidSVG from "heroicons-0.4.1/solid/Code"
import SwitchHorizontalSolidSVG from "heroicons-0.4.1/solid/SwitchHorizontal"

// Generates a 4-character hash.
function shortHash() {
	return Math.random().toString(16).slice(2, 6)
}

const dataset = originalDataset

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
			// each.searchIndex = each.name.indexOf(state.form.search.safe)
			// return each.searchIndex >= 0

			// FIXME
			return true
		})
		state.results.sort((a, b) => {
			return a.searchIndex - b.searchIndex
		})
	},
	toggleFormCopyAsReact() {
		state.form.copyAsReact = !state.form.copyAsReact
		this.updateNotification("form-jsx", {
			name: "code",
			icon: !state.form.copyAsReact
				? CodeSolidSVG
				: props => (
					// <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="arrow-circle-left w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" /></svg>
					<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
						<path d="M12 9.861A2.139 2.139 0 1 0 12 14.139 2.139 2.139 0 1 0 12 9.861zM6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.133.467zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 0 1 1.182-3.046A24.752 24.752 0 0 1 5.317 8.95zM17.992 16.255l-.133-.469a23.357 23.357 0 0 0-1.364-3.577l-.101-.213.101-.213a23.42 23.42 0 0 0 1.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.14s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 0 1-1.182 3.046zM5.31 8.945l-.133-.467C4.188 4.992 4.488 2.494 6 1.622c1.483-.856 3.864.155 6.359 2.716l.34.349-.34.349a23.552 23.552 0 0 0-2.422 2.967l-.135.193-.235.02a23.657 23.657 0 0 0-3.785.61l-.472.119zm1.896-6.63c-.268 0-.505.058-.705.173-.994.573-1.17 2.565-.485 5.253a25.122 25.122 0 0 1 3.233-.501 24.847 24.847 0 0 1 2.052-2.544c-1.56-1.519-3.037-2.381-4.095-2.381zM16.795 22.677c-.001 0-.001 0 0 0-1.425 0-3.255-1.073-5.154-3.023l-.34-.349.34-.349a23.53 23.53 0 0 0 2.421-2.968l.135-.193.234-.02a23.63 23.63 0 0 0 3.787-.609l.472-.119.134.468c.987 3.484.688 5.983-.824 6.854a2.38 2.38 0 0 1-1.205.308zm-4.096-3.381c1.56 1.519 3.037 2.381 4.095 2.381h.001c.267 0 .505-.058.704-.173.994-.573 1.171-2.566.485-5.254a25.02 25.02 0 0 1-3.234.501 24.674 24.674 0 0 1-2.051 2.545zM18.69 8.945l-.472-.119a23.479 23.479 0 0 0-3.787-.61l-.234-.02-.135-.193a23.414 23.414 0 0 0-2.421-2.967l-.34-.349.34-.349C14.135 1.778 16.515.767 18 1.622c1.512.872 1.812 3.37.824 6.855l-.134.468zM14.75 7.24c1.142.104 2.227.273 3.234.501.686-2.688.509-4.68-.485-5.253-.988-.571-2.845.304-4.8 2.208A24.849 24.849 0 0 1 14.75 7.24zM7.206 22.677A2.38 2.38 0 0 1 6 22.369c-1.512-.871-1.812-3.369-.823-6.854l.132-.468.472.119c1.155.291 2.429.496 3.785.609l.235.02.134.193a23.596 23.596 0 0 0 2.422 2.968l.34.349-.34.349c-1.898 1.95-3.728 3.023-5.151 3.023zm-1.19-6.427c-.686 2.688-.509 4.681.485 5.254.987.563 2.843-.305 4.8-2.208a24.998 24.998 0 0 1-2.052-2.545 24.976 24.976 0 0 1-3.233-.501zM12 16.878c-.823 0-1.669-.036-2.516-.106l-.235-.02-.135-.193a30.388 30.388 0 0 1-1.35-2.122 30.354 30.354 0 0 1-1.166-2.228l-.1-.213.1-.213a30.3 30.3 0 0 1 1.166-2.228c.414-.716.869-1.43 1.35-2.122l.135-.193.235-.02a29.785 29.785 0 0 1 5.033 0l.234.02.134.193a30.006 30.006 0 0 1 2.517 4.35l.101.213-.101.213a29.6 29.6 0 0 1-2.517 4.35l-.134.193-.234.02c-.847.07-1.694.106-2.517.106zm-2.197-1.084c1.48.111 2.914.111 4.395 0a29.006 29.006 0 0 0 2.196-3.798 28.585 28.585 0 0 0-2.197-3.798 29.031 29.031 0 0 0-4.394 0 28.477 28.477 0 0 0-2.197 3.798 29.114 29.114 0 0 0 2.197 3.798z" />
					</svg>
				)
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

function IconsReducer(state, action) {
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
		throw new Error(`IconsReducer: type mismatch; action.type=${action.type}`)
	}
}

function useIconsReducer() {
	return useImmerReducer(IconsReducer, {}, () => initialState)
}

export default useIconsReducer
