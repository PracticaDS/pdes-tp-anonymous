import './App.css';
import React, { Component } from 'react';
import ToolboxMenu from '../components/ToolBox/ToolboxMenu';
import WorkingArea from '../components/WorkingArea/WorkingArea';
import Information from '../components/Information/Information';

class App extends Component {
  render() {
    return (
      <div className="grid-container">
        <div className="header-container">
          <h1>Revolución Industrial</h1>
        </div>
        <div className="body-container">
          <ToolboxMenu />
          <WorkingArea />
          <Information />
        </div>
      </div>
    );
  }
}

export default App;
