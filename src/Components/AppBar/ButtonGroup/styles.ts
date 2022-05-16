import Box, { BoxProps } from "@mui/material/Box";
import styled from "@mui/system/styled";
import { ButtonGroupProps } from "./types";

export default styled(Box)<BoxProps & ButtonGroupProps>`
  display: flex;
  justify-content: flex-end;
  flex-grow: ${({ grow }) => grow ?? 0};
  gap: ${({ theme }) => theme.spacing(1.3)};
`;
