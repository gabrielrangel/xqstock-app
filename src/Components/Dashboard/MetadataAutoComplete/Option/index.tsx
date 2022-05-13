import { ISymbolMetadata } from "../../../../Services/XqStockApi/types";
import Option from "./styles";
import Typography from "@mui/material/Typography/Typography";
import Chip from "@mui/material/Chip";

export const MetadataInputOption = (
  _props: any,
  { Name, Symbol }: ISymbolMetadata
) => {
  if (Name.length > 30) {
    Name = `${Name.slice(0, 30)}...`;
  }

  return (
    <Option {..._props}>
      <Chip className={"symbol"} label={Symbol} />
      <Typography>{Name}</Typography>
    </Option>
  );
};

export default MetadataInputOption;
