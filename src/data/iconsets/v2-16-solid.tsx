import * as icons from "../heroicons@2.1.1/16/solid"
import type { manifest } from "../manifest@2.0.13"

import { createElement, SVGAttributes } from "react"

export default function Icon({ name, ...props }: { name: keyof typeof manifest } & SVGAttributes<SVGElement>) {
	// @ts-expect-error
	return createElement(icons[name], props)
}
