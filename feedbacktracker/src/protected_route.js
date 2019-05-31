import React from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "./auth";
import { Dashboard } from "./views/Dashboard";

export const ProtectedRoute = ({
  component: Component,
  ...rest
}) => {
  console.log(rest)
  return (
    <Route
      {...rest}
      render={props => {
        if (auth.isAuthenticated()) {
          return <Component {...props} {...rest} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location
                }
              }}
            />
          );
        }
      }}
    />
  );
};
