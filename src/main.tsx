import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider as MobxProvider } from "mobx-react";
import { store } from "./store/store.ts";

import App from "./App.tsx";
import { Provider } from "./provider.tsx";
import "@/styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider>
        <MobxProvider {...store}>
          <App />
        </MobxProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
