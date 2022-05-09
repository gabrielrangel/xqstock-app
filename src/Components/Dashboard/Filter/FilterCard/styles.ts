import Paper, { PaperProps } from "@mui/material/Paper";
import styled from "@emotion/styled";
import FilterCardProps from "./types";

export default styled(Paper)<PaperProps & { grow?: boolean }>``;
