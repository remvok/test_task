import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { actions as userActions } from "../../redux/reducers/users";

class Dashboard extends Component {
  state = {};

  logout = () => {
    const { logoutUser } = this.props;
    logoutUser();
  };

  render() {
    return (
      <div>
        <div>Welcome to dashboard!</div>
        <a rel="noopener noreferrer" onClick={this.logout} href="/signin">
          Logout
        </a>
      </div>
    );
  }
}

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state) => ({});
export default withRouter(
  connect(mapStateToProps, {
    ...userActions,
  })(Dashboard)
);
