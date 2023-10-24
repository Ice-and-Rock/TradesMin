import AuthProvider from "./Context/AuthProvider";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "../src/App";
import "./styles/tailwind.css";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
