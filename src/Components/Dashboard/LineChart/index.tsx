import Container from "@mui/material/Container";
import { FunctionComponent, useEffect, useMemo, useState } from "react";
import useDashboardContext from "../../../Hooks/useDashboardContext";
import { ILLineChartSeriesItem } from "./types";
import { updateOptionState } from "./updateOptionState";
import ReactECharts from "echarts-for-react";
import { Typography } from "@mui/material";
import getOppositePaletteMode from "../../../Util/getOppositePaletteMode";
import useThemeContext from "../../../Hooks/useThemeContext";
import Box from "@mui/material/Box";

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
    hasError ||
      updateOptionState(timeInterval, stockMetadata, setSeries, setXAxisData);
  }, [timeInterval, stockMetadata, hasErrorState, hasError]);

  const option = useMemo(
    () => ({
      tooltip: {
        trigger: "axis",
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: xAxisData,
      },
      yAxis: {
        type: "value",
      },
      series,
    }),
    [series, xAxisData]
  );

  return (
    <Box>
      <Container maxWidth="lg">
        <Typography
          variant={"h6"}
          component={"h1"}
          className={"cardHeader"}
          sx={{
            color: theme.palette.secondary[getOppositePaletteMode(theme)],
            fontFamily: '"Poppins", Verdana, sans-serif',
            padding: `${theme.spacing(3)} 0`,
          }}
        >
          Fechamento x dia
        </Typography>
        <ReactECharts option={option} notMerge={true} />
      </Container>
    </Box>
  );
};

export default DashboardLineChart;
