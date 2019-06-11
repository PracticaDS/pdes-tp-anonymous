import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from '../components/User/Login';
import Game from '../components/Game/Game';
import UserProfile from '../components/User/UserProfile';

// Forma cabeza de definir el basename.
// Idealmente habría que utilizar ENV vars,
// pero no encontramos manera de poder setearlas en github pages.
const basename = window.location.hostname === 'practicads.github.io' ? 'pdes-tp-anonymous' : '';

class App extends Component {
  render() {
    return (
      <Router basename={basename}>
        <Route exact path="/" component={Login} />
        <Route exact path="/:user" component={UserProfile} />
        <Route exact path="/:user/:gameId" component={Game} />
      </Router>
    );
  }
}

export default App;
