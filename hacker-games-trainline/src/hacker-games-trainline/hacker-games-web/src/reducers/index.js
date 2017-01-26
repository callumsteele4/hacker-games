import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import sessionReducer from './sessionReducer';
import usersReducer from './usersReducer';

export default combineReducers({
  routing: routerReducer,
  session: sessionReducer,
  users: usersReducer
});
