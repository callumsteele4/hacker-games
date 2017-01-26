import { ADD_USER } from '../constants/sessionConstants';

const baseUrl = 'http://hacker-games-trainline20170126053304.azurewebsites.net/api';

const addUser = (payload) => ({
  type: ADD_USER,
  payload
})

export const getUser = () => dispatch => {
  return fetch(`${baseUrl}/user`)
  .then(res => res.json())
  .then(res => dispatch(addUser(res)));
};
