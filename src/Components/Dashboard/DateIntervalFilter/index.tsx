import Button from "@mui/material/Button";
import * as React from "react";
import { FunctionComponent, useCallback } from "react";
import FilterCard from "../FilterCard";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import Grid from "@mui/material/Grid";
import useDashboardContext from "../../../Hooks/useDashboardContext";

export const DateIntervalFilter: FunctionComponent = () => {
  const { timeIntervalState } = useDashboardContext();
  const [{ startDate, endDate }, setTimeInterval] = timeIntervalState;

  const handleStartDateChange = useCallback(
    (newStartDate: Date | null) =>
      setTimeInterval({ startDate: newStartDate, endDate }),
    [endDate, setTimeInterval]
  );

  const handleEndDateChange = useCallback(
    (newEndDate: Date | null) =>
      setTimeInterval({ startDate, endDate: newEndDate }),
    [startDate, setTimeInterval]
  );

  return (
    <Grid item md={5} sm={12}>
      <FilterCard title={"Período"} options={<Button />}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DesktopDatePicker
            label="Início"
            inputFormat="MM/dd/yyyy"
            value={startDate}
            onChange={handleStartDateChange}
            renderInput={(params) => <TextField {...params} />}
          />
          <DesktopDatePicker
            label="Fim"
            inputFormat="MM/dd/yyyy"
            value={endDate}
            onChange={handleEndDateChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </FilterCard>
    </Grid>
  );
};

export default DateIntervalFilter;
