import CardContent from "@mui/material/CardContent/CardContent";
import { FunctionComponent } from "react";
import StyledSidebarCard from "./styles";
import { SidebarCardProps } from "./types";

export const SidebarCard: FunctionComponent<SidebarCardProps> = () => {
  return (
    <StyledSidebarCard elevation={5}>
      <CardContent>dsadasdasdasdas</CardContent>
    </StyledSidebarCard>
  );
};
