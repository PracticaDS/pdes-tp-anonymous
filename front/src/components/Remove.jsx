import React from 'react';
import remove from '../gallery/remove.png';
import './css/Components.css';

export default class Remove extends React.Component {
  render() {
    return (
      <img src={remove} alt="Remove controller" className="controller" />
    );
  }
}
