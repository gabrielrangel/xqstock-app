import Container from "@mui/material/Container";
import { FunctionComponent } from "react";
import useDashboardContext from "../../../Hooks/useDashboardContext";

export const DashboardLineChart: FunctionComponent = () => {
  const context = useDashboardContext();
  return <Container maxWidth="lg">{JSON.stringify(context)}</Container>;
};

export default DashboardLineChart;
