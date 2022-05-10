import Button from "@mui/material/Button";
import { FunctionComponent } from "react";
import FilterCard from "../FilterCard";

export const DateFilter: FunctionComponent = () => (
  <FilterCard title={"Período"} options={<Button />}>
    <>Ola</>
  </FilterCard>
);

export default DateFilter;
