import { connect } from 'react-redux';
import React from 'react';

import actions from '../../../actions/toolboxActions';

const Machine = props => (
  <div role="button" className="empty" onClick={() => props.executeAction(props.position)}>
    {props.type[0]}
  </div>
);

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  executeAction: position => dispatch(actions.executeAction(position)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Machine);
