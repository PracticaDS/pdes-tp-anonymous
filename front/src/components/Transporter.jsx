import React from 'react';
import transporter from '../gallery/transporter.png';

export default class Transporter extends React.Component {
  render() {
    return (
      <img src={transporter} alt="Transporter machine" />
    );
  }
}
