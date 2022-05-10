import { AssetAction, AssetActionKind, AssetState } from "./types";

export function assetReducer(state: AssetState, action: AssetAction) {
  let assets;

  switch (action.type) {
    case AssetActionKind.ADD:
      assets = [...state.assets, action.payload];
      return { assets };
    case AssetActionKind.REMOVE:
      assets = state.assets.filter(
        ({ symbol }) => symbol !== action.payload.symbol
      );
      return { assets };
  }
}
