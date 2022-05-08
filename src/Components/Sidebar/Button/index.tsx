import { FunctionComponent } from "react";
import Button from "./styles";
import SidebarButtonProps from "./types";

export const SidebarButton: FunctionComponent<SidebarButtonProps> = ({
  selected,
  text,
}) => (
  <Button selected={selected}>
    <p className="button-text">{text}</p>
  </Button>
);

export default SidebarButton;
