import React from "react";
import { Switch, Route } from "react-router-dom";
import { MainPage, Page404, Page500, SignIn, SignUp } from "./Pages";

class SiteRouter extends React.Component {
  state = {};

  render() {
    return (
      <Switch>
        <Route exact path="/signin">
          <SignIn />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/404">
          <Page404 />
        </Route>
        <Route exact path="/500">
          <Page500 />
        </Route>
        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
    );
  }
}

export default SiteRouter;
