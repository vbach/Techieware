import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import techiewareReducer from './techiewareReducer';

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  techieware: techiewareReducer
});
