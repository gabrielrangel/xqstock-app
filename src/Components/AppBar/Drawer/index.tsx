import { Dispatch, FunctionComponent, SetStateAction } from "react";
import Sidebar from "../../Sidebar";
import StyledDrawer from "./styles";

export const Drawer: FunctionComponent<{
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}> = ({ open, setOpen }) => (
  <StyledDrawer anchor="left" open={open} onClose={() => setOpen(false)}>
    <Sidebar />
  </StyledDrawer>
);

export default Drawer;
