import React from 'react';
import ReactDOM from "react-dom/client";
import reportWebVitals from './reportWebVitals';

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import ThemeProvider from "@mui/material/styles/ThemeProvider";

import theme from "./Style/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <div>xqstock-app</div>
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
