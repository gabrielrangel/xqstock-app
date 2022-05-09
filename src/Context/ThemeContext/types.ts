import { Theme } from "@mui/system/createTheme/createTheme";

export interface IThemeContext {
  toggleDarkMode: () => void;
  theme: Theme;
}
