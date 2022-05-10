import { ReactNode } from "react";

export interface FilterCardProps {
  title: string;
  children: ReactNode;
  options: ReactNode;
  grow?: boolean;
}

export default FilterCardProps;
