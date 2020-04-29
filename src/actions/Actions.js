import * as auth from '../api/register';
import * as barbers from '../api/AllApi';

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
export function barberSuccess(barber) {
  return { type: 'CREATE_BARBER', barber };
}
export function Barbers() {
  return function unamed2(dispatch) {
    return barbers
      .getBarbers()
      .then(response => {
        dispatch(barberSuccess(response));
      })
      .catch(error => {
        throw error;
      });
  };
}

export default Login;
