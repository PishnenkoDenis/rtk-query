import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import App from "./App";
import { setUpStore } from "./store/store";

const store = setUpStore();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
