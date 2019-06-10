import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as HashRouter, Route } from 'react-router-dom';
import Login from '../components/User/Login';
import Game from '../components/Game/Game';
import UserProfile from '../components/User/UserProfile';

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <Route exact path="/" component={Login} />
        <Route exact path="/:user" component={UserProfile} />
        <Route exact path="/:user/:gameId" component={Game} />
      </HashRouter>
    );
  }
}

export default App;
