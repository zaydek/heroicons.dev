// Converts rems to rems.
export const rem = rem => rem + "rem"

// Converts pxs to rems.
export const px = px => (px / 16) + "rem"

// Converts Tailwind CSS units to rems.
export const tw = tw => (tw * 4 / 16) + "rem"
