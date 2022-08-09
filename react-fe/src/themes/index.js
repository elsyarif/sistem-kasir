import { extendTheme } from "@chakra-ui/react"
import { globalStyles } from './styles'
import { breakpoints } from './foundations/breakpoints'

export const themes = extendTheme(
    {breakpoints},
    globalStyles
)