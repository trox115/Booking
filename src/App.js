import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from './Pages/LoginPage/LoginPage';
import HomePage from './Pages/HomePage/HomePage';
import LifestylePage from './Pages/LifestylePage/LifestylePage';
import BarberPage from './Pages/BarberPage/BarberPage';
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route exact path="/home" component={HomePage} />
      <Route exact path="/lifestyle" component={LifestylePage} />
      <Route exact path="/barber" component={BarberPage} />
    </Switch>
  );
}

export default App;
