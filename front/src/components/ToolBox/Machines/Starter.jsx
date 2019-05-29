import { connect } from 'react-redux';
import React from 'react';

import starter from './starter.png';
import { mapDispatchToProps, mapStateToProps } from '../toolboxElement';

function material(type) {
  return {
    type,
    state: 'SOLID',
  };
}

const StarterToolbox = (props) => {
  const className = props.currentAction.action === 'STARTER' ? 'toolboxElement selected' : 'toolboxElement';
  return (
    <div className="dropdown">
      <a href="#1" id="dropdownMenuLink" data-toggle="dropdown">
        <img className={className} src={starter} alt="StarterMachine" />
      </a>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <a className="dropdown-item" href="#1" onClick={() => props.setCurrentAction('STARTER', material('GOLD'))}>Gold</a>
        <a className="dropdown-item" href="#2" onClick={() => props.setCurrentAction('STARTER', material('COPPER'))}>Copper</a>
        <a className="dropdown-item" href="#2" onClick={() => props.setCurrentAction('STARTER', material('ALUMINUM'))}>Aluminum</a>
        <a className="dropdown-item" href="#2" onClick={() => props.setCurrentAction('STARTER', material('COAL'))}>Coal</a>
        <a className="dropdown-item" href="#2" onClick={() => props.setCurrentAction('STARTER', material('IRON'))}>Iron</a>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(StarterToolbox);
