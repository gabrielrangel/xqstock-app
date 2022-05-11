import {
  SymbolMetadataAction,
  SymbolMetadataState,
} from "../../../Reducers/SymbolMetadataReducer";
import { Dispatch } from "react";

export interface MetadataAutoCompleteProps {
  placeholder: string;
  fetchOptions: (input: string) => Promise<SymbolMetadataState>;
  valueReducer: [SymbolMetadataState, Dispatch<SymbolMetadataAction>];
}

export default MetadataAutoCompleteProps;
