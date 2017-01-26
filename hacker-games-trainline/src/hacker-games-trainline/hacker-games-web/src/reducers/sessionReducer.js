
export default function(state = {}, action) {
  const { type, payload } = action;

  return {
    ...state,
    [type]: payload
  };
}
