import React from 'react';
import './WorkingArea.css';
import EngineGrid from './EngineGrid/EngineGrid';

export default class WorkingArea extends React.Component {
  render() {
    return (
      <div className="working-area-container">
        <div className="earnings-information">
          <h2>Ganancias <span>$500.000,42</span></h2>
        </div>
        <EngineGrid x={4} y={4} />
      </div>
    );
  }
}
