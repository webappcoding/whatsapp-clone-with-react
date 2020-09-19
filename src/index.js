import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { CssBaseline } from "@material-ui/core";
import { UserContextProvider } from "./context/context";
import reducer, { initialState } from "./context/reducer";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.Fragment>
    <UserContextProvider initialState={initialState} reducer={reducer}>
      <BrowserRouter>
        <CssBaseline />
        <App />
      </BrowserRouter>
    </UserContextProvider>
  </React.Fragment>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
