import { FunctionComponent } from "react";
import { Button } from "./Button";
import ButtonGroup from "./ButtonGroup";
import StyledAppBar from "./styles";
import GitHubIcon from "@mui/icons-material/GitHub";
import useTheme from "@mui/material/styles/useTheme";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export const AppBar: FunctionComponent = () => {
  const theme = useTheme();
  return (
    <StyledAppBar position={"relative"} enableColorOnDark={true}>
      <ButtonGroup>
        <Button>
          <GitHubIcon />
        </Button>
        <Button>
          {theme.palette.mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
        </Button>
      </ButtonGroup>
    </StyledAppBar>
  );
};

export default AppBar;
