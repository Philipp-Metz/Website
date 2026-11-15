import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/ntr/latin-400.css";
import "@fontsource/fira-code/latin-400.css";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
