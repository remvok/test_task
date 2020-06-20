import React, { Component } from "react";
import { connect } from "react-redux";
import { Spin } from "antd";
import { withRouter } from "react-router-dom";
import { actions as meActions } from "../redux/reducers/me.resource";
import DashboardRouter from "./DashboardRouter";

export class DashApp extends Component {
  state = {};

  async componentDidMount() {
    const { getMe } = this.props;
    await getMe();
  }

  render() {
    const { isAuth, me } = this.props;
    if (!me) {
      return <Spin />;
    }
    return <DashboardRouter isAuth={isAuth} />;
  }
}

const mapStateToProps = (state) => {
  return {
    me: state.reducerMe.item,
  };
};
export default withRouter(connect(mapStateToProps, { ...meActions })(DashApp));
