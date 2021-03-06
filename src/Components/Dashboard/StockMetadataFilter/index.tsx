import { FunctionComponent } from "react";
import FilterCard from "../FilterCard";
import Options from "./options";
import MetadataAutoComplete from "../MetadataAutoComplete";
import useDashboardContext from "../../../Hooks/useDashboardContext";
import Grid from "@mui/material/Grid";

export const StockMetadataFilter: FunctionComponent = () => {
  const { stockMetadataReducer } = useDashboardContext();

  return (
    <Grid item md={7} sm={12}>
      <FilterCard title={"Ativos"} options={<Options />} grow>
        <MetadataAutoComplete
          placeholder={"Ativos"}
          valueReducer={stockMetadataReducer}
        />
      </FilterCard>
    </Grid>
  );
};

export default StockMetadataFilter;
