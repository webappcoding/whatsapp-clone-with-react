import React from "react";
import { Redirect, Route } from "react-router-dom";
import { UserContext, useUserState } from "../context/context";

const isAuth = localStorage.getItem("isAuth");
const PrivateRoute = ({ children, ...rest }) => {
  const [{ user }] = useUserState(UserContext);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuth || user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
