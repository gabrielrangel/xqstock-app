import Container from "@mui/material/Container";
import { FunctionComponent, useEffect, useMemo, useState } from "react";
import useDashboardContext from "../../../Hooks/useDashboardContext";
import { ILLineChartSeriesItem } from "./types";
import { updateOptionState } from "./updateOptionState";
import ReactECharts from "echarts-for-react";

export const DashboardLineChart: FunctionComponent = () => {
  const [series, setSeries] = useState<ILLineChartSeriesItem[]>();
  const [xAxisData, setXAxisData] = useState<string[]>();

  const { timeIntervalState, stockMetadataReducer } = useDashboardContext();
  const [timeInterval] = timeIntervalState;
  const [stockMetadata] = stockMetadataReducer;

  useEffect(
    () =>
      updateOptionState(timeInterval, stockMetadata, setSeries, setXAxisData),
    [timeInterval, stockMetadata]
  );

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
    [series]
  );

  return (
    <Container maxWidth="lg">
      <ReactECharts option={option} />
    </Container>
  );
};

export default DashboardLineChart;
