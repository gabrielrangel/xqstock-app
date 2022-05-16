import AppBar, { AppBarProps } from "@mui/material/AppBar";
import styled from "@mui/system/styled";

export default styled(AppBar)<AppBarProps>`
  padding: ${({ theme }) => theme.spacing(1.3)};
  background-color: ${({ theme }) =>
    theme.palette.common[theme.palette.mode === "dark" ? "black" : "white"]}e;
  color: ${({ theme }) => theme.palette.primary.main};
  flex-direction: row;
`;
