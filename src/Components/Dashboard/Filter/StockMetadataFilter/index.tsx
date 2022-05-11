import { FunctionComponent } from "react";
import FilterCard from "../Common/FilterCard";
import Options from "./options";
import MetadataInput from "../Common/MetadataInput";
import useDashboardContext from "../../../../Hooks/useDashboardContext";
import { searchByKeyword } from "../../../../Services/XqStockApi/searchByKeyword";

export const StockMetadataFilter: FunctionComponent = () => {
  const { stockMetadataReducer } = useDashboardContext();

  return (
    <FilterCard title={"Ativos"} options={<Options />} grow>
      <MetadataInput
        placeholder={"Ativos"}
        fetchOptions={searchByKeyword}
        valueReducer={stockMetadataReducer}
      />
    </FilterCard>
  );
};

export default StockMetadataFilter;
