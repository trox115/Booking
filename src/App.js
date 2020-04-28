import React from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import LoginPage from './components/LogReg/LoginPage';
import RegisterPage from './components/LogReg/RegisterPage.js';
import HomePage from './components/HomePage/HomePage';
import LifestylePage from './components/LifestylePage/LifestylePage';
import BarberPage from './components/BarberPage/BarberPage';
import NavBar from './common/navigation';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function CheckLogin() {
  console.log('hello');
  axios
    .get('https://antonio-barber-api.herokuapp.com/', { withCredentials: true })
    .then(response => {
      console.log('loggedIn?', response);
    });
}

// function CheckLogin() {
//   return fetch('http://localhost:3001/sessions', {
//     credentials: 'include',
//     method: 'GET',
//     headers: {
//       'content-type': 'application/json',
//       'Access-Control-Allow-Credentials': 'true',
//     },
//     body: JSON.stringify(),
//   })
//     .then(response => {
//       console.log(response);
//     })
//     .catch(error => {
//       console.log(error);
//     });
// }
function App() {
  CheckLogin();
  return (
    <>
      <Container fluid>
        <Row>
          <NavBar />
          <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route exact path="/register" component={RegisterPage} />
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/lifestyle" component={LifestylePage} />
            <Route exact path="/barber" component={BarberPage} />
          </Switch>
        </Row>
      </Container>
    </>
  );
}

export default App;
