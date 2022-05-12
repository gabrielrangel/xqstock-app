import Container from "@mui/material/Container";
import { FunctionComponent, ReactNode } from "react";
import StyledBox from "./styles";
import Grid from "@mui/material/Grid";

export const DashboardFilterGroup: FunctionComponent<{
  children: ReactNode;
}> = ({ children }) => (
  <StyledBox>
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        {children}
      </Grid>
    </Container>
  </StyledBox>
);

export default DashboardFilterGroup;
