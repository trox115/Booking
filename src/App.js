import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import LoginPage from './Pages/LoginPage/LoginPage';
import HomePage from './Pages/HomePage/HomePage';
import LifestylePage from './Pages/LifestylePage/LifestylePage';
import BarberPage from './Pages/BarberPage/BarberPage';
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
            <Route exact path="/" component={LoginPage} />
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
