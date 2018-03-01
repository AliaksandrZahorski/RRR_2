import { BASE_URL } from '../config/config';

export const ADD_RECORD = 'ADD_RECORD';
export const DELETE_RECORD = 'DELETE_RECORD';

let nextId = 1;

export const addRecord = record => ({
  type: ADD_RECORD,
  id: nextId++,
  author: record.author,
  title: record.title,
  text: record.text,
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

export const deleteRecord = id => ({
  type: DELETE_RECORD,
  id,
});
