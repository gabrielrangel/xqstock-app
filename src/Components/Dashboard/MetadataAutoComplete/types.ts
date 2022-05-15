import {
  SymbolMetadataAction,
  SymbolMetadataState,
} from "../../../Reducers/SymbolMetadataReducer";
import { Dispatch } from "react";

export interface MetadataAutoCompleteProps {
  placeholder: string;
  valueReducer: [SymbolMetadataState, Dispatch<SymbolMetadataAction>];
}

export default MetadataAutoCompleteProps;
