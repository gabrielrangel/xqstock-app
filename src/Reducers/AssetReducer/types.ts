import { IXqStockApiAsset } from "../../Services/XqStockApi/types";

export interface AssetState {
  assets: IXqStockApiAsset[];
}

export enum AssetActionKind {
  ADD = "add",
  REMOVE = "remove",
}

export interface AssetAction {
  type: AssetActionKind;
  payload: IXqStockApiAsset;
}
