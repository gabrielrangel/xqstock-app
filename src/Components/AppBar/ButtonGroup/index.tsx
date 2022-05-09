import { FunctionComponent, ReactNode } from "react";
import StyledBox from "./styles";

export const ButtonGroup: FunctionComponent<{ children?: ReactNode }> = ({
  children,
}) => <StyledBox>{children}</StyledBox>;

export default ButtonGroup;