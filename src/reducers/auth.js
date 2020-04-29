function AuthReducer(state = [], action) {
  switch (action.type) {
    case 'CREATE_SESSION':
      console.log(action.user);
      return [action.user];

    default:
      return state;
  }
}

export default AuthReducer;
