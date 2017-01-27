import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import sessionReducer from './sessionReducer';
import usersReducer from './usersReducer';
import quizReducer from './quizReducer';

export default combineReducers({
  routing: routerReducer,
  session: sessionReducer,
  users: usersReducer,
  quiz: quizReducer
});
