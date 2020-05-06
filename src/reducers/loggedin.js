function loggedInStatus(action) {
  switch (action.type) {
    case 'CREATE_AUTH':
      return action.response.data.logged_in;
    default:
      return false;
  }
}

export default loggedInStatus;
