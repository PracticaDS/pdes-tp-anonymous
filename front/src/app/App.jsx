import './App.css';
import React, { Component } from 'react';
import Grid from '../components/Grid/Grid';
import ToolboxMenu from '../components/ToolBox/ToolboxMenu';

class App extends Component {
  render() {
    return (
      <div className="grid-container">
        <ToolboxMenu />
        <Grid x={4} y={4} />        
      </div>
    );
  }
}

export default App;
