function AuthReducer(state = [], action) {
  const INITIAL_STATE = [];

  switch (action.type) {
    case 'CREATE_SESSION':
      return [action.user];
    case 'DELETE_SESSION':
      return INITIAL_STATE;
    default:
      return state;
  }
}

export default AuthReducer;
