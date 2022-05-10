import { createContext, FunctionComponent, ReactNode, useReducer } from "react";
import { DashboardContextValue } from "./types";
import { assetReducer } from "../../Reducers/AssetReducer";
import { AssetState } from "../../Reducers/AssetReducer/types";

const DashboardContext = createContext<DashboardContextValue>(
  {} as DashboardContextValue
);

export const DashboardContextProvider: FunctionComponent<{
  children: ReactNode;
}> = ({ children }) => {
  const assetsState = useReducer(assetReducer, {} as AssetState);

  return (
    <DashboardContext.Provider value={{ assetsState }}>
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardContextProvider;
