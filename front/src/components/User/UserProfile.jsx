import React from 'react';
import './UserProfile.css';
import CreateGame from './CreateGame';
import service from '../../app/Service';

export default class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.match.params.user,
      games: [],
      createGamePopup: false,
    };
    this.togglePopup = this.togglePopup.bind(this);
  }

  componentDidMount() {
    this.updateGames();
  }

  playGame(id) {
    alert('Tendria q setear un game ', id);
  }

  updateGames() {
    service.getUserAndCreate(this.state.username)
      .then(user => this.setState({ games: user.games }));
  }

  deleteGame(id) {
    service.deleteGame(this.state.username, id).then(() => this.updateGames());
  }

  togglePopup() {
    const { createGamePopup } = this.state;
    this.setState({
      createGamePopup: !createGamePopup,
    });
    this.updateGames();
  }

  renderTableData() {
    return this.state.games.map((game) => {
      const { _id, name, date } = game;
      const machinesSize = game.state.machines.length;
      return (
        <tr key={_id}>
          <td>{name}</td>
          <td>{date}</td>
          <td>{machinesSize}</td>
          <td>
            <button type="button" onClick={() => this.playGame(_id)}>◄</button>
            <button type="button" onClick={() => this.deleteGame(_id)}>☒</button>
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div id="userProfile">
        <div className="row header-container">
          <h1>Revolución Industrial</h1>
        </div>
        <div className="gamesPanel row col-sm-10 offset-md-1">
          <h4 className="row col-sm-9 offset-md-1">Hola {this.state.username} estas son tus fabricas</h4>
          <button type="submit" className="createButton row col-sm-1 btn btn-secondary" onClick={this.togglePopup}>
            Crear
          </button>
          <table className="users col-sm-10 offset-md-1">
            <tbody>
              <tr>
                <td className="tableHeader">Nombre</td>
                <td className="tableHeader">Fecha de guardado</td>
                <td className="tableHeader">Cantidad de maquinas</td>
                <td className="tableHeader">Opciones</td>
              </tr>
              {this.renderTableData()}
            </tbody>
          </table>
        </div>
        {this.state.createGamePopup
          ? <CreateGame username={this.state.username} closePopup={this.togglePopup} />
          : null
        }
      </div>
    );
  }
}
