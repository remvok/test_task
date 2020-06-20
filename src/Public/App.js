import React, { Component } from "react";
import "./Styles/index.scss";
import SiteRouter from "./SiteRouter";

export class App extends Component {
  render() {
    const { isAuth } = this.props;
    return (
      <div className="site-wrapper">
        <SiteRouter isAuth={isAuth} />
      </div>
    );
  }
}

export default App;
