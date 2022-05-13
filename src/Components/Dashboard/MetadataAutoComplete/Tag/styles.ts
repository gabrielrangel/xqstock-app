import styled from "@mui/system/styled";
import MenuItem from "@mui/material/MenuItem";

export default styled(MenuItem)`
  gap: ${({ theme }) => theme.spacing(0.5)};

  .symbol {
    flex-grow: 0;
  }
`;
