import sendRequest from "./sendRequest";
import { ISymbolMetadata } from "./types";

export async function searchByKeyword(
  keyword: string
): Promise<[ISymbolMetadata[], number]> {
  return sendRequest(`api/stock/metadata/search/${keyword}`, "GET").then(
    ({ data, status }) => {
      const { metadata } = data;
      return [metadata, status];
    }
  );
}

export default searchByKeyword;
