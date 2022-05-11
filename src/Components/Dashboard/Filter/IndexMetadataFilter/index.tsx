import Button from "@mui/material/Button";
import { FunctionComponent } from "react";
import FilterCard from "../Common/FilterCard";

export const IndexMetadataFilter: FunctionComponent = () => (
  <FilterCard title={"Índices"} options={<Button />}>
    IndexMetadata
  </FilterCard>
);

export default IndexMetadataFilter;
