import { ReactNode } from "react";

export interface FilterCardProps {
  title: string;
  options: ReactNode;
  grow?: boolean;
}

export default FilterCardProps;
