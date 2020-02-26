import {
  SET_CURRENT_USER,
  USER_LOADING,
  DELETE_ACCOUNT
} from '../actions/cartActionTypes';

const isEmpty = require('is-empty');

const initState = {
  isAuthenticated: false,
  user: {},
  users: [],
  loading: false
};
export default function(state = initState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    case USER_LOADING:
      return {
        ...state,
        loading: true
      };
    case DELETE_ACCOUNT:
      return {
        ...state,
        users: state.users.filter(user => user._id !== action.payload)
      };
    default:
      return state;
  }
}
