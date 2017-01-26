import { ADD_USER } from '../constants/sessionConstants';

export default function(state = {}, action) {
  const { type, payload } = action;

  switch(type) {
    case ADD_USER: {
      return {
        ...state,
        user: payload
      };
    }
    default: {
      return state;
    }
  }
}
