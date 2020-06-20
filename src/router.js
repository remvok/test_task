import React from "react";
import { connect } from "react-redux";
import { Router, Route, Redirect, Switch } from "react-router-dom";
import { hasAuthData, reSetAuthToken } from "./redux/authStorage";
import DashApp from "./Dashboard/App";
import App from "./Public/App";
import "./redux/reducers/globalAuth";

function PrivateRoute({ children, isAuth, ...rest }) {
  reSetAuthToken();
  return (
    <Route
      // eslint-disable-next-line
      {...rest}
      render={
        // eslint-disable-next-line
        ({ location }) =>
          isAuth ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/signin",
                state: { from: location },
              }}
            />
          )
      }
    />
  );
}

// eslint-disable-next-line
const SiteRoute = ({ children, isAuth, ...rest }) => {
  reSetAuthToken();
  return (
    <Route
      // eslint-disable-next-line
      {...rest}
      // eslint-disable-next-line
      render={({ location }) => children}
    />
  );
};

const Routes = ({ history, isAuth }) => (
  <Router history={history}>
    <Switch>
      <PrivateRoute exact path="/dashboard*" isAuth={isAuth}>
        <DashApp isAuth={isAuth} />
      </PrivateRoute>
      <SiteRoute exact path="/*" isAuth={isAuth}>
        <App isAuth={isAuth} />
      </SiteRoute>
    </Switch>
  </Router>
);

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state) => ({
  isAuth: hasAuthData(),
});
export default connect(mapStateToProps, {})(Routes);
