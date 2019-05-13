import React from 'react';
import { connect } from 'react-redux';

import './WorkingArea.css';
import EngineGrid from './EngineGrid/EngineGrid';
import actions from '../../actions/toolboxActions';

class WorkingArea extends React.Component {
  componentDidMount() {
    this.props.init(4, 4);
    this.tick = setInterval(this.props.executeTick, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.tick);
  }

  render() {
    return (
      <div className="working-area-container">
        <div className="earnings-information">
          <h2>Ganancias <span>$500.000,42</span></h2>
        </div>
        <EngineGrid width={this.props.width} height={this.props.height} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  width: state.width,
  height: state.height,
});
const mapDispatchToProps = dispatch => ({
  init: (width, height) => dispatch(actions.init(width, height)),
  executeTick: () => dispatch(actions.executeTick()),
});
export default connect(mapStateToProps, mapDispatchToProps)(WorkingArea);
