import { FunctionComponent } from "react";

import {
  DashboardFilterGroup,
  DashboardLineChart,
  DateIntervalFilter,
  StockMetadataFilter,
} from "src/Components/Dashboard";
import DashboardContextProvider from "../Context/DashboardContext";
import { Stack } from "@mui/material";
import useThemeContext from "../Hooks/useThemeContext";
import useMediaQuery from "@mui/material/useMediaQuery/useMediaQuery";

export const Dashboard: FunctionComponent = () => {
  const { theme } = useThemeContext();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <DashboardContextProvider>
      <Stack spacing={2}>
        <DashboardFilterGroup>
          {isXs ? (
            <>
              <DateIntervalFilter />
              <StockMetadataFilter />
            </>
          ) : (
            <>
              <StockMetadataFilter />
              <DateIntervalFilter />
            </>
          )}
        </DashboardFilterGroup>
        <DashboardLineChart />
      </Stack>
    </DashboardContextProvider>
  );
};

export default Dashboard;
