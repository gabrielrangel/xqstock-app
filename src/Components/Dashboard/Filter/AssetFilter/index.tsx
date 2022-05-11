import { FunctionComponent } from "react";
import FilterCard from "../Common/FilterCard";
import Options from "./options";

export const AssetFilter: FunctionComponent = () => {
  return <FilterCard title={"Ativos"} options={<Options />} grow />;
};

export default AssetFilter;
