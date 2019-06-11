import React from 'react';
import { connect } from 'react-redux';

import './WorkingArea.css';
import EngineGrid from './EngineGrid/EngineGrid';
import actions from '../../actions/toolboxActions';
import service from '../../app/Service';

class WorkingArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.username,
      gameId: this.props.gameId,
      game: {},
    };
  }

  componentDidMount() {
    service.getGame(this.state.username, this.state.gameId)
      .then((game) => {
        this.props.loadState(game.state);
        this.setState({ game });
      })
      .catch(console.error);

    this.tick = setInterval(() => {
      this.props.executeTick();
      this.updateGame(this.props.state);
    }, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.tick);
  }

  updateGame(state) {
    const newGame = { ...this.state.game, state };
    service.updateGame(this.state.username, this.state.gameId, newGame);
  }

  render() {
    return (
      <div className="working-area-container">
        <div className="earnings-information">
          <h2>Ganancias <span>$500.000,42</span></h2>
        </div>
        <EngineGrid width={this.props.width} height={this.props.height} />
        <button
          type="button"
          className="update-game-button row col-sm-3 btn btn-secondary"
          onClick={() => this.updateGame(this.props.state)}
        >
            Guardar
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  width: state.width,
  height: state.height,
  state,
});
const mapDispatchToProps = dispatch => ({
  loadState: state => dispatch(actions.loadState(state)),
  executeTick: () => dispatch(actions.executeTick()),
});
export default connect(mapStateToProps, mapDispatchToProps)(WorkingArea);
