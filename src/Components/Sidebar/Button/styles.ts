import getOppositePalletteMode from "../../../Util/getOppositePalletteMode";
import styled from "@emotion/styled";
import Button from "@mui/material/Button/Button";
import SidebarButtonProps from "./types";

export default styled(Button)<SidebarButtonProps>`
  width: 100%;
  box-sizing: border-box
  color: ${({ theme }) => theme.palette.primary.con};
  
  background-color: ${({ selected, theme }) =>
    selected
      ? theme.palette.primary[getOppositePalletteMode(theme)]
      : "none"}30;

  margin: ${({ theme }) => theme.spacing(0.5)};

  :hover {
    background-color: ${({ theme }) =>
      theme.palette.primary[getOppositePalletteMode(theme)]}25;
  }
`;
