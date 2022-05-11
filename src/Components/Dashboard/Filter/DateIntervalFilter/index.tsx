import Button from "@mui/material/Button";
import { FunctionComponent } from "react";
import FilterCard from "../Common/FilterCard";

export const DateIntervalFilter: FunctionComponent = () => (
  <FilterCard title={"Período"} options={<Button />}>
    Date Interval
  </FilterCard>
);

export default DateIntervalFilter;
