import React from 'react';
import { connect } from 'react-redux';

import { addRecord, addAsyncRecord } from '../actions';


const mapStateToProps = ({ blogs }) => ({
  blogs
});

class Common extends React.Component {
  componentDidMount() {
    const record = {
      author: "none",
      title: "zzz",
      text: "qq",
    };

    this.props.addRecord(record);
    this.props.addAsyncRecord(record);
  }
  render() {
    const { blogs } = this.props;
    return (
        blogs.map(b => <div key={b.id}> {b.id} {b.title} </div>)
    );
  }
 }

export default connect(
  mapStateToProps,
  {
    addRecord,
    addAsyncRecord
  }
)(Common);