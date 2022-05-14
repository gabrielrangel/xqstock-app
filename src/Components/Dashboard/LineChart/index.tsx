import Container from "@mui/material/Container";
import { FunctionComponent, useEffect, useState } from "react";
import useDashboardContext from "../../../Hooks/useDashboardContext";
import { ILineChartOption } from "./types";
import { updateOptionState } from "./updateOptionState";

export const DashboardLineChart: FunctionComponent = () => {
  const [options, setOptions] = useState<ILineChartOption[]>();

  const { timeIntervalState, stockMetadataReducer } = useDashboardContext();
  const [timeInterval] = timeIntervalState;
  const [stockMetadata] = stockMetadataReducer;

  useEffect(
    () => updateOptionState(timeInterval, stockMetadata, setOptions),
    [timeInterval, stockMetadata]
  );

  return <Container maxWidth="lg">{JSON.stringify(options)}</Container>;
};

export default DashboardLineChart;
