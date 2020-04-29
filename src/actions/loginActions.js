import * as auth from '../api/register';

export function loginSuccess(user) {
  return { type: 'CREATE_SESSION', user };
}

export function Login(user) {
  return function unamed(dispatch) {
    return auth
      .session(user)
      .then(response => {
        dispatch(loginSuccess(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
}

export default Login;
