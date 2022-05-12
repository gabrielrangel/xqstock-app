import Button from "@mui/material/Button";
import * as React from "react";
import { FunctionComponent } from "react";
import FilterCard from "../FilterCard";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import Grid from "@mui/material/Grid";

export const DateIntervalFilter: FunctionComponent = () => {
  const [value, setValue] = React.useState<Date | null>(
    new Date("2014-08-18T21:11:54")
  );

  const handleChange = (newValue: Date | null) => {
    setValue(newValue);
  };

  return (
    <Grid item md={5} sm={12}>
      <FilterCard title={"Período"} options={<Button />}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DesktopDatePicker
            label="Início"
            inputFormat="MM/dd/yyyy"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
          <DesktopDatePicker
            label="Fim"
            inputFormat="MM/dd/yyyy"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </FilterCard>
    </Grid>
  );
};

export default DateIntervalFilter;
