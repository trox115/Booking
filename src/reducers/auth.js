function AuthReducer(state = [], action) {
  switch (action.type) {
    case 'CREATE_SESSION':
      return action.user;

    default:
      return state;
  }
}

export default AuthReducer;
