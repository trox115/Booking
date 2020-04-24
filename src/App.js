import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from './Pages/LoginPage/LoginPage';

import './App.css';

function App() {
  return (
    <Switch>
      

      <Route exact path='/' component={LoginPage} />
      <Route exact path="/" component={HomePage} />
    </Switch>
  );
}

export default App;
