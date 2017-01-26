import { ADD_USER } from '../constants/sessionConstants';
import config from '../config.json';

const addUser = (payload) => ({
  type: ADD_USER,
  payload
})

export const getUser = () => dispatch => {
  return fetch(`${config.apiUrl}/user`)
  .then(res => res.json())
  .then(res => dispatch(addUser(res)));
};
