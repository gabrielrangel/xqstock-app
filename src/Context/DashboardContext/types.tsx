import {
  SymbolMetadataAction,
  SymbolMetadataState,
} from "../../Reducers/SymbolMetadataReducer";
import { Dispatch, SetStateAction } from "react";

export interface ITimeIntervalState {
  startDate: Date;
  endDate: Date;
}

export interface DashboardContextValue {
  stockMetadataReducer: [SymbolMetadataState, Dispatch<SymbolMetadataAction>];
  indexMetadataReducer: [SymbolMetadataState, Dispatch<SymbolMetadataAction>];
  timeIntervalState: [
    ITimeIntervalState | undefined,
    Dispatch<SetStateAction<ITimeIntervalState | undefined>>
  ];
}
