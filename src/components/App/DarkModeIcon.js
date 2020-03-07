import * as Hero from "components/Heroicons"
import React from "react"

const DarkModeIcon = ({ darkMode, ...props }) => {
	let Component = null
	if (!darkMode) {
		Component = Hero.SunOutlineMd
	} else {
		Component = Hero.SunSolidSm
	}
	return <Component {...props} />
}

export default DarkModeIcon
