import { FunctionComponent } from "react";
import FilterCard from "../Common/FilterCard";
import Options from "./options";

export const StockMetadataFilter: FunctionComponent = () => {
  return (
    <FilterCard title={"Ativos"} options={<Options />} grow>
      StockMetadata
    </FilterCard>
  );
};

export default StockMetadataFilter;
