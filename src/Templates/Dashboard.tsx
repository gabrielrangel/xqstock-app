import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { FunctionComponent } from "react";

import {
  DashboardFilterCard,
  DashboardFilterGroup,
} from "src/Components/Dashboard";

export const Dashboard: FunctionComponent = () => (
  <Box>
    <DashboardFilterGroup>
      <DashboardFilterCard title={"card"} options={<Button />}>
        <>ola</>
      </DashboardFilterCard>
    </DashboardFilterGroup>
  </Box>
);

export default Dashboard;
