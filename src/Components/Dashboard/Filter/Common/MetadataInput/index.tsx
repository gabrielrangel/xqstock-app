import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

import {
  Dispatch,
  FunctionComponent,
  SyntheticEvent,
  useEffect,
  useState,
} from "react";

import {
  SymbolMetadataAction,
  SymbolMetadataActionKind,
  SymbolMetadataState,
} from "../../../../../Reducers/SymbolMetadataReducer";
import { ISymbolMetadata } from "../../../../../Services/XqStockApi/types";

export const MetadataInput: FunctionComponent<{
  placeholder: string;
  fetchOptions: (input: string) => Promise<SymbolMetadataState>;
  valueReducer: [SymbolMetadataState, Dispatch<SymbolMetadataAction>];
}> = ({ placeholder, fetchOptions, valueReducer }) => {
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
        <TextField {...params} placeholder={placeholder} variant="filled" />
      )}
      getOptionLabel={({ Symbol }) => Symbol}
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
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
    />
  );
};

export default MetadataInput;
