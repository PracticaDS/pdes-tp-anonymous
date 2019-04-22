import React, { Component } from 'react';
import './App.css';
import Starter from '../machines/Starter';
import Furnace from '../machines/Furnace';
import Seller from '../machines/Seller';
import Crafter from '../machines/Crafter';
import Transporter from '../machines/Transporter';
import Remove from '../actions/Remove';
import Rotate from '../actions/Rotate';
import Move from '../actions/Move';

class App extends Component {
  render() {
    return (
      <div>
        <Starter />
        <Furnace />
        <Seller />
        <Crafter />
        <Transporter />
        <Remove />
        <Rotate />
        <Move />
      </div>
    );
  }
}

export default App;
