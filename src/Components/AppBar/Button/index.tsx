import { ButtonProps } from "@mui/material/Button";
import { FunctionComponent } from "react";
import StyledButton from "./style";

export const Button: FunctionComponent<ButtonProps> = ({ children, ...props }) => (
  <StyledButton variant="outlined" {...props}>
    {children}
  </StyledButton>
);
