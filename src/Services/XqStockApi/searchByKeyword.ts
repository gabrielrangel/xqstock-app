import sendRequest from "./sendRequest";
import { ISymbolMetadata } from "./types";

export async function searchByKeyword(
  keyword: string
): Promise<ISymbolMetadata[]> {
  return sendRequest(`api/stock/metadata/search/${keyword}`, "GET").then(
    ({ metadata } = { metadata: [] }) => metadata
  );
}

export default searchByKeyword;
