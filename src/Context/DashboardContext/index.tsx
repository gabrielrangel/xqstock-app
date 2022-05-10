import {
  createContext,
  FunctionComponent,
  ReactNode,
  useReducer,
  useState,
} from "react";
import { DashboardContextValue } from "./types";
import { assetReducer } from "../../Reducers/AssetReducer";
import { AssetState } from "../../Reducers/AssetReducer/types";

export const DashboardContext = createContext<DashboardContextValue>(
  {} as DashboardContextValue
);

export const DashboardContextProvider: FunctionComponent<{
  children: ReactNode;
}> = ({ children }) => {
  const assetsStateReducer = useReducer(assetReducer, {} as AssetState);
  const showInputState = useState<boolean>(false);

  return (
    <DashboardContext.Provider value={{ assetsStateReducer, showInputState }}>
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardContextProvider;
