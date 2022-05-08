import { ButtonProps } from "@mui/material/Button/Button";

export default interface SidebarButtonProps extends Omit<ButtonProps, "sx"> {
  text: string;
  path: string;
}
