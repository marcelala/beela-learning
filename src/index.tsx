import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthenticationProvider } from "./context/AuthenticationContext";
import { UserDataProvider } from "./context/UserDataContext";
import { TopicsDataProvider } from "./context/TopicsContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthenticationProvider>
      <UserDataProvider>
        <TopicsDataProvider>
          <App />
        </TopicsDataProvider>
      </UserDataProvider>
    </AuthenticationProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
