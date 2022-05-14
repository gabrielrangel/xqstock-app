import { ISymbolMetadata, ISymbolTimeSerie } from "./types";
import { ITimeIntervalState } from "../../Context/DashboardContext/types";
import sendRequest from "./sendRequest";

type Response = {
  metadata: ISymbolMetadata;
  timeseries: ISymbolTimeSerie[];
}[];

export async function getIntradayTimeseries(
  metadata: ISymbolMetadata[],
  { endDate, startDate }: ITimeIntervalState
): Promise<Response> {
  const symbol = metadata.map(({ Symbol }) => Symbol);

  return sendRequest("api/stock/timeseries/intraday", "POST", {
    symbol,
    endDate,
    startDate,
  });
}

export default getIntradayTimeseries;
