// eslint-disable-next-line import/prefer-default-export
export function manageFriends(state, action) {
  switch (action.type) {
    case 'ADD_FRIEND':
      return {
        ...state,
        friends: [...state.friends, action.friend],
      };
    case 'REMOVE_FRIEND':
      return {
        ...state,
        friends: state.friends.filter(friend => friend.id !== action.id),
      };
    default:
      return state;
  }
}
