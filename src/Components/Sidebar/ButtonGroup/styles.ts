import Stack from "@mui/material/Stack";
import { styled } from "@mui/system";

export default styled(Stack)`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing(2)} 0;
`;
