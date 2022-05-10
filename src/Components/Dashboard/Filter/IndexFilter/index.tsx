import Button from "@mui/material/Button";
import { FunctionComponent } from "react";
import FilterCard from "../FilterCard";

export const IndexFilter: FunctionComponent = () => (
  <FilterCard title={"Índices"} options={<Button />}>
    <>Ola</>
  </FilterCard>
);

export default IndexFilter;
