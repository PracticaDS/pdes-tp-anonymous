import React from 'react';
import move from '../gallery/move.png';
import './css/Components.css';

export default class Move extends React.Component {
  render() {
    return (
      <img src={move} alt="Move controller" className="controller" />
    );
  }
}
