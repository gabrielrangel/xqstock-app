import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { FunctionComponent } from "react";

export const AssetsInput: FunctionComponent<{
  options: readonly unknown[];
  placeholder: string;
}> = ({ options, placeholder }) => (
  <Autocomplete
    disablePortal
    options={options}
    renderInput={(params) => (
      <TextField {...params} placeholder={placeholder} variant="filled" />
    )}
  />
);

export default AssetsInput;
