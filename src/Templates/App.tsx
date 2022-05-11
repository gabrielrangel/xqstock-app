import { FunctionComponent } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Paper from "../Components/Paper";
import Dashboard from "./Dashboard";
import NotFound from "./NotFound";
import Starred from "./Starred";
import History from "./History";
import PageGrid from "../Components/PageGrid";
import ThemeContextProvider from "../Context/ThemeContext";

export const App: FunctionComponent = () => (
  <ThemeContextProvider>
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
  </ThemeContextProvider>
);

export default App;
