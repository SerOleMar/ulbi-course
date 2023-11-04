import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./theme/ThemeProvider";
import App from "./App";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
);
