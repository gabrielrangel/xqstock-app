import React from 'react';
import ReactDOM from "react-dom/client";
import reportWebVitals from './reportWebVitals';

import "./Style/css/style.css";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import ThemeProvider from './Style/ThemeProvider'

import Paper from "./Components/Global/Paper";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Paper elevation={0}>
        <div>xqstock-app</div>
      </Paper>
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
