import { Dispatch } from "react";
import { AssetAction, AssetState } from "../../Reducers/AssetReducer/types";

export interface DashboardContextValue {
  assetsStateReducer: [AssetState, Dispatch<AssetAction>];
  showInputState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}
