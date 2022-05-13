import { FunctionComponent } from "react";
import { AutocompleteRenderInputParams } from "@mui/material/Autocomplete/Autocomplete";
import TextField from "./styles";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

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
          <>
            <div className={"start-adornment"}>{startAdornment}</div>
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          </>
        ),
      }}
      placeholder={"Pesquisar Ativos"}
    />
  );
};

export default MetadataAutoCompleteInput;

const renderInput = (params: AutocompleteRenderInputParams) => {};
