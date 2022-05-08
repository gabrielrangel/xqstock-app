import { FunctionComponent } from "react";
import { SidebarCard } from "./Card";
import Logo from "../Global/Logo";
import Button from "./Button";
import SidebarButtonGroup from "./ButtonGroup";
import SsidChartIcon from "@mui/icons-material/SsidChart";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import RestoreIcon from "@mui/icons-material/Restore";

export const Sidebar: FunctionComponent = () => {
  return (
    <SidebarCard>
      <Logo />
      <SidebarButtonGroup>
        <Button
          text="Dashboard"
          path="/Dashboard"
          startIcon={<SsidChartIcon />}
        />
        <Button
          text="Favoritos"
          path="/Starred"
          startIcon={<StarOutlineIcon />}
        />
        <Button text="Histórico" path="/History" startIcon={<RestoreIcon />} />
      </SidebarButtonGroup>
    </SidebarCard>
  );
};

export default Sidebar;
