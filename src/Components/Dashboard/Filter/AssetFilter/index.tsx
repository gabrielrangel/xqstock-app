import Button from "@mui/material/Button";
import { FunctionComponent } from "react";
import FilterCard from "../FilterCard";

export const AssetFilter: FunctionComponent = () => (
  <FilterCard title={"Ativos"} options={<Button />} grow>
    <>Ola</>
  </FilterCard>
);

export default AssetFilter;
