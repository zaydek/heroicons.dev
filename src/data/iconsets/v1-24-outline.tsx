import type { manifest } from "../manifest@1.0.6"
import * as icons from "../heroicons@1.0.6/outline"

import { createElement, SVGAttributes } from "react"

export default function Icon({ name, ...props }: { name: keyof typeof manifest } & SVGAttributes<SVGElement>) {
	// @ts-expect-error
	return createElement(icons[name], props)
}
