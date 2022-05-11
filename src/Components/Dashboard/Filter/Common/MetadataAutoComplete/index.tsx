import Autocomplete from "@mui/material/Autocomplete";

import { FunctionComponent, SyntheticEvent, useEffect, useState } from "react";

import {
  SymbolMetadataActionKind,
  SymbolMetadataState,
} from "../../../../../Reducers/SymbolMetadataReducer";

import { ISymbolMetadata } from "../../../../../Services/XqStockApi/types";
import MetadataInputOption from "./Option";
import MetadataAutoCompleteProps from "./types";
import MetadataAutoCompleteInput from "./Input";

export const MetadataAutoComplete: FunctionComponent<
  MetadataAutoCompleteProps
> = ({ placeholder, fetchOptions, valueReducer }) => {
  const [options, setOptions] = useState<SymbolMetadataState>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [value, dispatchValue] = valueReducer;

  useEffect(() => {
    if (inputValue) {
      fetchOptions(inputValue).then((result) => setOptions(result));
    }
  }, [fetchOptions, inputValue]);

  return (
    <Autocomplete
      disablePortal
      multiple
      value={value}
      options={options}
      renderInput={(params) => (
        <MetadataAutoCompleteInput params={params} placeholder={placeholder} />
      )}
      getOptionLabel={({ Symbol, Name }) => `${Symbol} ${Name}`}
      onChange={(
        event: SyntheticEvent<Element, Event>,
        newValue: ISymbolMetadata[]
      ) => {
        newValue
          ?.filter(({ Symbol }) => !value.some((v) => v.Symbol === Symbol))
          .forEach((payload) =>
            dispatchValue({ type: SymbolMetadataActionKind.ADD, payload })
          );
      }}
      onInputChange={(event, newInputValue) => setInputValue(newInputValue)}
      renderOption={MetadataInputOption}
    />
  );
};

export default MetadataAutoComplete;
