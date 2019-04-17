import React from 'react';
import seller from '../gallery/seller.png';
import './css/Components.css';

export default class Seller extends React.Component {
  render() {
    return (
      <img src={seller} alt="Seller machine" className="machine" />
    );
  }
}
