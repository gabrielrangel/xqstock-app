import { styled } from "@mui/system";

export default styled("img")(({ theme }) => ({
  width: "100%",
  height: "auto",
  padding: theme.spacing(5),
  boxSizing: "border-box",
}));
