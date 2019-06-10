import React from 'react';
import ToolboxMenu from '../ToolBox/ToolboxMenu';
import WorkingArea from '../WorkingArea/WorkingArea';
import Information from '../Information/Information';

const Game = () => (
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

export default Game;
