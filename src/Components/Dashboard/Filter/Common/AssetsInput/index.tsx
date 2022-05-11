import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { Dispatch, FunctionComponent, useEffect, useState } from "react";

interface IOOption {}

export const AssetsInput: FunctionComponent<{
  placeholder: string;
  fetchOptions: (input: string) => Promise<IOOption[]>;
  valueReducer: [IOOption, Dispatch<unknown>];
}> = ({ placeholder, fetchOptions, valueReducer }) => {
  const [options, setOptions] = useState<readonly IOOption[]>([]);
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
      onChange={(event: any, newValue: IOOption | null) => {
        setOptions(newValue ? [newValue, ...options] : options);
        dispatchValue(newValue);
      }}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
    />
  );
};

export default AssetsInput;
