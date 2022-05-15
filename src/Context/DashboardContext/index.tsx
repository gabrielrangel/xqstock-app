import {
  createContext,
  FunctionComponent,
  ReactNode,
  useReducer,
  useState,
} from "react";

import { DashboardContextValue, ITimeIntervalState } from "./types";

import symbolMetadataReducer, {
  SymbolMetadataReducer,
} from "../../Reducers/SymbolMetadataReducer";

export const DashboardContext = createContext<DashboardContextValue>(
  {} as DashboardContextValue
);

export const DashboardContextProvider: FunctionComponent<{
  children: ReactNode;
}> = ({ children }) => {
  const stockMetadataReducer = useReducer<SymbolMetadataReducer>(
    symbolMetadataReducer,
    []
  );

  const timeIntervalState = useState<ITimeIntervalState>({
    startDate: new Date(),
    endDate: new Date(),
  } as ITimeIntervalState);

  const hasError = useState<boolean>(false);

  return (
    <DashboardContext.Provider
      value={{ stockMetadataReducer, timeIntervalState, hasError }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardContextProvider;
