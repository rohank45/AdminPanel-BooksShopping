import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <ToastContainer className="foo" style={{ fontWeight: "bold" }} />
  </React.StrictMode>,
  document.getElementById("root")
);
