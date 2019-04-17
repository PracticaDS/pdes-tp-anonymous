import React from 'react';
import furnace from '../gallery/furnace.png';
import './css/Components.css';

export default class Furnace extends React.Component {
  render() {
    return (
      <img src={furnace} alt="Furnace machine" className="machine" />
    );
  }
}
