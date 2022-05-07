import { FunctionComponent } from "react";
import Button from "./styles";
import SidebarButtonProps from "./types";

export const SidebarButton: FunctionComponent<SidebarButtonProps> = ({
  selected,
}) => <Button selected={selected}>aaaa</Button>;

export default SidebarButton;
