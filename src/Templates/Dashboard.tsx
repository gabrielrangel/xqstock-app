import { FunctionComponent } from "react";
import Box from "@mui/material/Box";

import {
  DashboardFilterGroup,
  DateIntervalFilter,
  StockMetadataFilter,
} from "src/Components/Dashboard";
import DashboardContextProvider from "../Context/DashboardContext";

export const Dashboard: FunctionComponent = () => (
  <DashboardContextProvider>
    <Box>
      <DashboardFilterGroup>
        <StockMetadataFilter />
        <DateIntervalFilter />
      </DashboardFilterGroup>
    </Box>
  </DashboardContextProvider>
);

export default Dashboard;
