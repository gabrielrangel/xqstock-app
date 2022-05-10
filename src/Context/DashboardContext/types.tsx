import { Dispatch } from "react";
import { AssetAction, AssetState } from "../../Reducers/AssetReducer/types";

export interface DashboardContextValue {
  assetsState: [AssetState, Dispatch<AssetAction>];
}
