import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { actions as meActions } from "../../redux/reducers/me.resource";

class MainPage extends Component {
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
    return (
      <div>
        <h1>Welcome</h1>
        <div>
          <a href="/signin">Sign in</a>
        </div>
        <div>
          <a href="/signup">Sign up</a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ me: state.reducerMe.item });
export default withRouter(
  connect(mapStateToProps, {
    ...meActions,
  })(MainPage)
);
