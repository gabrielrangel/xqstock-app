import { FunctionComponent } from "react";
import Box from "@mui/material/Box";

import {
  AssetFilter,
  DashboardFilterGroup,
  DateFilter,
  IndexFilter,
} from "src/Components/Dashboard";
import DashboardContextProvider from "../Context/DashboardContext";

export const Dashboard: FunctionComponent = () => (
  <DashboardContextProvider>
    <Box>
      <DashboardFilterGroup>
        <AssetFilter />
        <IndexFilter />
        <DateFilter />
      </DashboardFilterGroup>
    </Box>
  </DashboardContextProvider>
);

export default Dashboard;
