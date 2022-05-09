import Container from "@mui/material/Container";
import { FunctionComponent, ReactNode } from "react";
import StyledBox from "./styles";

export const DashboardFilterGroup: FunctionComponent<{
  children: ReactNode;
}> = ({ children }) => (
  <StyledBox>
    <Container maxWidth="lg">{children}</Container>
  </StyledBox>
);

export default DashboardFilterGroup;
