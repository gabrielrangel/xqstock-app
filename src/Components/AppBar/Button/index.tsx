import { FunctionComponent, ReactNode } from "react";
import StyledButton from "./style";

export const Button: FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => <StyledButton variant="outlined">{children}</StyledButton>;
