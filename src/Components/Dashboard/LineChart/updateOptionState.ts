import { ITimeIntervalState } from "../../../Context/DashboardContext/types";
import { SymbolMetadataState } from "../../../Reducers/SymbolMetadataReducer";
import { ILLineChartSeriesItem } from "./types";
import getIntradayTimeseries from "../../../Services/XqStockApi/getIntradayTimeseries";
import { Dispatch, SetStateAction } from "react";
import groupTimeseriesByDate from "./helpers/groupTimeseriesByDate";
import getValuesAsArray from "./helpers/getValuesAsArray";

export function updateOptionState(
  timeInterval: ITimeIntervalState,
  stockMetadata: SymbolMetadataState,
  setSeries: Dispatch<SetStateAction<ILLineChartSeriesItem[] | undefined>>
) {
  getIntradayTimeseries(stockMetadata, timeInterval)
    .then(groupTimeseriesByDate)
    .then(getValuesAsArray)
    .then((options) =>
      setSeries(
        Object.entries(options).map(([name, data]) => ({
          name,
          data,
          stack: "Total",
          type: "line",
        }))
      )
    );
}

export default updateOptionState;
