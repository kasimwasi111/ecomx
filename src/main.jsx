import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-kh7urcv28qc8phmx.us.auth0.com"
    clientId="o6nUeeKFBMaJz83XVgcN3BDC9rUi8itl"
    redirectUrii={window.location.origin}
  >
    <App />
  </Auth0Provider>
);
