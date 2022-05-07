import { PaletteMode } from "@mui/material";
import createTheme from "@mui/material/styles/createTheme";

export function getDesignTokens ( mode: PaletteMode ) {
  return createTheme({
    palette: {
      mode,
      primary: {
        light: "#63A3FF",
        main: "#1775D1",
        dark: "#004A9F",
      },
      secondary: {
        light: "#AAB6FE",
        main: "#7986CB",
        dark: "#49599A",
      },
    },
  });
}

export default getDesignTokens;
