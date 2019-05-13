import React from 'react';

import actions from '../../../actions/toolboxActions';

export default (props, image, alt, action) => {
  const newAction = action === props.currentAction ? null : action;
  const className = action === props.currentAction ? 'machine selected' : 'machine';
  return (
    <div role="button" onClick={() => props.setCurrentAction(newAction)}>
      <img src={image} alt={alt} className={className} />
    </div>
  );
};

export function mapStateToProps(state) {
  return ({
    currentAction: state.currentAction,
  });
}

export function mapDispatchToProps(dispatch) {
  return {
    setCurrentAction: action => dispatch(actions.setCurrentAction(action)),
  };
}
