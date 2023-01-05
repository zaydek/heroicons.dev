import { manifest as manifestV1 } from "./data/manifest@1.0.6"
import { manifest as manifestV2 } from "./data/manifest@2.0.13"

import { lazy, LazyExoticComponent } from "react"
import { IconsetValue } from "./types"

export type CacheEntry = readonly [
  Manifest: typeof manifestV1 | typeof manifestV2,
  Icon:     LazyExoticComponent<any>,
]

function createCache() {
	const cache = new Map<IconsetValue, CacheEntry>()
	function has(iconset: IconsetValue) {
		return cache.has(iconset)
	}
	function get(iconset: IconsetValue) {
		if (cache.has(iconset)) {
			return cache.get(iconset)!
		} else {
			let manifest: typeof manifestV1 | typeof manifestV2
			let Icon: LazyExoticComponent<any>
			switch (iconset) {
				case "v1-20-solid":
					manifest = manifestV1
					Icon = lazy(() => import("./data/iconsets/v1-20-solid"))
					break
				case "v1-24-outline":
					manifest = manifestV1
					Icon = lazy(() => import("./data/iconsets/v1-24-outline"))
					break
				case "v2-20-solid":
					manifest = manifestV2
					Icon = lazy(() => import("./data/iconsets/v2-20-solid"))
					break
				case "v2-24-outline":
					manifest = manifestV2
					Icon = lazy(() => import("./data/iconsets/v2-24-outline"))
					break
				case "v2-24-solid":
					manifest = manifestV2
					Icon = lazy(() => import("./data/iconsets/v2-24-solid"))
					break
			}
			cache.set(iconset, [manifest, Icon] as const)
			return [manifest, Icon] as const
		}
	}
	return { has, get }
}

export const cache = createCache()
