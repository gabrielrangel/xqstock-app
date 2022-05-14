import { GetIntradayTimeSeriesResponse } from "../../../../Services/XqStockApi/getIntradayTimeseries";

export const groupTimeseriesByDate = (result: GetIntradayTimeSeriesResponse) =>
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
  );

export default groupTimeseriesByDate;
