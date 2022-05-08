import { MUIStyledCommonProps } from "@mui/system/createStyled";
import { ButtonProps } from "@mui/material/Button/Button";

export default interface SidebarButtonProps
  extends Omit<ButtonProps, "sx">,
    MUIStyledCommonProps {
  selected: boolean;
  text?: string;
}
