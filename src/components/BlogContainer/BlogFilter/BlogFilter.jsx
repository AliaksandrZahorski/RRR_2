import React from 'react';

import './BlogFilter.css';

const BlogFilter = ({ onSearch }) => (
  <div className="filter">
    <input
      type="text"
      placeholder="Search"
      onChange={onSearch}
    />
  </div>
);

export default BlogFilter;
