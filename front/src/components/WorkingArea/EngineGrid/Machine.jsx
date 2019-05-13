import { connect } from 'react-redux';
import React from 'react';
import transporter from '../../ToolBox/Machines/transporter.png';
import crafter from '../../ToolBox/Machines/crafter.png';
import starter from '../../ToolBox/Machines/starter.png';
import furnace from '../../ToolBox/Machines/furnace.png';
import seller from '../../ToolBox/Machines/seller.png';
import actions from '../../../actions/toolboxActions';

function chooseImage(type) {
  let image = null;
  switch (type) {
    case 'TRANSPORTER':
      image = transporter;
      break;
    case 'STARTER':
      image = starter;
      break;
    case 'FURNACE':
      image = furnace;
      break;
    case 'SELLER':
      image = seller;
      break;
    case 'CRAFTER':
      image = crafter;
      break;
    default:
      break;
  }
  return image;
}

const Machine = props => (
  <div role="button" className="empty" onClick={() => props.executeAction(props.position)}>
    {chooseImage(props.type) && <img src={chooseImage(props.type)} alt={props.type} />}
  </div>
);

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  executeAction: position => dispatch(actions.executeAction(position)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Machine);
