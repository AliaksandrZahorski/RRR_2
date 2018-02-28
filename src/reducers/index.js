import { combineReducers } from 'redux'
import blogs from './blogs'

const store = combineReducers({
  blogs
});

const root = (state, action) => {
  return store(state, action);
};

export default root;
