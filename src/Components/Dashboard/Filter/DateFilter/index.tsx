import Button from "@mui/material/Button";
import { FunctionComponent } from "react";
import FilterCard from "../Common/FilterCard";

export const DateFilter: FunctionComponent = () => (
  <FilterCard title={"Período"} options={<Button />} />
);

export default DateFilter;
