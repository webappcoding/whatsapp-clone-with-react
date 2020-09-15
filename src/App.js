import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";
import Room from "./views/Room";
import PrivateRoute from "./components/PrivateRoute";
import SignUp from "./views/SignUp";

function App() {
  return (
    <Router>
      <div className="app">
        <div className="app__body">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/sign-up">
              <SignUp />
            </Route>
            <PrivateRoute path="/rooms/:rootId">
              <Room />
            </PrivateRoute>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
