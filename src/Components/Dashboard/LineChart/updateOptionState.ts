import { ITimeIntervalState } from "../../../Context/DashboardContext/types";
import { SymbolMetadataState } from "../../../Reducers/SymbolMetadataReducer";
import { ILLineChartSeriesItem } from "./types";
import getIntradayTimeseries from "../../../Services/XqStockApi/getIntradayTimeseries";
import { Dispatch, SetStateAction } from "react";

export function updateOptionState(
  timeInterval: ITimeIntervalState,
  stockMetadata: SymbolMetadataState,
  setSeries: Dispatch<SetStateAction<ILLineChartSeriesItem[] | undefined>>
) {
  getIntradayTimeseries(stockMetadata, timeInterval)
    .then((result) =>
      result.reduce(
        (acc, { timeseries }) =>
          timeseries.reduce((obj, { Date, Symbol, Close }) => {
            obj[Date] = {
              ...obj[Date],
              [Symbol]: Close,
            };
            return obj;
          }, acc),
        {} as Record<string, Record<string, string>>
      )
    )
    .then((value) =>
      Object.entries(value)
        .sort(([date]) => new Date(date).getTime())
        .reduce((acc, [, timeseries]) => {
          Object.entries(timeseries).forEach(([symbol, value]) => {
            acc[symbol] = acc[symbol]
              ? [...acc[symbol], Number(value)]
              : [Number(value)];
          });

          const maxLength = Math.max(
            ...Object.values(acc).map((v) => v.length)
          );

          Object.values(acc)
            .filter((v) => v.length < maxLength)
            .map((v) => v.push(0));

          return acc;
        }, {} as Record<string, number[]>)
    )
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
