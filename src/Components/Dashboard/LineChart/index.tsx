import Container from "@mui/material/Container";
import { FunctionComponent, useEffect, useMemo, useState } from "react";
import useDashboardContext from "../../../Hooks/useDashboardContext";
import { ILLineChartSeriesItem } from "./types";
import { updateOptionState } from "./updateOptionState";
import ReactECharts from "echarts-for-react";
import { Typography } from "@mui/material";
import getOppositePaletteMode from "../../../Util/getOppositePaletteMode";
import useThemeContext from "../../../Hooks/useThemeContext";
import Stack from "@mui/material/Stack";
import Box from "@mui/system/Box";
import getConfig from "./config";

export const DashboardLineChart: FunctionComponent = () => {
  const [series, setSeries] = useState<ILLineChartSeriesItem[]>();
  const [xAxisData, setXAxisData] = useState<string[]>();

  const { timeIntervalState, stockMetadataReducer, hasErrorState } =
    useDashboardContext();
  const [timeInterval] = timeIntervalState;
  const [stockMetadata] = stockMetadataReducer;
  const [hasError] = hasErrorState;

  const { theme } = useThemeContext();

  useEffect(() => {
    const fetchOption = async () => {
      const result = await updateOptionState(timeInterval, stockMetadata);

      if (!result) {
        return;
      }

      const { xAxisData, series } = result;
      setXAxisData(xAxisData);
      setSeries(series);
    };

    !hasError && fetchOption().catch(console.error);
  }, [timeInterval, stockMetadata, hasErrorState, hasError]);

  const option = useMemo(
    () => getConfig(series, xAxisData),
    [series, xAxisData]
  );

  return (
    <Box>
      <Container maxWidth="lg">
        <Stack spacing={3}>
          <Typography
            variant={"h6"}
            component={"h1"}
            className={"cardHeader"}
            sx={{
              color: theme.palette.secondary[getOppositePaletteMode(theme)],
              fontFamily: '"Poppins", Verdana, sans-serif',
            }}
          >
            Fechamento x dia
          </Typography>
          <ReactECharts option={option} notMerge={true} />
        </Stack>
      </Container>
    </Box>
  );
};

export default DashboardLineChart;
