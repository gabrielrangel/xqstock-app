import Button, { ButtonProps } from "@mui/material/Button";
import styled from "@mui/material/styles/styled";

export default styled(Button)<ButtonProps>`
  padding: ${({ theme }) => theme.spacing(0.625)};
  min-height: 35px;
  min-width: 35px;
  flex-grow: 0;
  flex-shrink: 0;
`;
