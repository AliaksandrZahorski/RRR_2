import {
  ADD_RECORD,
  GET_BLOGS,
  DELETE_RECORD
} from '../actions';

const initialState = [];

const blogs = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RECORD:
      return [
        ...state,
        {
          _id: action._id,
          author: action.author,
          title: action.title,
          text: action.text,
        }
      ];
    case GET_BLOGS:
      return [
        ...action.blogs
      ];
    case DELETE_RECORD:
      return state.filter(s => s._id !== action.id);

    default:
      return state;
  }
}

export default blogs;
