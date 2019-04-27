import React, { Component } from 'react';
import './App.css';
import ToolboxMenu from '../ToolboxMenu';
import Grid from '../Grid';

class App extends Component {
  render() {
    return (
      <div>
        <ToolboxMenu />
        <Grid x={6} y={6} />
      </div>
    );
  }
}

export default App;
