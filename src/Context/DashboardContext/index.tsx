import { createContext, FunctionComponent, ReactNode, useState } from "react";
import { IXqStockApiAsset } from "src/Services/XqStockApi/types";
import { DashboardContextValue } from "./types";

const DashboardContext = createContext<DashboardContextValue>(
  {} as DashboardContextValue
);

export const DashboardContextProvider: FunctionComponent<{
  children: ReactNode;
}> = ({ children }) => {
  const assetsState = useState<IXqStockApiAsset>();

  return (
    <DashboardContext.Provider value={{ assetsState }}>
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardContextProvider;
