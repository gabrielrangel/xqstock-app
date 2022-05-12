import { FunctionComponent } from "react";
import { AutocompleteRenderInputParams } from "@mui/material/Autocomplete/Autocomplete";
import TextField from "./styles";

export const MetadataAutoCompleteInput: FunctionComponent<{
  params: AutocompleteRenderInputParams;
  placeholder: string;
}> = ({ params, placeholder }) => {
  const { InputProps, ...restParams } = params;
  const { startAdornment, ...restInputProps } = InputProps;
  return (
    <TextField
      {...restParams}
      InputProps={{
        ...restInputProps,
        startAdornment: (
          <div className={"start-adornment"}>{startAdornment}</div>
        ),
      }}
    />
  );
};

export default MetadataAutoCompleteInput;

const renderInput = (params: AutocompleteRenderInputParams) => {};
