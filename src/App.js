import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ProtectedRoute from './containers/protected.route';
import LoginPage from './components/LogReg/LoginPage';
import Bookings from './components/Bookings';
import RegisterPage from './components/LogReg/RegisterPage';
import HomePage from './components/HomePage/HomePage';
import LifestylePage from './components/LifestylePage/LifestylePage';
import BarberPage from './components/BarberPage/BarberPage';
import NavBar from './common/navigation';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <>
      <Container fluid>
        <Row>
          <NavBar />
          <Switch>
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/register" component={RegisterPage} />
            <ProtectedRoute exact path="/" component={HomePage} />
            <ProtectedRoute exact path="/bookings" component={Bookings} />
            <ProtectedRoute exact path="/lifestyle" component={LifestylePage} />
            <ProtectedRoute exact path="/barber/:slug" component={BarberPage} />
          </Switch>
        </Row>
      </Container>
    </>
  );
}
function mapStateToProps(state) {
  return {
    user: state.user,
    loggedInStatus: state.loggedInStatus,
  };
}

export default connect(mapStateToProps)(App);
