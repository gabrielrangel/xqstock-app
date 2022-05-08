import { FunctionComponent } from "react";
import { useMatch, useNavigate } from "react-router-dom";
import Button from "./styles";
import SidebarButtonProps from "./types";

export const SidebarButton: FunctionComponent<SidebarButtonProps> = ({
  text,
  path,
}) => {
  const navigate = useNavigate();

  return (
    <Button selected={Boolean(useMatch(path))} onClick={() => navigate(path)}>
      <p className="button-text">{text}</p>
    </Button>
  );
};

export default SidebarButton;
