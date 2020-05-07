import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as authActions from '../../actions/Actions';
import {ImageLeft,Login,Container} from '../../styles'

function LoginPage({ createSession, history }) {
  const [form, setState] = useState({
    email: '',
    password: '',
  });

  function handleChange(event) {
    setState({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    createSession(form)
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
          <h2>Login</h2>
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
              onChange={handleChange}
              value={form.password}
            />
            <button type="submit"> Login </button>
            
          </form>
          <a href="/register">Register</a>
        </div>
      </Login>
    </Container>
  );
}
function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createSession: user => dispatch(authActions.Login(user)),
  };
}

LoginPage.propTypes = {
  createSession: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
