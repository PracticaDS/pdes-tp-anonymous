import React from 'react';
import crafter from '../gallery/crafter.png';
import './css/Components.css';

export default class Crafter extends React.Component {
  render() {
    return (
      <img src={crafter} alt="Crafter machine" className="machine" />
    );
  }
}
