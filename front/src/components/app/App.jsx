import React, { Component } from 'react';
import './App.css';
import Starter from '../Starter';
import Furnace from '../Furnace';
import Seller from '../Seller';
import Crafter from '../Crafter';
import Transporter from '../Transporter';
import Remove from '../Remove';
import Rotate from '../Rotate';
import Move from '../Move';

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
