import { FunctionComponent } from "react";
import FilterCard from "../Common/FilterCard";
import Options from "./options";
import MetadataAutoComplete from "../Common/MetadataAutoComplete";
import useDashboardContext from "../../../../Hooks/useDashboardContext";
import { searchByKeyword } from "../../../../Services/XqStockApi/searchByKeyword";

export const StockMetadataFilter: FunctionComponent = () => {
  const { stockMetadataReducer } = useDashboardContext();

  return (
    <FilterCard title={"Ativos"} options={<Options />} grow>
      <MetadataAutoComplete
        placeholder={"Ativos"}
        fetchOptions={searchByKeyword}
        valueReducer={stockMetadataReducer}
      />
    </FilterCard>
  );
};

export default StockMetadataFilter;
