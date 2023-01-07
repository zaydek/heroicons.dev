import { createElement, SVGAttributes } from "react";

export function Icon({ icon, ...props }: { icon: (_: SVGAttributes<SVGSVGElement>) => JSX.Element } & SVGAttributes<SVGSVGElement>) {
  return createElement(icon, props)
}
