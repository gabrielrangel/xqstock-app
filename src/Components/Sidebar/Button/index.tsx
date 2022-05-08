import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./styles";
import SidebarButtonProps from "./types";

export const SidebarButton: FunctionComponent<SidebarButtonProps> = ({
  selected,
  text,
  path,
}) => {
  const navigate = useNavigate();

  return (
    <Button selected={selected} onClick={() => navigate(path)}>
      <p className="button-text">{text}</p>
    </Button>
  );
};

export default SidebarButton;
