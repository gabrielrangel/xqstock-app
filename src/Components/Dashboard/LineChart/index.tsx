import Container from "@mui/material/Container";
import { FunctionComponent, useEffect, useState } from "react";
import useDashboardContext from "../../../Hooks/useDashboardContext";
import { ILLineChartSeriesItem } from "./types";
import { updateOptionState } from "./updateOptionState";
import ReactECharts from "echarts-for-react";

export const DashboardLineChart: FunctionComponent = () => {
  const [series, setSeries] = useState<ILLineChartSeriesItem[]>();

  const { timeIntervalState, stockMetadataReducer } = useDashboardContext();
  const [timeInterval] = timeIntervalState;
  const [stockMetadata] = stockMetadataReducer;

  useEffect(
    () => updateOptionState(timeInterval, stockMetadata, setSeries),
    [timeInterval, stockMetadata]
  );

  return (
    <Container maxWidth="lg">
      <ReactECharts
        option={{
          tooltip: {
            trigger: "axis",
          },
          legend: {
            data: [
              "Email",
              "Union Ads",
              "Video Ads",
              "Direct",
              "Search Engine",
            ],
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
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          },
          yAxis: {
            type: "value",
          },
          series,
        }}
      />
    </Container>
  );
};

export default DashboardLineChart;
