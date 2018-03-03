import React from 'react';
import { connect } from 'react-redux'

import { getBlogs } from '../../actions';
import AddRecord from './AddRecord/AddRecord';
import BlogList from './BlogList/BlogList';
import BlogFilter from './BlogFilter/BlogFilter';

const mapStateToProps = ({ blogs }) => ({
  blogs
});


class BlogContainer extends React.Component {
  state = {
      filter: '',
  };

  componentDidMount() {
    this.props.getBlogs();
  }

  onSearch = e => {
    const value = e.target.value.toLowerCase();
    this.setState({filter: value});
  }

  render() {
    const { blogs } = this.props;
    const result = blogs.filter(b => {
      return b.author.toLowerCase().includes(this.state.filter);
    });
    return(
      <div>
        <AddRecord />
        <BlogFilter onSearch={this.onSearch} />
        <BlogList blogs={result} />
      </div>
    );
  }
}

export default connect(mapStateToProps, { getBlogs })(BlogContainer);
