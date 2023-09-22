import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client"; // Import createRoot from "react-dom/client"

const root = createRoot(document.getElementById("root")); // Use createRoot

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
