import React from 'react';
import rotate from '../gallery/rotate.png';
import './css/Components.css';

export default class Rotate extends React.Component {
  render() {
    return (
      <img src={rotate} alt="Rotate controller" className="controller" />
    );
  }
}
