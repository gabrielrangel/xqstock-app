import Grid from "@mui/material/Grid/Grid";
import { FunctionComponent } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Paper from "../Components/Global/Paper";
import Sidebar from "../Components/Sidebar";
import ThemeProvider from "../Style/ThemeProvider";
import Dashboard from "./Dashboard";
import NotFound from "./NotFound";

export const App: FunctionComponent = () => (
  <BrowserRouter>
    <ThemeProvider>
      <Paper elevation={0}>
        <Grid container spacing={0}>
          <Grid item md={3}>
            <Sidebar />
          </Grid>
          <Grid item md={9}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Grid>
        </Grid>
      </Paper>
    </ThemeProvider>
  </BrowserRouter>
);

export default App;
