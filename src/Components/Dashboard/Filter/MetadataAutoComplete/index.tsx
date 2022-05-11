import Autocomplete from "@mui/material/Autocomplete";

import {
  FunctionComponent,
  SyntheticEvent,
  useCallback,
  useMemo,
  useState,
} from "react";

import { SymbolMetadataState } from "../../../../Reducers/SymbolMetadataReducer";

import { ISymbolMetadata } from "../../../../Services/XqStockApi/types";
import MetadataInputOption from "./Option";
import MetadataAutoCompleteProps from "./types";
import MetadataAutoCompleteInput from "./Input";
import onMetadataAutoCompleteChange from "./onChange";

export const MetadataAutoComplete: FunctionComponent<
  MetadataAutoCompleteProps
> = ({ placeholder, fetchOptions, valueReducer }) => {
  const [options, setOptions] = useState<SymbolMetadataState>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [value] = valueReducer;

  useMemo(() => {
    if (inputValue) {
      fetchOptions(inputValue).then((result) => setOptions(result));
    }
  }, [fetchOptions, inputValue]);

  const onChange = useCallback(
    (event: SyntheticEvent<Element, Event>, newValue: ISymbolMetadata[]) =>
      onMetadataAutoCompleteChange(event, newValue, valueReducer),
    [valueReducer]
  );

  return (
    <Autocomplete
      options={options}
      renderInput={(params) => (
        <MetadataAutoCompleteInput params={params} placeholder={placeholder} />
      )}
      disablePortal
      getOptionLabel={({ Symbol, Name }) => `${Symbol} ${Name}`}
      multiple
      onChange={onChange}
      onInputChange={(event, newInputValue) => setInputValue(newInputValue)}
      value={value}
      renderOption={MetadataInputOption}
    />
  );
};

export default MetadataAutoComplete;
