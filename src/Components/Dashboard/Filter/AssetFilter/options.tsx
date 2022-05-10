import { FunctionComponent } from "react";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import useDashboardContext from "../../../../Hooks/useDashboardContext";

export const Options: FunctionComponent = () => {
  const { showInputState } = useDashboardContext();
  const [showInput, setShowInput] = showInputState;
  return (
    <>
      <IconButton
        aria-label="delete"
        disabled={showInput}
        onClick={() => setShowInput(true)}
      >
        <AddIcon />
      </IconButton>
    </>
  );
};

export default Options;
