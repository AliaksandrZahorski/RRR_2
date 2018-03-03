import React from 'react';
import { Link } from 'react-router-dom';

import BlogContainer from '../BlogContainer/BlogContainer';

const HomePage =() => (
  <div>
    <Link to="/about"> About </Link>
    <BlogContainer />
  </div>
);

export default HomePage;
