import React from 'react';
import transporter from '../gallery/transporter.png';
import './css/Components.css';

export default class Transporter extends React.Component {
  render() {
    return (
      <img src={transporter} alt="Transporter machine" className="machine" />
    );
  }
}
