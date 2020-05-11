import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Register from '../../api/register';
import { ImageLeft, Login, Container } from '../../styles';

function RegisterPage({ history }) {
  const [form, setState] = useState({
    email: '',
    password: '',
    password_confirmation: '',
  });

  function handleChange(event) {
    setState({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    Register(form)
      .then(() => {
        history.push('/');
      })
      .catch(error => error);
  }
  return (
    <Container>
      <ImageLeft />
      <Login>
        <div className="logoform">
          <h1>Barber</h1>
          <h2>Register</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password_confirmation"
              placeholder="Confirm your password"
              value={form.password_confirmation}
              onChange={handleChange}
            />
            <button type="submit"> Register </button>
          </form>
        </div>
      </Login>
    </Container>
  );
}

RegisterPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default RegisterPage;
