import React, { useEffect } from "react";
import "./App.css";
import { Switch, Route, withRouter } from "react-router-dom";
// import Home from "./views/Home";
import Login from "./views/Login";
import Room from "./views/Room";
import PrivateRoute from "./components/PrivateRoute";
import SignUp from "./views/SignUp";
import { auth } from "./config/firebase";
import { useUserState, UserContext } from "./context/context";
import { actionType } from "./context/reducer";

function App({ history }) {
  const [{ user }, dispatch] = useUserState(UserContext);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: actionType.SET_USER,
          payload: authUser,
        });
        localStorage.setItem("isAuth", true);
      }
    });
  }, [dispatch, history, user]);

  useEffect(() => {
    const isAuth = localStorage.getItem("isAuth");
    if (isAuth || user) {
      history.push("/");
    }
  }, [history, user]);

  return (
    <div className="app">
      <div className="app__body">
        <Switch>
          <PrivateRoute path="/" exact>
            <Room />
          </PrivateRoute>
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
  );
}

export default withRouter(App);
