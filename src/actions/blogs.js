import { BASE_URL } from '../config/config';

export const ADD_RECORD = 'ADD_RECORD';
export const GET_BLOGS = 'GET_BLOGS';
export const DELETE_RECORD = 'DELETE_RECORD';

export const addRecordSuccess = record => ({
  type: ADD_RECORD,
  _id: record._id,
  author: record.author,
  title: record.title,
  text: record.text,
});

export const getBlogsSuccess = blogs => ({
  type: GET_BLOGS,
  blogs,
});

export const deleteRecordSuccess = id => ({
  type: DELETE_RECORD,
  id,
});

export const addAsyncRecord = record => dispatch => {
  fetch(`${BASE_URL}/posts`)
  .then(response => response.json())
  .then(
    json => {
      console.log(json);
      dispatch(addRecord(record));
    }
  )
}

export const getBlogs = () => dispatch => {
  fetch(`${BASE_URL}/blogs`)
  .then(response => response.json())
  .then(
    json => {
      const { blogs } = json
      dispatch(getBlogsSuccess(blogs));
    }
  )
}

export const deleteRecord = id => dispatch => {
  fetch(`${BASE_URL}/blogs/${id}`,
  {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Methods': "GET, POST, OPTIONS, PUT, DELETE",
    },
      method: 'DELETE'
  }
  )
  .then(response => response.json())
  .then(
    json => {
      const id = json.blog._id;
      dispatch(deleteRecordSuccess(id));
    }
  )
}

export const addRecord = blog => dispatch => {
  fetch(`${BASE_URL}/blogs`,
  {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(blog)
  }
  )
  .then(response => response.json())
  .then(
    json => {
      const { blog } = json;
      dispatch(addRecordSuccess(blog));
    }
  )
}
