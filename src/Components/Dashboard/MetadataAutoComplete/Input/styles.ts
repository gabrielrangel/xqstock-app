import TextField from "@mui/material/TextField/TextField";
import styled from "@mui/system/styled";

export default styled(TextField)`
  .start-adornment {
    content: "";
    height: 100px;
    max-height: 100px;
    overflow-y: auto;
  }

  input {
    width: 100% !important;
    min-width: auto !important;
  }
`;
