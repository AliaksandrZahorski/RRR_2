import React from 'react';
import { connect } from 'react-redux';

import { deleteRecord } from '../../../actions';

const mapDispatchToProps = dispatch => ({
  onDeleteRecord(id) {
    dispatch(deleteRecord(id));
  },
});

const Blog = ({ data, onDeleteRecord }) => {
  const deleteRecord = id => onDeleteRecord(id);
  return(
    <div className="blog">
      <p><strong>{data.title}</strong></p>
      <p>{data.author}</p>
      <p>{data.text}</p>
      <button
        type="submit"
        onClick={e => {
          e.preventDefault();
          deleteRecord(data._id);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default connect(null, mapDispatchToProps)(Blog);
