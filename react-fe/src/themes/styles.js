import { mode } from '@chakra-ui/theme-tools'

export const globalStyles = {
    colors: {
        white: {
            500: '#ffffff'
        },
        brand: {
            100: "#E9E3FF",
            200: "#422AFB",
            300: "#422AFB",
            400: "#7551FF",
            500: "#422AFB",
            600: "#3311DB",
            700: "#02044A",
            800: "#190793",
            900: "#11047A",
          },
          brandScheme: {
            100: "#E9E3FF",
            200: "#7551FF",
            300: "#7551FF",
            400: "#7551FF",
            500: "#422AFB",
            600: "#3311DB",
            700: "#02044A",
            800: "#190793",
            900: "#02044A",
          },
          brandTabs: {
            100: "#E9E3FF",
            200: "#422AFB",
            300: "#422AFB",
            400: "#422AFB",
            500: "#422AFB",
            600: "#3311DB",
            700: "#02044A",
            800: "#190793",
            900: "#02044A",
          },
          secondaryGray: {
            100: "#E0E5F2",
            200: "#E1E9F8",
            300: "#F4F7FE",
            400: "#E9EDF7",
            500: "#8F9BBA",
            600: "#A3AED0",
            700: "#707EAE",
            800: "#707EAE",
            900: "#1B2559",
          },
          red: {
            50: "#ff734a",
            100: "#ff6940",
            200: "#ff5f36",
            300: "#fc552c",
            400: "#f24b22",
            500: "#e84118",
            600: "#de370e",
            700: "#d42d04",
            800: "#ca2300",
            900: "#c01900"
          },
          blue: {
            50: "#EFF4FB",
            500: "#3965FF",
          },
          orange: {
            100: "#FFF6DA",
            500: "#FFB547",
          },
          green: {
            50: "#76ef64",
            100: "#6ce55a",
            200: "#62db50",
            300: "#58d146",
            400: "#4ec73c",
            500: "#44bd32",
            600: "#3ab328",
            700: "#30a91e",
            800: "#269f14",
            900: "#1c950a"
          },
          navy: {
            50: "#d0dcfb",
            100: "#aac0fe",
            200: "#a3b9f8",
            300: "#728fea",
            400: "#3652ba",
            500: "#1b3bbb",
            600: "#24388a",
            700: "#1B254B",
            800: "#111c44",
            900: "#0b1437",
          },
          gray: {
            100: "#FAFCFE",
          },
    },
    styles: {
        global: (props) => ({
          body: {
            overflowX: "hidden",
            bg: mode("secondaryGray.300", "navy.900")(props),
            fontFamily: "Poppins",
            letterSpacing: "-0.5px",
          },
          input: {
            color: "gray.700",
          },
          html: {
            fontFamily: "Poppins",
          },
        }),
      }
}