import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { actions as userActions } from "../../../redux/reducers/users";
import { actions as meActions } from "../../../redux/reducers/me.resource";
import "./index.scss";
import SingInForm from "./SingInForm";

class SignIn extends Component {
  state = {};

  componentDidMount() {
    const { getMe, me } = this.props;
    if (!me) {
      getMe();
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { history, me } = this.props;
    if (me) {
      history.push("/dashboard");
    }
  }

  render() {
    const { loginUser } = this.props;
    return (
      <div className="login-form-wrapper">
        <h1>Sign in</h1>
        <SingInForm handleSubmit={loginUser} />
        <Link to="/signup">Click here to sign up</Link>
      </div>
    );
  }
}

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state) => ({ me: state.reducerMe.item });
export default withRouter(
  connect(mapStateToProps, {
    ...meActions,
    ...userActions,
  })(SignIn)
);
