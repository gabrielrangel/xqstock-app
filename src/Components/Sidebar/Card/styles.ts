import { Card } from "@mui/material";
import { styled } from "@mui/system";

export const StyledSidebarCard = styled(Card)`
  background-color: ${({ theme }) =>
    theme.palette.mode === "dark" ? "#212121" : "#f5f5f5"};
  height: 100vh;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  background-image: none;
`;

export default StyledSidebarCard;
