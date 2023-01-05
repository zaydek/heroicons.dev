import { styled } from "./css/styled"

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

export const StyledRadio = styled({
	position: "relative",
	height: "$form-size",
	width: "$form-size",
	borderRadius: 1e3,
	backgroundColor: "$form-color",
	boxShadow: "$shadow",
	transition: "box-shadow 75ms cubic-bezier(0, 1, 0.25, 1.25)",
	"[role=radio][aria-checked=true] &": { boxShadow: "$inset-shadow" },
	"&:before": {
		content: "''",
		position: "absolute",
		inset: 0,
		borderRadius: "inherit",
		backgroundColor: "var(--color, $trim-color)",
		transform: "scale(0)",
		transition: "transform 75ms cubic-bezier(0, 1, 0.25, 1.25)",
		"[role=radio][aria-checked=true] &": {
			transform: "scale(1)",
		},
	},
})
export const StyledRadioIcon = styled({
	height: 10,
	width: 10,
	borderRadius: 1e3,
	backgroundColor: "WHITE",
	filter: "drop-shadow(0 1px 2px hsl(0, 0%, 0%, 0.1))",
	transform: "scale(0)",
	transition: "transform 75ms cubic-bezier(0, 1, 0.25, 1.25)",
	"[role=radio][aria-checked=true] &": {
		transform: "scale(1)",
	},
})

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

export const StyledCheckbox = styled({
	position: "relative",
	height: "$form-size",
	width: "$form-size",
	borderRadius: "calc($form-size * $magic-ratio)",
	backgroundColor: "$form-color",
	boxShadow: "$shadow",
	transition: "box-shadow 75ms cubic-bezier(0, 1, 0.25, 1.25)",
	"[role=checkbox][aria-checked=true] &": { boxShadow: "$inset-shadow" },
	"&:before": {
		content: "''",
		position: "absolute",
		inset: 0,
		borderRadius: "inherit",
		backgroundColor: "var(--color, $trim-color)",
		transform: "scale(0)",
		transition: "transform 75ms cubic-bezier(0, 1, 0.25, 1.25)",
		"[role=checkbox][aria-checked=true] &": {
			transform: "scale(1)",
		},
	},
})
export const StyledCheckboxIcon = styled({
	//// height: 12.5 - 12.5 % 2, // Use an even number here
	//// width:  12.5 - 12.5 % 2, // Use an even number here
	//// strokeWidth: 10,
	//// color: "WHITE",
	height: 10,
	width: 10,
	borderRadius: 1e3,
	backgroundColor: "WHITE",
	filter: "drop-shadow(0 1px 2px hsl(0, 0%, 0%, 0.1))",
	transform: "scale(0)",
	transition: "transform 75ms cubic-bezier(0, 1, 0.25, 1.25)",
	"[role=checkbox][aria-checked=true] &": {
		transform: "scale(1)",
	},
})

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

export const StyledSlider = styled({
	height: "calc($form-size + 4px)",
})
export const StyledSliderTrack = styled({
	height: 6,
	borderRadius: 1e3,
	backgroundImage: "linear-gradient(to right, $trim-color calc(var(--progress) * 100%), $hairline-color calc(var(--progress) * 100%))",
})
export const StyledSliderThumb = styled({
	height: "calc($form-size + 4px)",
	width: "calc($form-size + 4px)",
	borderRadius: 1e3,
	backgroundColor: "$form-color",
	boxShadow: "$shadow",
	transition: "box-shadow 75ms cubic-bezier(0, 1, 0.25, 1.25)",
})
