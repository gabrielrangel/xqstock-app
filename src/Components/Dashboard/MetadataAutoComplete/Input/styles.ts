import TextField from "@mui/material/TextField/TextField";
import styled from "@mui/system/styled";

export default styled(TextField)`
  .start-adornment {
    content: "";
    height: 100px;
    max-height: 100px;
    overflow-y: auto;
    flex-grow: 1;
    flex-basis: 100%;
  }

  input {
    flex-grow: 1;
  }
`;
