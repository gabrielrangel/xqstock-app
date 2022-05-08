import Grid from "@mui/material/Grid/Grid";
import { FunctionComponent } from "react";
import Paper from "../Components/Global/Paper";
import Sidebar from "../Components/Sidebar";
import ThemeProvider from "../Style/ThemeProvider";

export const App: FunctionComponent = () => (
  <ThemeProvider>
    <Paper elevation={0}>
      <Grid container spacing={0}>
        <Grid item md={3}>
          <Sidebar/>
        </Grid>
        <Grid item md={9}>
          dkasjdkljaslkdjaslkdjas
        </Grid>
      </Grid>
    </Paper>
  </ThemeProvider>
);

export default App;
