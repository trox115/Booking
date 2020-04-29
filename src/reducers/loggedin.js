function loggedInStatus(state = [], action) {
  switch (action.type) {
    case 'Login':
      return state;

    default:
      return state;
  }
}

export default loggedInStatus;
