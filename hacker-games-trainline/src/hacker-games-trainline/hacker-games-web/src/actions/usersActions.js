import config from '../config.json';
import { ADD_RELATIONS } from '../constants/usersConstants';

const addRelations = (payload) => ({
  type: ADD_RELATIONS,
  payload
});

export const getRelations = (userId) => dispatch => {
  return fetch(`${config.apiUrl}/persons/${userId}`)
  .then(res => res.json())
  .then(res => dispatch(addRelations(res)))
}
