import { FunctionComponent } from "react";
import { AutocompleteRenderInputParams } from "@mui/material/Autocomplete/Autocomplete";
import TextField from "./styles";

export const MetadataAutoCompleteInput: FunctionComponent<{
  params: AutocompleteRenderInputParams;
  placeholder: string;
}> = ({ params, placeholder }) => (
  <TextField {...params} placeholder={placeholder} variant="filled" />
);

export default MetadataAutoCompleteInput;
