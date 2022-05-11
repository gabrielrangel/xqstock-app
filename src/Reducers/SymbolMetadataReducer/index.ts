import {
  SymbolMetadataAction,
  SymbolMetadataActionKind,
  SymbolMetadataState,
} from "./types";

export * from "./types";

export function symbolMetadataReducer(
  state: SymbolMetadataState,
  action: SymbolMetadataAction
) {
  switch (action.type) {
    case SymbolMetadataActionKind.ADD:
      return [
        ...state.filter(({ Symbol }) => Symbol !== action.payload.Symbol),
        action.payload,
      ];
    case SymbolMetadataActionKind.REMOVE:
      return [
        ...state.filter(({ Symbol }) => Symbol !== action.payload.Symbol),
      ];
  }
}

export default symbolMetadataReducer;
