import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from '../components/Login/Login';
import Game from '../components/Game/Game';
import UserProfile from '../components/Login/UserProfile';

const Routes = () => (
  <Router>
    <Route exact path="/" component={Login} />
    <Route exact path="/:user/games" component={UserProfile} />
    <Route exact path="/game" component={Game} />
  </Router>
);

export default Routes;
