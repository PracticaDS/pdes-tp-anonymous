import { connect } from 'react-redux';
import React from 'react';
import transporter from '../../ToolBox/Machines/transporter.png';
import crafter from '../../ToolBox/Machines/crafter.png';
import starter from '../../ToolBox/Machines/starter.png';
import furnace from '../../ToolBox/Machines/furnace.png';
import seller from '../../ToolBox/Machines/seller.png';
import actions from '../../../actions/toolboxActions';
import '../WorkingArea.css';

function isActive(props) {
  switch (props.type) {
    case 'TRANSPORTER':
      return props.onBoard.length ? 'active' : '';
    case 'STARTER':
      return props.isCrafting ? 'active' : '';
    case 'FURNACE':
      return (props.toFurnace.length || props.doneFurnace.length) ? 'active' : '';
    case 'SELLER':
      return props.toSell.length ? 'active' : '';
    case 'CRAFTER':
      return props.isCrafting ? 'active' : '';
    default:
      return '';
  }
}

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

function generateCss(rotation) {
  let result = 'down';
  switch (rotation) {
    case 90:
      result = 'right';
      break;
    case 180:
      result = 'up';
      break;
    case 270:
      result = 'left';
      break;
    default:
      break;
  }
  return result;
}

function getMachine(props) {
  const image = chooseImage(props.type);
  return image && (
    <img
      src={image}
      alt={props.type}
      className={`${generateCss(props.direction)} ${isActive(props)}`}
    />
  );
}

const Machine = props => (
  <div role="button" className="empty" onClick={() => props.executeAction(props.position)}>
    {getMachine(props)}
  </div>
);

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  executeAction: position => dispatch(actions.executeAction(position)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Machine);
