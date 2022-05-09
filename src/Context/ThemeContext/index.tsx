import getDesignTokens from "../../Style/getDesignTokens";
import useMediaQuery from "@mui/material/useMediaQuery";
import { IThemeContext } from "./types";

import MaterialThemeProvider, {
  ThemeProviderProps,
} from "@mui/material/styles/ThemeProvider";

import {
  createContext,
  FunctionComponent,
  useCallback,
  useMemo,
  useState,
} from "react";

export const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

export const ThemeContextProvider: FunctionComponent<
  Omit<ThemeProviderProps, "theme">
> = ({ children, ...props }) => {
  const prefersDarkModeSchemeMQ = useMediaQuery("(prefers-color-scheme: dark)");

  const [prefersDarkModeSchemeUI, setPrefersDarkModeSchemeUI] = useState<
    boolean | undefined
  >();

  const theme = useMemo(() => {
    const prefersDarkMode =
      prefersDarkModeSchemeUI === undefined
        ? prefersDarkModeSchemeMQ
        : prefersDarkModeSchemeUI;

    return getDesignTokens(prefersDarkMode ? "dark" : "light");
  }, [prefersDarkModeSchemeMQ, prefersDarkModeSchemeUI]);

  const toggleDarkMode = useCallback(() => {
    setPrefersDarkModeSchemeUI(
      prefersDarkModeSchemeUI === undefined
        ? !prefersDarkModeSchemeMQ
        : !prefersDarkModeSchemeUI
    );
  }, [
    prefersDarkModeSchemeMQ,
    prefersDarkModeSchemeUI,
    setPrefersDarkModeSchemeUI,
  ]);

  return (
    <ThemeContext.Provider value={{ toggleDarkMode, theme }}>
      <MaterialThemeProvider {...props} theme={theme}>
        {children}
      </MaterialThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
