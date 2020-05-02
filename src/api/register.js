import axios from 'axios';

function Register({ ...props }) {
  // Because password digest from rails
  // eslint-disable-next-line camelcase
  const { email, password, password_confirmation } = props;

  axios
    .post(
      'http://localhost:3001/registrations',
      {
        user: {
          email,
          password,
          password_confirmation,
        },
      },
      true,
    )
    .then(response => response)
    .catch(response => response);
}

export function session({ ...props }) {
  const { email, password } = props;

  return axios
    .post(
      'http://localhost:3001/sessions',
      {
        user: {
          email,
          password,
        },
      },
      { withCredentials: true },
    )
    .then(response => response.data)
    .catch(erro => erro);
}

export default Register;
