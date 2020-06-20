import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { actions as meActions } from "../../../redux/reducers/me.resource";
import { actions as UserActions } from "../../../redux/reducers/users";
import "./index.scss";
import SingUpForm from "./SingUpForm";
import customMessage from "../../../helpers/customMessage";

class SignUp extends Component {
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

  handleSuccess = () => {
    const { history } = this.props;
    customMessage({ msg: "Successful sign up!", type: "info", duration: 10 });
    history.push("/signin");
  };

  render() {
    const { registerUser } = this.props;
    return (
      <div className="login-form-wrapper">
        <h1>Sign up</h1>
        <SingUpForm
          handleSubmit={registerUser}
          handleSuccess={this.handleSuccess}
        />
        Already have an account? <Link to="/signin">Login</Link>
      </div>
    );
  }
}

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state) => ({ me: state.reducerMe.item });
export default withRouter(
  connect(mapStateToProps, {
    ...meActions,
    ...UserActions,
  })(SignUp)
);
