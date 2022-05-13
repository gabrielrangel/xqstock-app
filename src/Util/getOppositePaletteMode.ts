import { Theme } from "@mui/system/createTheme/createTheme";

export const getOppositePaletteMode = (theme: Theme) =>
  theme.palette.mode === "dark" ? "light" : "dark";

export default getOppositePaletteMode;
