import React from 'react';
import Starter from './Machines/Starter';
import Seller from './Machines/Seller';
import Furnace from './Machines/Furnace';
import Transporter from './Machines/Transporter';
import Crafter from './Machines/Crafter';
import Move from './Actions/Move';
import Remove from './Actions/Remove';
import Rotate from './Actions/Rotate';
import './ToolBox.css'

export default class ToolboxMenu extends React.Component {
  render() {
    return (
      <div className="toolboxMenu">
        <div className="machinesBox">
          <h2 className="toolboxTitle">Máquinas:</h2>
          <Starter />
          <Seller />
          <Furnace />
          <Transporter />
          <Crafter />
        </div>
        <div className="actionsBox">
          <h2 className="toolboxTitle">Edición:</h2>
          <Move />
          <Remove />
          <Rotate />
        </div>
      </div>
    );
  }
}
