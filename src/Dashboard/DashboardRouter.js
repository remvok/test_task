import React from "react";
import { Switch, Route } from "react-router-dom";
import { Page404, Page500 } from "../Public/Pages";
import { Dashboard } from "./Pages";

class DashboardRouter extends React.Component {
  state = {};

  render() {
    return (
      <Switch>
        <Route exact path="/dashboard/404">
          <Page404 />
        </Route>
        <Route exact path="/dashboard/500">
          <Page500 />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    );
  }
}

export default DashboardRouter;
