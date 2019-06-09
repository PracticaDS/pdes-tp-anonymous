import { connect } from 'react-redux';
import React from 'react';

import crafter from './crafter.png';
import { mapDispatchToProps, mapStateToProps } from '../toolboxElement';

function newMaterial(type) {
  return {
    type,
    state: 'SOLID',
  };
}

function material(type, amount) {
  return {
    material: newMaterial(type),
    amount,
  };
}

function recipe(type) {
  switch (type) {
    case 'CUPROALUMINIUM':
      return {
        name: 'CUPROALUMINIUM',
        ingredients: [material('ALUMINUM', 1), material('COPPER', 1)],
        newMaterial: newMaterial(type),
      };
    case 'BRONZE':
      return {
        name: 'BRONZE',
        ingredients: [material('TIN', 1), material('COPPER', 2)],
        newMaterial: newMaterial(type),
      };
    default:
      return {
        name: 'REDGOLD',
        ingredients: [material('GOLD', 2), material('COPPER', 1)],
        newMaterial: newMaterial(type),
      };
  }
}

const CrafterToolbox = (props) => {
  const className = props.currentAction.action === 'CRAFTER' ? 'toolboxElement selected' : 'toolboxElement';
  return (
    <div className="dropdown">
      <a href="#1" id="dropdownMenuLink" data-toggle="dropdown">
        <img className={className} src={crafter} alt="CrafterMachine" />
      </a>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <a className="dropdown-item" href="#1" onClick={() => props.setCurrentAction('CRAFTER', recipe('CUPROALUMINIUM'))}>Cuproaluminium</a>
        <a className="dropdown-item" href="#2" onClick={() => props.setCurrentAction('CRAFTER', recipe('BRONZE'))}>Bronze</a>
        <a className="dropdown-item" href="#3" onClick={() => props.setCurrentAction('CRAFTER', recipe('REDGOLD'))}>Red Gold</a>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CrafterToolbox);
