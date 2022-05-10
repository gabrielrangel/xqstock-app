import Paper, { PaperProps } from "@mui/material/Paper";
import { styled } from "@mui/system";
import getOppositePalletteMode from "src/Util/getOppositePalletteMode";

export default styled(Paper)<PaperProps & { grow?: boolean }>`
  flex-grow: ${({ grow = false }) => (grow ? 2 : 1)};
  padding: ${({ theme }) => theme.spacing(2)};

  .MuiTypography-root {
    color: ${({ theme }) =>
      theme.palette.secondary[getOppositePalletteMode(theme)]};
    font-family: "Poppins" . Verdana;
  }

  .content {
    display: flex;
  }
`;
