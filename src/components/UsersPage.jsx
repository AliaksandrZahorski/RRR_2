import React from 'react';
import { Link } from 'react-router-dom';

import Common from './Common';

const UsersPage = () => (
  <div>
    <div>Users Page</div>
    <Link to="/"> Home </Link>
    <Common />
  </div>
  );

export default UsersPage;
