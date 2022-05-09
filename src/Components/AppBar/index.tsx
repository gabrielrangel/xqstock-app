import { FunctionComponent } from "react";
import { Button } from "./Button";
import ButtonGroup from "./ButtonGroup";
import StyledAppBar from "./styles";
import GitHubIcon from "@mui/icons-material/GitHub";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import useThemeContext from "../../Hooks/useThemeContext";

export const AppBar: FunctionComponent = () => {
  const { theme, toggleDarkMode } = useThemeContext();
  return (
    <StyledAppBar position={"sticky"} enableColorOnDark={true}>
      <ButtonGroup>
        <Button>
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
