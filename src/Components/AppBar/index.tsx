import { FunctionComponent } from "react";
import { Button } from "./Button";
import ButtonGroup from "./ButtonGroup";
import StyledAppBar from "./styles";
import GitHubIcon from "@mui/icons-material/GitHub";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import useThemeContext from "../../Hooks/useThemeContext";

export const AppBar: FunctionComponent = () => {
  const { REACT_APP_XQSTOCK_APP_REPO } = process.env;
  const { theme, toggleDarkMode } = useThemeContext();

  return (
    <StyledAppBar position={"sticky"} enableColorOnDark={true}>
      <ButtonGroup>
        <Button
          onClick={() => window.open(REACT_APP_XQSTOCK_APP_REPO, "_blank")}
        >
          <GitHubIcon />
        </Button>
        <Button onClick={toggleDarkMode}>
          {theme.palette.mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
        </Button>
      </ButtonGroup>
    </StyledAppBar>
  );
};

export default AppBar;
