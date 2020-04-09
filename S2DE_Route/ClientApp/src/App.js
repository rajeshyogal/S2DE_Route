import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import { LoginPage } from './components/LoginPage';
import { PrivateRoute }  from './components/PrivateRoute';

export default () => (
    <Router>
        <switch>
            <Route exact path='/Login' component={ LoginPage } />
            <PrivateRoute exact path='/Home' component={Home} />         
        </switch>
  </Router>
);
