import { ILLineChartSeriesItem } from "./types";

export const getConfig = (
  series: ILLineChartSeriesItem[] | undefined,
  xAxisData: string[] | undefined
) => ({
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
});

export default getConfig;
