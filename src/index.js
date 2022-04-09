import React from "react";
import ReactDOMClint from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const container = document.getElementById("root");
const root = ReactDOMClint.createRoot(container);

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
