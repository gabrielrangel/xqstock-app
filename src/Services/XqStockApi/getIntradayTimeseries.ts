import { ISymbolMetadata, ISymbolTimeSerie } from "./types";
import { ITimeIntervalState } from "../../Context/DashboardContext/types";
import sendRequest from "./sendRequest";

export type GetIntradayTimeSeriesResponse = [
  {
    metadata: ISymbolMetadata;
    timeseries: ISymbolTimeSerie[];
  }[],
  number
];

export async function getIntradayTimeseries(
  metadata: ISymbolMetadata[],
  { endDate, startDate }: ITimeIntervalState
): Promise<GetIntradayTimeSeriesResponse> {
  const symbol = metadata.map(({ Symbol }) => Symbol);

  return sendRequest("api/stock/timeseries/intraday", "POST", {
    symbol,
    endDate,
    startDate,
  }).then(({ data, status }) => {
    const { timeseries } = data;
    return [timeseries, status];
  });
}

export default getIntradayTimeseries;
