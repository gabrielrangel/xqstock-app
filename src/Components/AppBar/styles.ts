import AppBar, { AppBarProps } from "@mui/material/AppBar";
import styled from "@mui/system/styled";

export default styled(AppBar)<AppBarProps>`
  background-color: ${({ theme }) =>
    theme.palette.common[theme.palette.mode === "dark" ? "black" : "white"]}1;
  color: ${({ theme }) => theme.palette.primary.main};
`;
