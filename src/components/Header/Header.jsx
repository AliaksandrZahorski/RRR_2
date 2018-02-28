import React from 'react';

const Header = ({ login }) => (
  <form name="loginform" onSubmit={login}>
    <label>User name</label>
    <input type="text" name="user" placeholder="username" />
    <label>Password</label>
    <input type="password" name="password" placeholder="password" />
    <input type="submit" value="Login" />
  </form>
);

export default Header;
