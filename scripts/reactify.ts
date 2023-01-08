import { detab, tab } from "../src/utils/vanilla/format"

export function reactify({ href, name, svg }: { href: string, name: string, svg: string }) {
	const svgProps = svg.replace(/<svg ([^>]+)>/, "<svg $1 {...props}>")

	return detab(`
		import { SVGAttributes } from "react"

		// ${href}
		export function ${name}(props: SVGAttributes<SVGElement>) {
			return (
				${tab(svgProps, 4, { omitStart: true })}
			)
		}
	`) + "\n" // EOF
}
