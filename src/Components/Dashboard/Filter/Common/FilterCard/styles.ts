import Paper, { PaperProps } from "@mui/material/Paper";
import { styled } from "@mui/system";
import getOppositePaletteMode from "src/Util/getOppositePaletteMode";

export default styled(Paper, {
  shouldForwardProp: (prop) => prop !== "grow",
})<PaperProps & { grow?: boolean }>`
  flex-grow: ${({ grow = false }) => (grow ? 2 : 1)};
  padding: ${({ theme }) => theme.spacing(2)};

  .MuiTypography-root {
    color: ${({ theme }) =>
      theme.palette.secondary[getOppositePaletteMode(theme)]};
    font-family: "Poppins", Verdana, sans-serif;
    flex-grow: 1;
  }

  .header {
    display: flex;

    .options {
      display: flex;
      gap: ${({ theme }) => theme.spacing(1)};
    }
  }

  .content {
    display: flex;

    .MuiAutocomplete-root {
      flex-grow: 1;
    }
  }
`;
