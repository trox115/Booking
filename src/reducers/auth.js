function AuthReducer(state = [], action) {
  switch (action.type) {
    case 'CREATE_SESSION':
      return state;

    default:
      return state;
  }
}

export default AuthReducer;
