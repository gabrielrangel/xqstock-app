import { FunctionComponent, ReactNode } from "react";
import StyledPaper from "./styles";

export const FilterItemCard: FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => <StyledPaper>{children}</StyledPaper>;

export default FilterItemCard;
