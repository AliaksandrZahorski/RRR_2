import users from '../src/reducers/users';

import { LOGOUT_USER } from '../src/actions';

const initialState = {
  id: null,
  name: '',
};

const state = undefined;

describe("Reducer", () =>  {
  it("should return initial state of export default function", () => {
    const action ={
      type: null,
    };
    const result = users(state, action);
    expect(result).toEqual(initialState);
  });

  it("should return initial state when logout", () => {
    const action ={
      type: LOGOUT_USER,
    };
    const result = users(state, action);
    expect(result).toEqual(initialState);
  });
  
});
