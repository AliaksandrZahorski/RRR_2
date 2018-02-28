import React from 'react';
import { Link } from 'react-router-dom';

import Spinner from './Spinner/Spinner';

const HomePage =() => (
  <div>
    <div>Home Page</div>
    <Link to="/about"> About </Link>
    <Spinner />
  </div>
);

export default HomePage;
