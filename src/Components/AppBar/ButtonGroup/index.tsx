import { FunctionComponent } from "react";
import StyledBox from "./styles";
import { ButtonGroupProps } from "./types";

export const ButtonGroup: FunctionComponent<ButtonGroupProps> = ({
  children,
  ...props
}) => <StyledBox {...props}>{children}</StyledBox>;

export default ButtonGroup;
