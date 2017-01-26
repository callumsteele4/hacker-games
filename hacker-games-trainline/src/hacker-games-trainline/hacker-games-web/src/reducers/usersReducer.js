import { ADD_RELATIONS } from '../constants/usersConstants';

export default function(state = {}, action) {
  const { type, payload } = action;

  switch(type) {
    case ADD_RELATIONS: {
      return payload.reduce((acc, next) => {
        acc[next.id] = next;
        return acc;
      }, {});
    }

    default: {
      return state;
    }
  }
}
