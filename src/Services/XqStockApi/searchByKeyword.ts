import sendRequest from "./sendRequest";
import { ISymbolMetadata } from "./types";

export async function searchByKeyword(keyword: string) {
  const { metadata }: { metadata: ISymbolMetadata[] } = await sendRequest(
    `api/stock/metadata/search/${keyword}`,
    "GET"
  );

  return metadata;
}
