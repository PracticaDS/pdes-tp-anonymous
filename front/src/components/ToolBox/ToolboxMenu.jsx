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
      <div className="ToolBox">
        <div className="Machines">
          <h2 className="ToolboxTitle">Máquinas:</h2>
          <div className="machines-box">
            <Starter />
            <Seller />
            <Furnace />
            <Transporter />
            <Crafter />
          </div>
        </div>
        <div className="Actions">
          <h2 className="ToolboxTitle">Edición:</h2>
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
