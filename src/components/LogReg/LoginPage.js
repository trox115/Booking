import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import barber from '../../assets/barber_login.jpg';
import * as authActions from '../../actions/Actions';

const ImageLeft = styled.div`
  width: 75%;
  height: 100vh;
  background: url(${barber});
  background-size: contain;
  background-position: left;
  background-attachment: fixed;

  float: left;
`;

const Login = styled.div`
  width: 24%;
  float: left;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .logoform {
    text-align: center;
    align-content: center;
    h1 {
      font-family: 'Pacifico', cursive;
      transform: rotate(-10deg);
      text-decoration: underline;
      font-size: 50px;
      text-align: center;
    }
    h2 {
      font-family: 'Lato', black;
      text-align: center;
    }
    form {
      width: 90%;
      text-align: center;
      margin: auto;
      display: table;

      input {
        width: 100%;
        margin-top: 30px;
        height: 30px;
        font-size: 20px;
        border: none;
        border-bottom: 1px solid grey;
        :focus {
          border: none;
          outline: none;
          border-bottom: 1px solid green;
        }
      }
      button {
        margin-top: 30px;
        color: white;
        background-color: green;
        width: 50%;
        height: 40px;
        font-size: 1.3em;
        border-radius: 20px;
        transition: padding-right 1s, border-radius 2s;
        :hover {
          padding-right: 10px;
          border-radius: 100%;
        }
      }
    }
  }
`;

const Container = styled.div`
  width: 100%;
  top: 0;
  left: 0;
  position: absolute;
`;

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
        history.push('/home');
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
              onChange={handleChange}
              value={form.password}
            />
            <button type="submit"> Login </button>
          </form>
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
