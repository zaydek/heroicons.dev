import "./layout.scss"
import "./form.scss"
import "./typography.scss"

import { createStyled } from "../lib/react/create-styled"

// Layout
export const SearchBarContainer     = createStyled("search-bar-container")
export const SearchBarMask          = createStyled("search-bar-mask")
export const MainContainer          = createStyled("main-container")
export const Sidebar1               = createStyled("sidebar-1")
export const Sidebar2               = createStyled("sidebar-2")
export const Sidebar2Backdrop       = createStyled("sidebar-2-backdrop")

// Form
export const Radio                  = createStyled("radio")
export const RadioIcon              = createStyled("radio-icon")
export const Checkbox               = createStyled("checkbox")
export const CheckboxIcon           = createStyled("checkbox-icon")
export const Slider                 = createStyled("slider")
export const SliderTrack            = createStyled("slider-track")
export const SliderThumb            = createStyled("slider-thumb")

// Typography
export const TypographySearchBar    = createStyled("typography-search-bar")    // TODO
export const TypographySearchResult = createStyled("typography-search-result") // TODO
export const TypographySans         = createStyled("typography-sans")
export const TypographySmallSans    = createStyled("typography-small-sans")
export const TypographyCaps         = createStyled("typography-caps")
export const TypographyCode         = createStyled("typography-code")
