import { Dispatch, SetStateAction } from "react";
import { AssetAction, AssetState } from "../../Reducers/AssetReducer/types";

export interface DashboardContextValue {
  assetsStateReducer: [AssetState, Dispatch<AssetAction>];
  showInputState: [boolean, Dispatch<SetStateAction<boolean>>];
}
