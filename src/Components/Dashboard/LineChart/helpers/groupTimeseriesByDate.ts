import {
  ISymbolMetadata,
  ISymbolTimeSerie,
} from "../../../../Services/XqStockApi/types";

export const groupTimeseriesByDate = (
  result: {
    metadata: ISymbolMetadata;
    timeseries: ISymbolTimeSerie[];
  }[]
) =>
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
