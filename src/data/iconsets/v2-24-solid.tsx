import * as icons from "../heroicons@2.1.1/24/solid"
import type { manifest } from "../manifest@2.1.1"

import { createElement, SVGAttributes } from "react"

export default function Icon({ name, ...props }: { name: keyof typeof manifest } & SVGAttributes<SVGElement>) {
	// @ts-expect-error
	return createElement(icons[name], props)
}
