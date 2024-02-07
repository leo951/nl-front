import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./styles/global.scss";
import { UserProvider } from "./contexts/userContext";

const root = createRoot(document.getElementById("root"));
root.render(
  <UserProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </UserProvider>
);

reportWebVitals();
