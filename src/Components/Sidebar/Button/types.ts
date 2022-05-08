import { ButtonProps } from "@mui/material/Button/Button";

export default interface SidebarButtonProps extends ButtonProps {
  selected: boolean;
  text: string;
  path: string;
}
