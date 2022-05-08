import Typography from "@mui/material/Typography";
import { FunctionComponent } from "react";
import { useMatch, useNavigate } from "react-router-dom";
import Button from "./styles";
import SidebarButtonProps from "./types";

export const SidebarButton: FunctionComponent<SidebarButtonProps> = ({
  text,
  path,
  ...props
}) => {
  const navigate = useNavigate();

  return (
    <Button
      selected={Boolean(useMatch(path))}
      onClick={() => navigate(path)}
      {...props}
    >
      <Typography variant="h5" component="p" className="button-text">
        {text}
      </Typography>
    </Button>
  );
};

export default SidebarButton;
