import { Theme } from "@mui/system/createTheme/createTheme";

export const getOppositePalletteMode = (theme: Theme) =>
  theme.palette.mode === "dark" ? "light" : "dark";

export default getOppositePalletteMode;
