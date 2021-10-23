import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AuthenticationProvider } from "./context/AuthenticationContext";
import { UserDataProvider } from "./context/UserDataContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthenticationProvider>
      <UserDataProvider>
        <App />
      </UserDataProvider>
    </AuthenticationProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
