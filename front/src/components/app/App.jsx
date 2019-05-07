import React, { Component } from 'react';
import './App.css';
import ToolboxMenu from '../ToolBox/ToolboxMenu';
import Grid from '../Grid/Grid';

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
