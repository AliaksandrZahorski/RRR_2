import React from 'react';

import Blog from '../Blog/Blog';

import './BlogList.css';

const BlogList = ({ blogs }) => {
  return(
    <div className="blogs">
      {blogs.map(b => <Blog data={b} key={b._id} />)}
    </div>
  );
}

export default BlogList;
