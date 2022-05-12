import Paper, { PaperProps } from "@mui/material/Paper";
import { styled } from "@mui/system";
import getOppositePaletteMode from "src/Util/getOppositePaletteMode";

export default styled(Paper, {
  shouldForwardProp: (prop) => prop !== "grow",
})<PaperProps & { grow?: boolean }>`
  flex-grow: ${({ grow = false }) => (grow ? 2 : 1)};
  padding: ${({ theme }) => theme.spacing(2)};
  display: flex;
  flex-direction: column;

  .cardHeader {
    color: ${({ theme }) =>
      theme.palette.secondary[getOppositePaletteMode(theme)]};
    font-family: "Poppins", Verdana, sans-serif;
    flex-grow: 1;
  }

  .header {
    display: flex;
    padding: ${({ theme }) => theme.spacing(1)} 0;

    .options {
      display: flex;
      gap: ${({ theme }) => theme.spacing(1)};
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: ${({ theme }) => theme.spacing(3)};
    padding: ${({ theme }) => theme.spacing(2)} 0;

    .MuiAutocomplete-root {
      flex-grow: 1;
    }
  }
`;
