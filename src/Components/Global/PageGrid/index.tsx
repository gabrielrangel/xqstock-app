import Grid from "@mui/material/Grid";
import { FunctionComponent, ReactNode } from "react";
import AppBar from "../../AppBar";
import Sidebar from "../../Sidebar";
import StyledGrid from "./styles";

export const PageGrid: FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => (
  <StyledGrid container spacing={0}>
    <Grid item md={2} component={"aside"}>
      <Sidebar />
    </Grid>
    <Grid item md={10} component={"main"}>
      <AppBar />
      {children}
    </Grid>
  </StyledGrid>
);

export default PageGrid;
