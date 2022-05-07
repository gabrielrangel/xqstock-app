import { FunctionComponent } from "react";
import { SidebarCard } from "./Card";
import Logo from "../Global/Logo";

export const Sidebar: FunctionComponent = () => {
  return (
    <SidebarCard>
      <Logo/>
    </SidebarCard>
  );
};

export default Sidebar;
