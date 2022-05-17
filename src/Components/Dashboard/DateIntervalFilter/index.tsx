import {
  FunctionComponent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import FilterCard from "../FilterCard";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import Grid from "@mui/material/Grid";
import useDashboardContext from "../../../Hooks/useDashboardContext";
import { IDateErrorInterface } from "./types";
import { validateDates } from "./validateDates";

export const DateIntervalFilter: FunctionComponent = () => {
  const { timeIntervalState, hasErrorState } = useDashboardContext();
  const [{ startDate, endDate }, setTimeInterval] = timeIntervalState;
  const prevStartDate = useRef(startDate);
  const prevEndDate = useRef(endDate);
  const [, setHasError] = hasErrorState;
  const [endDateError, setEndDateError] = useState<IDateErrorInterface>({
    hasError: false,
  });
  const [startDateError, setStartDateError] = useState<IDateErrorInterface>({
    hasError: false,
  });

  const handleStartDateChange = useCallback(
    (newStartDate: Date | null) => {
      if (newStartDate?.getTime() !== prevStartDate.current?.getTime()) {
        setStartDateError({ hasError: false });
        setEndDateError({ hasError: false });
        setTimeInterval({ startDate: newStartDate, endDate });
      }
      prevStartDate.current = newStartDate;
    },
    [endDate, setTimeInterval]
  );

  const handleEndDateChange = useCallback(
    (newEndDate: Date | null) => {
      if (newEndDate?.getTime() !== prevEndDate.current?.getTime()) {
        setTimeInterval({ startDate, endDate: newEndDate });
      }
      prevEndDate.current = newEndDate;
    },
    [startDate, setTimeInterval]
  );

  useEffect(
    () => validateDates(startDate, setStartDateError, endDate, setEndDateError),
    [endDate, startDate]
  );

  useEffect(
    () => setHasError(startDateError.hasError || endDateError.hasError),
    [startDateError, endDateError, setHasError]
  );

  return (
    <Grid item md={5} sm={12}>
      <FilterCard title={"Período"}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DesktopDatePicker
            label="Início"
            inputFormat="dd/MM/yyyy"
            value={startDate}
            onChange={handleStartDateChange}
            renderInput={(params) => (
              <TextField
                {...params}
                error={startDateError.hasError}
                helperText={startDateError.helperText}
              />
            )}
          />
          <DesktopDatePicker
            label="Fim"
            inputFormat="dd/MM/yyyy"
            value={endDate}
            onChange={handleEndDateChange}
            renderInput={(params) => (
              <TextField
                {...params}
                error={endDateError.hasError}
                helperText={endDateError.helperText}
              />
            )}
          />
        </LocalizationProvider>
      </FilterCard>
    </Grid>
  );
};

export default DateIntervalFilter;
