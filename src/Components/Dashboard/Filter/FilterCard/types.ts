import { ReactNode } from "react";

export interface FilterCardProps {
  title: string;
  options: ReactNode;
  grow?: boolean;
  children: ReactNode;
}

export default FilterCardProps;
