import axios from 'axios';

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
      console.log('registration response: ', response);
    })
    .catch(errors => {
      console.log('registration error: ', errors);
    });
}

export default Register;
