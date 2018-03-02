import React from 'react';

const LogoutForm = ({ logout, name }) => (
  <form name="loginform" onSubmit={logout}>
    <label>Welcome: <strong> {name}</strong></label>
    <input type="submit" value="Logout" />
  </form>
);

export default LogoutForm;