import { ITimeIntervalState } from "../../../Context/DashboardContext/types";
import { SymbolMetadataState } from "../../../Reducers/SymbolMetadataReducer";
import { ILLineChartSeriesItem } from "./types";
import getIntradayTimeseries from "../../../Services/XqStockApi/getIntradayTimeseries";
import { Dispatch, SetStateAction } from "react";
import groupTimeseriesByDate from "./helpers/groupTimeseriesByDate";
import getValuesAsArray from "./helpers/getValuesAsArray";
import { getSortedEntries } from "./helpers/getSortedEntries";

export function updateOptionState(
  timeInterval: ITimeIntervalState,
  stockMetadata: SymbolMetadataState,
  setSeries: Dispatch<SetStateAction<ILLineChartSeriesItem[] | undefined>>,
  setXAxisData: Dispatch<SetStateAction<string[] | undefined>>
) {
  getIntradayTimeseries(stockMetadata, timeInterval)
    .then(groupTimeseriesByDate)
    .then(getSortedEntries)
    .then((timeseries) => {
      setXAxisData(
        timeseries.map(([date]) => new Date(date).toLocaleDateString())
      );

      return getValuesAsArray(timeseries);
    })
    .then((options) => {
      setSeries(
        Object.entries(options).map(([name, data]) => ({
          name,
          data,
          type: "line",
          smooth: true,
        }))
      );
      console.log(options);
    });
}

export default updateOptionState;