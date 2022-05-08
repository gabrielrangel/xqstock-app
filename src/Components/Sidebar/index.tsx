import { FunctionComponent } from "react";
import { SidebarCard } from "./Card";
import Logo from "../Global/Logo";
import Button from "./Button";
import SidebarButtonGroup from "./ButtonGroup";

export const Sidebar: FunctionComponent = () => {
  return (
    <SidebarCard>
      <Logo />
      <SidebarButtonGroup>
        <Button selected={false} text="Link 1" />
        <Button selected={true} text="Link 2" />
      </SidebarButtonGroup>
    </SidebarCard>
  );
};

export default Sidebar;
