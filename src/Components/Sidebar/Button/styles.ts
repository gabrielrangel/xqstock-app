import getOppositePaletteMode from "../../../Util/getOppositePaletteMode";
import styled from "@emotion/styled";
import Button, { ButtonProps } from "@mui/material/Button/Button";
import { MUIStyledCommonProps } from "@mui/system/createStyled";

export default styled(Button)<
  MUIStyledCommonProps & { selected: boolean } & Omit<ButtonProps, "sx">
>`
  display: flex;
  border-radius: 10px;
  text-transform: none;
  flex-grow: 1;

  padding: ${({ theme }) => theme.spacing(1.5)}
    ${({ theme }) => theme.spacing(0.1)};

  background-color: ${({ selected, theme }) =>
    selected ? theme.palette.primary[getOppositePaletteMode(theme)] : "none"}15;

  :hover {
    background-color: ${({ theme }) =>
      theme.palette.primary[getOppositePaletteMode(theme)]}10;
  }

  .MuiTypography-root {
    color: ${({ theme }) => theme.palette.primary.main};
    text-align: left;
    flex-grow: 1;
    font-family: "Poppins", Verdana, sans-serif;
    font-weight: 400;
  }

  .MuiSvgIcon-root {
    padding: 5px;
  }
`;
