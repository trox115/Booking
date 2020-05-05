import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import LoginPage from './components/LogReg/LoginPage';
import Bookings from './containers/Bookings';
import RegisterPage from './components/LogReg/RegisterPage';
import HomePage from './components/HomePage/HomePage';
import LifestylePage from './components/LifestylePage/LifestylePage';
import BarberPage from './components/BarberPage/BarberPage';
import NavBar from './common/navigation';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App({ user }) {
  function isLoggedIn() {
    axios
      .get('https://antonio-barber-api.herokuapp.com/loggedin', {
        withCredentials: true,
      })
      .then(response => response);
  }

  useEffect(() => {
    isLoggedIn();
  }, user);
  return (
    <>
      <Container fluid>
        <Row>
          <NavBar />
          <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route exact path="/register" component={RegisterPage} />
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/bookings" component={Bookings} />
            <Route exact path="/lifestyle" component={LifestylePage} />
            <Route exact path="/barber/:slug" component={BarberPage} />
          </Switch>
        </Row>
      </Container>
    </>
  );
}
function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

App.propTypes = {
  user: PropTypes.instanceOf(Array).isRequired,
};
export default connect(mapStateToProps)(App);
