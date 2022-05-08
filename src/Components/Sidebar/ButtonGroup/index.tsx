import { FunctionComponent } from "react";
import { BoxProps } from "@mui/material/Box/Box";
import Box from "./styles";

export const SidebarButtonGroup: FunctionComponent<Omit<BoxProps, "sx">> = (
  props
) => <Box {...props} />;

export default SidebarButtonGroup;
