import { Typography } from "@mui/material";
import Box from "@mui/system/Box";
import { FunctionComponent } from "react";
import StyledPaper from "./styles";
import FilterCardProps from "./types";

export const DashboardFilterCard: FunctionComponent<FilterCardProps> = ({
  children,
  title,
  options,
  grow,
}) => (
  <StyledPaper elevation={3} grow={grow}>
    <Box className="header">
      <Typography>{title}</Typography>
      <Box className="options">{options}</Box>
    </Box>
    <Box className="content">{children}</Box>
  </StyledPaper>
);

export default DashboardFilterCard;
