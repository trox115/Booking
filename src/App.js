import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import LoginPage from './components/LogReg/LoginPage';
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
            <Route exact path="/" component={HomePage} />
            <Route exact path="/register" component={RegisterPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/lifestyle" component={LifestylePage} />
            <Route exact path="/barber" component={BarberPage} />
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
export default connect(mapStateToProps)(App);
