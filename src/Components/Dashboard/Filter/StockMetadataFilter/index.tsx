import { FunctionComponent } from "react";
import FilterCard from "../Common/FilterCard";
import Options from "./options";
import MetadataInput from "../Common/MetadataInput";
import useDashboardContext from "../../../../Hooks/useDashboardContext";

export const StockMetadataFilter: FunctionComponent = () => {
  const fetchOptions = () => Promise.resolve([]);
  const { stockMetadataReducer } = useDashboardContext();

  return (
    <FilterCard title={"Ativos"} options={<Options />} grow>
      <MetadataInput
        placeholder={"Ativos"}
        fetchOptions={fetchOptions}
        valueReducer={stockMetadataReducer}
      />
    </FilterCard>
  );
};

export default StockMetadataFilter;
