import {
  LOGIN_USER,
  LOGOUT_USER
} from '../actions';

const initialState = {
  id: null,
  name: '',
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        id: action.id,
        name: action.name,
      };
    case LOGOUT_USER:
      return initialState;

    default:
      return state;
  }
}

export default users;
