import { ButtonProps } from "@mui/material/Button/Button";

export default interface SidebarButtonProps extends ButtonProps {
  text: string;
  path: string;
}
