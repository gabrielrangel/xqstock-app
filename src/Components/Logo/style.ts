import { styled } from "@mui/system";

export default styled("img")`
  width: 100%;
  height: auto;
  margin: ${({ theme }) => theme.spacing(1)} 0;

  ${({ theme }) => theme.breakpoints.up("lg")} {
    width: calc(100% - ${({ theme }) => theme.spacing(1)} - ${({ theme }) =>
  theme.spacing(1)});
    margin: ${({ theme }) => theme.spacing(1)};
  
  ${({ theme }) => theme.breakpoints.up("xl")} {
    width: calc(100% - ${({ theme }) => theme.spacing(5)} - ${({ theme }) =>
  theme.spacing(5)});
    margin: ${({ theme }) => theme.spacing(1)}
      ${({ theme }) => theme.spacing(5)};
  }
`;
