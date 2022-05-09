import Box, { BoxProps } from "@mui/material/Box";
import { FunctionComponent } from "react";
import DashboardFilterGroup from "src/Components/Dashboard/FilterGroup";

export const Dashboard: FunctionComponent = () => (
  <Box>
    <DashboardFilterGroup />
  </Box>
);

export default Dashboard;
