import { Dispatch, SyntheticEvent } from "react";
import { ISymbolMetadata } from "../../../Services/XqStockApi/types";
import {
  SymbolMetadataAction,
  SymbolMetadataActionKind,
  SymbolMetadataState,
} from "../../../Reducers/SymbolMetadataReducer";

export function onMetadataAutoCompleteChange(
  event: SyntheticEvent<Element, Event>,
  newValue: ISymbolMetadata[],
  [value, dispatchValue]: [SymbolMetadataState, Dispatch<SymbolMetadataAction>],
  reason: string
) {
  console.log(reason);
  if (reason !== "removeOption") {
    newValue
      .filter((i) => !value.some((v) => v.Symbol === i.Symbol))
      .forEach((payload) =>
        dispatchValue({
          type: SymbolMetadataActionKind.ADD,
          payload,
        })
      );

    value
      .filter((i) => !newValue.some((v) => v.Symbol === i.Symbol))
      .forEach((payload) =>
        dispatchValue({
          type: SymbolMetadataActionKind.REMOVE,
          payload,
        })
      );
  }
}

export default onMetadataAutoCompleteChange;
