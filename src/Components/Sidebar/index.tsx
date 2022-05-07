import { FunctionComponent } from "react";
import { SidebarCard } from "./Card";
import Logo from "../Global/Logo";
import Button from "./Button";

export const Sidebar: FunctionComponent = () => {
  return (
    <SidebarCard>
      <Logo />
      <Button selected={false} />
      <Button selected={true} />
    </SidebarCard>
  );
};

export default Sidebar;
