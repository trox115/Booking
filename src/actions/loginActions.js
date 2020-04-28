import * as auth from '../api/register';

export function loginSuccess(user) {
  console.log(user.user);
  return { type: 'CREATE_SESSION', user };
}

export function loginFail(user) {
  return { type: 'UNDO_SESSION', user };
}

export function Login(user) {
  return function (dispatch) {
    return auth
      .session(user)
      .then(users => {
        dispatch(loginSuccess(users.user));
      })
      .catch(error => {
        throw error;
      });
  };
}

export default Login;
