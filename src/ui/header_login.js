import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { signIn, signOut } from "../actions/";
import { initGoogleAPI } from "../helpers/auth_helpers";

class Login extends Component {
  static propTypes = {
    user: PropTypes.shape({
      userName: PropTypes.string,
      userId: PropTypes.string,
      token: PropTypes.string,
      googleToken: PropTypes.string,
      isAuth: PropTypes.bool.isRequired
    }),
    signIn: PropTypes.func.isRequired,
    signOut: PropTypes.func.isRequired
  };

  componentDidMount() {
    initGoogleAPI();
  }

  render() {
    const { user } = this.props;
    return user.isAuth ? (
      <div className="header-login">
        <span>
          Привет, <b>{user.userName}</b>!
        </span>
        <button onClick={this.props.signOut} className="login-button">
          Выйти
        </button>
        <Link to="/news/add">
          <i className="fas fa-plus add-icon" title="Добавить новость" />
        </Link>
      </div>
    ) : (
      <div className="header-login">
        <button onClick={this.props.signIn} className="login-button">
          Войти
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(
  mapStateToProps,
  { signIn, signOut }
)(Login);
