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

export const MetadataInput: FunctionComponent<{
  placeholder: string;
  fetchOptions: (input: string) => Promise<SymbolMetadataState[]>;
  valueReducer: [SymbolMetadataState, Dispatch<SymbolMetadataAction>];
}> = ({ placeholder, fetchOptions, valueReducer }) => {
  const [options, setOptions] = useState<readonly SymbolMetadataState[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [value, dispatchValue] = valueReducer;

  useEffect(() => {
    fetchOptions(inputValue).then((result) => setOptions(result));
  }, [fetchOptions, inputValue]);

  return (
    <Autocomplete
      disablePortal
      value={value}
      options={options}
      renderInput={(params) => (
        <TextField {...params} placeholder={placeholder} variant="filled" />
      )}
      onChange={(
        _event: SyntheticEvent<Element, Event>,
        newValue: SymbolMetadataState | null
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
