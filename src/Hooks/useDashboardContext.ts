import { useContext } from "react";
import { DashboardContext } from "../Context/DashboardContext";
import { DashboardContextValue } from "../Context/DashboardContext/types";

export const useDashboardContext: () => DashboardContextValue = () =>
  useContext(DashboardContext);

export default useDashboardContext;
