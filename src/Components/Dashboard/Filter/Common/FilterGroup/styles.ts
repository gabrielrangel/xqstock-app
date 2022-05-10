import Box, { BoxProps } from "@mui/material/Box";
import { styled } from "@mui/system";

export default styled(Box)<BoxProps>`
  background-color: ${({ theme }) => theme.palette.secondary.main}15;
  padding: ${({ theme }) => theme.spacing(3)} 0;

  .MuiContainer-root {
    display: flex;
    align-items: stretch;
    flex-direction: row;
    height: 100%;
    gap: ${({ theme }) => theme.spacing(3)};
  }
`;
