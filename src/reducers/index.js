import { combineReducers } from 'redux'
import blogs from './blogs'
import users from './users'

const store = combineReducers({
  blogs,
  users
});

export default store;
