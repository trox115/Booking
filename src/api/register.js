import axios from 'axios';
import { handleResponse, handleError } from './responses';

function Register({ ...props }) {
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
    .then(response => {
      console.log(response);
      return response;
    })
    .catch(response => {
      console.log(response);
      return response;
    });
}

// export function session({ ...props }) {
//   const { email, password } = props;

//   axios
//     .post(
//       'http://localhost:3001/sessions',
//       {
//         user: {
//           email,
//           password,
//         },
//       },
//       true,
//     )
//     .then(handleResponse)
//     .catch(handleError);
// }

export function session({ ...props }) {
  const { email, password } = props;
  const js = {
    user: {
      email,
      password,
    },
  };
  return fetch('http://localhost:3001/sessions', {
    credentials: 'same-origin',
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(js),
  })
    .then(handleResponse)
    .catch(handleError);
}

export default Register;
