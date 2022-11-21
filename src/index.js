import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./Providers/auth";
import { UserInfoProvider } from "./Providers/userInfo";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <UserInfoProvider>
      <App />
    </UserInfoProvider>
  </AuthProvider>
);
