import React from 'react';
import starter from '../gallery/starter.png';
import './css/Machine.css';

export default class Starter extends React.Component {
  render() {
    return (
      <img src={starter} alt="Starter machine" />
    );
  }
}
