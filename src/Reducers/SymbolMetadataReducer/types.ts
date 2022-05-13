import { ISymbolMetadata } from "../../Services/XqStockApi/types";
import { Reducer } from "react";

export type SymbolMetadataState = ISymbolMetadata[];

export enum SymbolMetadataActionKind {
  ADD = "add",
  REMOVE = "remove",
}

export interface SymbolMetadataAction {
  type: SymbolMetadataActionKind;
  payload: ISymbolMetadata;
}

export type SymbolMetadataReducer = Reducer<
  SymbolMetadataState,
  SymbolMetadataAction
>;
