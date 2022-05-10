import { Dispatch, SetStateAction } from "react";
import { IXqStockApiAsset } from "src/Services/XqStockApi/types";

type Assets = IXqStockApiAsset | undefined;

export interface DashboardContextValue {
  assetsState: [Assets, Dispatch<Assets>];
}
