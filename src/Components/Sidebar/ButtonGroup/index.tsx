import { FunctionComponent } from "react";
import { BoxProps } from "@mui/material/Box/Box";
import StyledStack from "./styles";

export const SidebarButtonGroup: FunctionComponent<Omit<BoxProps, "sx">> = (
  props
) => <StyledStack {...props} spacing={1} />;

export default SidebarButtonGroup;
