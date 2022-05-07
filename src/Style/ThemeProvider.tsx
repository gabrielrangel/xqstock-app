import useMediaQuery from "@mui/material/useMediaQuery/useMediaQuery";
import { ThemeProviderProps } from "@mui/private-theming";
import { FunctionComponent, useMemo } from "react";
import getDesignTokens from "./getDesignTokens";
import MaterialThemeProvider from "@mui/material/styles/ThemeProvider";

export const ThemeProvider: FunctionComponent<Partial<ThemeProviderProps>> = (
  props
) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = useMemo(
    () => getDesignTokens(prefersDarkMode ? "dark" : "light"),
    [prefersDarkMode]
  );

  return <MaterialThemeProvider {...props} theme={theme} />;
};

export default ThemeProvider;
