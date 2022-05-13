import {
  SymbolMetadataAction,
  SymbolMetadataState,
} from "../../Reducers/SymbolMetadataReducer";
import { Dispatch, SetStateAction } from "react";

export interface ITimeIntervalState {
  startDate: Date | null;
  endDate: Date | null;
}

export interface DashboardContextValue {
  stockMetadataReducer: [SymbolMetadataState, Dispatch<SymbolMetadataAction>];
  timeIntervalState: [
    ITimeIntervalState,
    Dispatch<SetStateAction<ITimeIntervalState>>
  ];
}
