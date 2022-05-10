import { FunctionComponent } from "react";
import Box from "@mui/material/Box";

import {
  DashboardFilterGroup,
  AssetFilter,
  IndexFilter,
  DateFilter,
} from "src/Components/Dashboard";

export const Dashboard: FunctionComponent = () => (
  <Box>
    <DashboardFilterGroup>
      <AssetFilter />
      <IndexFilter />
      <DateFilter />
    </DashboardFilterGroup>
  </Box>
);

export default Dashboard;
