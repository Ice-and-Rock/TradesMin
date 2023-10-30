import React from "react";
import ReactDOM from "react-dom/client";
import App from "../src/App";
import "./styles/tailwind.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthProvider from "./Context/AuthProvider";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
