export interface ISymbolMetadata {
  Symbol: string;
  TimeZone: string;
  Name: string;
  Type: string;
  Region: string;
  Marketopen: string;
  Marketclose: string;
  Currency: string;
  Matchscore: string;
}

export interface ISymbolTimeSerie {
  Symbol: string;
  Date: string;
  Open: string;
  High: string;
  Low: string;
  Close: string;
  Volume: string;
  Kind: string;
}
