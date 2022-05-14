import { FunctionComponent } from "react";

import {
  DashboardFilterGroup,
  DashboardLineChart,
  DateIntervalFilter,
  StockMetadataFilter,
} from "src/Components/Dashboard";
import DashboardContextProvider from "../Context/DashboardContext";
import { Stack } from "@mui/material";

export const Dashboard: FunctionComponent = () => (
  <DashboardContextProvider>
    <Stack spacing={2}>
      <DashboardFilterGroup>
        <StockMetadataFilter />
        <DateIntervalFilter />
      </DashboardFilterGroup>
      <DashboardLineChart />
    </Stack>
  </DashboardContextProvider>
);

export default Dashboard;
