import { PaletteMode } from "@mui/material";
import { amber, grey, blue } from "@mui/material/colors";

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: amber,
          divider: amber[200],
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
          // palette values for dark mode
          primary: blue, // Set blue color for primary components in dark mode
          background: {
            default: "#000", // Set black color for background in dark mode
            paper: "#000", // Set black color for paper/background in dark mode
          },
          text: {
            primary: "#fff", // Set white color for text in dark mode
            secondary: grey[500],
          },
        }),
  },
});
