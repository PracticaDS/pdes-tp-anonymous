import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from '../components/User/Login';
import Game from '../components/Game/Game';
import UserProfile from '../components/User/UserProfile';

const Routes = () => (
  <Router>
    <Route exact path="/" component={Login} />
    <Route exact path="/:user/games" component={UserProfile} />
    <Route exact path="/game" component={Game} />
  </Router>
);

export default Routes;
