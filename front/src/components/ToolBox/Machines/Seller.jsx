import React from 'react';
import { connect } from 'react-redux';
import actions from '../../../actions/toolboxActions';

import seller from './seller.png';

const toolboxMachine = (props, image, alt, action) => {
  const newAction = action === props.currentAction ? null : action;
  const className = action === props.currentAction ? 'machine selected' : 'machine';
  return (
    <div role="button" onClick={() => props.setCurrentAction(newAction)}>
      <img src={image} alt={alt} className={className} />
    </div>
  );
};

const SellerToolbox = props => toolboxMachine(props, seller, 'SellerMachine', 'SELLER');

const mapStateToProps = state => ({
  currentAction: state.currentAction,
});
const mapDispatchToProps = dispatch => ({
  setCurrentAction: action => dispatch(actions.setCurrentAction(action)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SellerToolbox);
