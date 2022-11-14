/*
 * Chakra UI Custom Theme
 */

import { extendTheme } from "@chakra-ui/react";

const colors = {
  orange: {
    50: "#ffca28",
    100: "#ffc107",
    200: "#ffb300",
    300: "#ffa000",
    400: "#ff8f00",
    500: "#ff6f00",
  },
  white: {
    50: "#fbfcfc",
    100: "#f7f9f9",
    200: "#f4f6f7",
    300: "#f0f3f4",
    400: "#ecf0f1",
  },
};

const customTheme = extendTheme({
  colors,
});

export default customTheme;
