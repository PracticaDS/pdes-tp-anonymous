import React from 'react';
import ToolboxMenu from '../ToolBox/ToolboxMenu';
import WorkingArea from '../WorkingArea/WorkingArea';
import Information from '../Information/Information';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.match.params.user,
      gameId: this.props.match.params.gameId,
    };
  }

  render() {
    return (
      <div className="grid-container">
        <div className="header-container">
          <h1>Revolución Industrial</h1>
        </div>
        <div className="body-container">
          <ToolboxMenu />
          <WorkingArea username={this.state.username} gameId={this.state.gameId} />
          <Information />
        </div>
      </div>
    );
  }
}
