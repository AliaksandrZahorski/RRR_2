import { BASE_URL } from '../config/config';

export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

const loginSuccess = user => ({
  type: LOGIN_USER,
  id: user._id,
  name: user.name,
});

export const loginUser = user => dispatch => {
  fetch(`${BASE_URL}/user`,
  {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(user)
  }
  )
  .then(response => response.json())
  .then(
    json => {
      const user = json.user;
      if(user.name) {
        dispatch(loginSuccess(json.user));
      }
    }
  )
}

export const logoutUser = () => ({
  type: LOGOUT_USER,
});
