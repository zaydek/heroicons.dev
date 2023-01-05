import type { manifest } from "../manifest@2.0.13"
import * as icons from "../heroicons@2.0.13/20/solid"

import { createElement, SVGAttributes } from "react"

export default function Icon({ name, ...props }: { name: keyof typeof manifest } & SVGAttributes<SVGElement>) {
	// @ts-expect-error
	return createElement(icons[name], props)
}
