import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from '../components/User/Login';
import Game from '../components/Game/Game';
import UserProfile from '../components/User/UserProfile';

class App extends Component {
  render() {
    return (
      <Router basename="pdes-tp-anonymous">
        <Route exact path="/" component={Login} />
        <Route exact path="/:user" component={UserProfile} />
        <Route exact path="/:user/:gameId" component={Game} />
      </Router>
    );
  }
}

export default App;
