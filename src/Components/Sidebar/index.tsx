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
        <Button selected={false} text="Dashboard" path="/Dashboard" />
        <Button selected={true} text="Favoritos" path="/Starred" />
        <Button selected={false} text="Histórico" path="/History" />
      </SidebarButtonGroup>
    </SidebarCard>
  );
};

export default Sidebar;
