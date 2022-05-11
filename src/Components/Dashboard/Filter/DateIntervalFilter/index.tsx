import Button from "@mui/material/Button";
import { FunctionComponent } from "react";
import FilterCard from "../Common/FilterCard";

export const DateIntervalFilter: FunctionComponent = () => {
  return (
    <FilterCard title={"Período"} options={<Button />}>
      DateTimeInterval
    </FilterCard>
  );
};

export default DateIntervalFilter;
