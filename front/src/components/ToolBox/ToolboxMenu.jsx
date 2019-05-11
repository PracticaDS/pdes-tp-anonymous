import './ToolBox.css';
import React from 'react';
import Starter from './Machines/Starter';
import Seller from './Machines/Seller';
import Furnace from './Machines/Furnace';
import Transporter from './Machines/Transporter';
import Crafter from './Machines/Crafter';
import Move from './Actions/Move';
import Remove from './Actions/Remove';
import Rotate from './Actions/Rotate';

export default class ToolboxMenu extends React.Component {
  render() {
    return (
      <div className="tool-box-container">
        <div className="machines-panel">
          <h2>Máquinas</h2>
          <div className="machines-box">
            <Starter />
            <Seller />
            <Furnace />
            <Transporter />
            <Crafter />
          </div>
        </div>
        <div className="actions-panel">
          <h2>Edición</h2>
          <div className="actions-box">
            <Move />
            <Remove />
            <Rotate />
          </div>
        </div>
      </div>
    );
  }
}
