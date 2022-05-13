import { ISymbolMetadata } from "../../../../Services/XqStockApi/types";
import Chip from "@mui/material/Chip";
import { FunctionComponent } from "react";
import { Tooltip } from "@mui/material";

export const MetadataInputTag: FunctionComponent<{
  option: ISymbolMetadata;
  key: number;
  className: string;
  disabled: boolean;
  "data-tag-index": number;
  tabIndex: -1;
  onDelete: (event: any) => void;
}> = ({ option, ...props }) => (
  <Tooltip title={option.Name}>
    <Chip {...props} label={option.Symbol} />
  </Tooltip>
);

export default MetadataInputTag;
