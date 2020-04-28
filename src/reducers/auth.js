function AuthReducer(state = [], action) {
  switch (action.type) {
    case 'CREATE_SESSION':
      return [{ ...action.user }, { loggedIn: true }];

    default:
      return state;
  }
}
