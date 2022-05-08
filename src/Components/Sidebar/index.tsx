import { FunctionComponent } from "react";
import { SidebarCard } from "./Card";
import Logo from "../Global/Logo";
import Button from "./Button";

export const Sidebar: FunctionComponent = () => {
  return (
    <SidebarCard>
      <Logo />
      <Button selected={false} text="Link 1" />
      <Button selected={true} text="Link 2" />
    </SidebarCard>
  );
};

export default Sidebar;
