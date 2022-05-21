export function getFormattedChartSeries(
  chartSeriesArr: Record<string, number[]>
) {
  return Object.entries(chartSeriesArr).map(([name, data]) => ({
    name,
    data,
    type: "line",
    smooth: true,
  }));
}
