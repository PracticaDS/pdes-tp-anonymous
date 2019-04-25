import React from 'react';
import './css/Components.css';
import Starter from './machines/Starter';
import Seller from './machines/Seller';
import Furnace from './machines/Furnace';
import Transporter from './machines/Transporter';
import Crafter from './machines/Crafter';
import Move from './actions/Move';
import Remove from './actions/Remove';
import Rotate from './actions/Rotate';

export default class ToolboxMenu extends React.Component {
  render() {
    return (
      <div className="toolboxMenu">
        <div className="machinesBox">
          <h2 className="toolboxTitle">Maquinas: </h2>
          <Starter />
          <Seller />
          <Furnace />
          <Transporter />
          <Crafter />
        </div>
        <div className="actionsBox">
          <h2 className="toolboxTitle">Edicion: </h2>
          <Move />
          <Remove />
          <Rotate />
        </div>
      </div>
    );
  }
}
