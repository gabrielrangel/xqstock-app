import { ITimeIntervalState } from "../../../Context/DashboardContext/types";
import { SymbolMetadataState } from "../../../Reducers/SymbolMetadataReducer";
import getIntradayTimeseries from "../../../Services/XqStockApi/getIntradayTimeseries";
import groupTimeseriesByDate from "./helpers/groupTimeseriesByDate";
import getValuesAsArray from "./helpers/getValuesAsArray";
import { getSortedEntries } from "./helpers/getSortedEntries";
import { getFormmatedDates } from "./helpers/getFormmatedDates";
import { getFormattedChartSeries } from "./helpers/getFormattedChartSeries";

export async function updateOptionState(
  timeInterval: ITimeIntervalState,
  stockMetadata: SymbolMetadataState
) {
  if (stockMetadata.length === 0) {
    return;
  }

  const [timeseries, status] = await getIntradayTimeseries(
    stockMetadata,
    timeInterval
  );

  const timeseriesGroupedByDate = groupTimeseriesByDate(timeseries);
  const sortedTimeseries = getSortedEntries(timeseriesGroupedByDate);

  const xAxisData = getFormmatedDates(sortedTimeseries);

  const chartSeriesArr = getValuesAsArray(sortedTimeseries);
  const chartSeriesObj = getFormattedChartSeries(chartSeriesArr);

  return {
    xAxisData,
    series: chartSeriesObj,
    status,
  };
}

export default updateOptionState;
