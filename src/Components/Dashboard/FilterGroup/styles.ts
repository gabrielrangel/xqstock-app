import Box, { BoxProps } from "@mui/material/Box";
import { styled } from "@mui/system";

export default styled(Box)<BoxProps>`
  background-color: ${({ theme }) => theme.palette.secondary.main}15;
  content: "";
  min-height: 300px;
`;
