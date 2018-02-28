import React from 'react';
import { Link } from 'react-router-dom';

import Spinner from './Spinner/Spinner.jsx';

const HomePage =() => (
  <div>
    <div>Home Page</div>
    <Link to="/a"> A </Link>
    <Spinner />
  </div>
);

export default HomePage;