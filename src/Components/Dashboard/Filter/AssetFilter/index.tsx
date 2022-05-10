import Button from "@mui/material/Button";
import { FunctionComponent } from "react";
import { AssetCard } from "../Common/AssetCard";
import FilterCard from "../Common/FilterCard";

export const AssetFilter: FunctionComponent = () => {
  return (
    <FilterCard title={"Ativos"} options={<Button />} grow>
      <AssetCard />
    </FilterCard>
  );
};

export default AssetFilter;
