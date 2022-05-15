import Autocomplete from "@mui/material/Autocomplete";

import {
  FunctionComponent,
  SyntheticEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import { SymbolMetadataState } from "../../../Reducers/SymbolMetadataReducer";

import { ISymbolMetadata } from "../../../Services/XqStockApi/types";
import MetadataInputOption from "./Option";
import MetadataAutoCompleteProps from "./types";
import MetadataAutoCompleteInput from "./Input";
import onMetadataAutoCompleteChange from "./onChange";
import MetadataInputTag from "./Tag";
import { AutocompleteRenderGetTagProps } from "@mui/material";

export const MetadataAutoComplete: FunctionComponent<
  MetadataAutoCompleteProps
> = ({ placeholder, fetchOptions, valueReducer }) => {
  const [options, setOptions] = useState<SymbolMetadataState>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const prevInputValueRef = useRef<string>();
  const [value] = valueReducer;

  const updateOptions = useCallback(
    (inputValue: string) => {
      fetchOptions(inputValue).then((newOptions) => {
        const filteredNewOptions = newOptions.filter(
          (o) => !options.some(({ Symbol }) => Symbol === o.Symbol)
        );

        const mergedOptions = [...filteredNewOptions, ...options].sort((a, b) =>
          a.Symbol.localeCompare(b.Symbol)
        );

        setOptions(mergedOptions);
      });
    },
    [fetchOptions, options]
  );

  const onChange = useCallback(
    (event: SyntheticEvent<Element, Event>, newValue: ISymbolMetadata[]) =>
      onMetadataAutoCompleteChange(event, newValue, valueReducer),
    [valueReducer]
  );

  const renderTags = useCallback(
    (value: ISymbolMetadata[], getTagProps: AutocompleteRenderGetTagProps) =>
      value.map((option, index) => (
        <MetadataInputTag {...getTagProps({ index })} option={option} />
      )),
    []
  );

  useEffect(() => {
    if (prevInputValueRef.current !== inputValue) {
      updateOptions(inputValue);
    }

    prevInputValueRef.current = inputValue;
  }, [inputValue, updateOptions]);

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
      renderTags={renderTags}
    />
  );
};

export default MetadataAutoComplete;
