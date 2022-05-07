import { Card } from "@mui/material";
import { styled } from "@mui/system";

export const StyledSidebarCard = styled(Card)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: `${theme.palette.primary[theme.palette.mode]}35`,
  height: "100vh",
  borderTopLeftRadius: 0,
  borderBottomLeftRadius: 0,
}));

export default StyledSidebarCard;
