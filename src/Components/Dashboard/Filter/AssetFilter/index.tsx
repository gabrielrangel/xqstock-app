import { FunctionComponent } from "react";
import { AssetCard } from "../Common";
import FilterCard from "../Common/FilterCard";
import Options from "./options";

export const AssetFilter: FunctionComponent = () => {
  return (
    <FilterCard title={"Ativos"} options={<Options />} grow>
      <AssetCard />
    </FilterCard>
  );
};

export default AssetFilter;
