import { FunctionComponent } from "react";
import Paper from "../Components/Global/Paper";
import ThemeProvider from "../Style/ThemeProvider";

export const App: FunctionComponent = () => (
  <ThemeProvider>
    <Paper elevation={0}>
      <div>xqstock-app</div>
    </Paper>
  </ThemeProvider>
);

export default App;