import getOppositePalletteMode from "../../../Util/getOppositePalletteMode";
import styled from "@emotion/styled";
import Button from "@mui/material/Button/Button";
import { MUIStyledCommonProps } from "@mui/system/createStyled";

export default styled(Button)<MUIStyledCommonProps & { selected: boolean }>`
  box-sizing: border-box
  display: flex;
  border-radius: 10px;
  text-transform: none;
  flex-grow: 1;

  margin: ${({ theme }) => theme.spacing(1)};
  padding:
    ${({ theme }) => theme.spacing(1.5)} 
    ${({ theme }) => theme.spacing(2)};
  
  background-color: ${({ selected, theme }) =>
    selected
      ? theme.palette.primary[getOppositePalletteMode(theme)]
      : "none"}15;

  :hover {
    background-color: ${({ theme }) =>
      theme.palette.primary[getOppositePalletteMode(theme)]}10;
  }

  .button-text{
    color: ${({ theme }) => theme.palette.primary.main};
    text-align: left;
    flex-grow: 1;
    font-family: 'Poppins';
    font-weight: 600;
  }
`;
