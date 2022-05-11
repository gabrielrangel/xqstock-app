import Grid from "@mui/material/Grid";
import styled from "@mui/material/styles/styled";

export default styled(Grid)<GainOptions>`
  .MuiGrid-item {
    height: 100vh;
  }

  main {
    overflow-y: auto;
  }
`;
