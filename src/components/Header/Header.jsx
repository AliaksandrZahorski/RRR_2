import React from 'react';
import { connect } from 'react-redux';

import LoginForm from './LoginForm/LoginForm';
import LogoutForm from './LogoutForm/LogoutForm';
import { loginUser, logoutUser } from '../../actions';

import './Header.css';

const mapStateToProps = ({ users }) => ({
  name: users.name
});

const mapDispatchToProps = dispatch => ({
  onHandleLogin(user) {
    dispatch(loginUser(user));
  },
  onHandleLogout() {
    dispatch(logoutUser());
  }
});

const Header = ({ onHandleLogin, onHandleLogout, name }) => {
  const handleLogin = event => {
    event.preventDefault();
    const user = {
      name: event.target.user.value,
      password: event.target.password.value,
    };
    onHandleLogin(user);
  };
  const handleLogout = event => {
    event.preventDefault();
    onHandleLogout();
  };

  return (
    <div className="header">
      {
        name ?
        <LogoutForm logout={handleLogout} name={name} />
        :
        <LoginForm login={handleLogin} />
      }
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
