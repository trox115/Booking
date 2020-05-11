function loggedInStatus(state = false, action) {
  switch (action.type) {
    case 'CREATE_AUTH':
      return action.response.data.logged_in;
    default:
      return state;
  }
}

export default loggedInStatus;
