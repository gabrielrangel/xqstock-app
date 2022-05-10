import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { FunctionComponent } from "react";

import {
  DashboardFilterCard,
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
