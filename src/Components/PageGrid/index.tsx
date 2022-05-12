import Grid from "@mui/material/Grid";
import { FunctionComponent, ReactNode } from "react";
import AppBar from "../AppBar";
import Sidebar from "../Sidebar";
import StyledGrid from "./styles";

export const PageGrid: FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => (
  <StyledGrid container spacing={0}>
    <Grid item sm={3} md={2} component={"aside"}>
      <Sidebar />
    </Grid>
    <Grid item sm={9} md={10} component={"main"}>
      <AppBar />
      {children}
    </Grid>
  </StyledGrid>
);

export default PageGrid;
