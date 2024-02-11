import React from "react";
import ReactDOM from "react-dom/client";
import client from "./Shared/config/clientConfig.ts";
import { ApolloProvider } from "@apollo/client";
import App from "./App/App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App/>
    </ApolloProvider>
  </React.StrictMode>
);
