import React, { Component } from 'react';
import './App.css';
import ToolboxMenu from '../ToolboxMenu';
import Grid from '../Grid';

class App extends Component {
  render() {
    return (
      <div>
        <ToolboxMenu />
        <Grid x={4} y={4} />
      </div>
    );
  }
}

export default App;
