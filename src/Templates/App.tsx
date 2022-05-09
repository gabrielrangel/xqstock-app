import { FunctionComponent } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Paper from "../Components/Global/Paper";
import ThemeProvider from "../Style/ThemeProvider";
import Dashboard from "./Dashboard";
import NotFound from "./NotFound";
import Starred from "./Starred";
import History from "./History";
import PageGrid from "../Components/Global/PageGrid";

export const App: FunctionComponent = () => (
  <ThemeProvider>
    <Paper elevation={0}>
      <BrowserRouter>
        <PageGrid>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Starred" element={<Starred />} />
            <Route path="/History" element={<History />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageGrid>
      </BrowserRouter>
    </Paper>
  </ThemeProvider>
);

export default App;
