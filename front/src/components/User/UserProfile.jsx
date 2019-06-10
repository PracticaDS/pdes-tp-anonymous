import React from 'react';
import './UserProfile.css';
import CreateGame from './CreateGame';

export default class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.match.params.user,
      createGamePopup: false,
      data: [{
        id: 1,
        nombre: 'Repe',
        fecha: '4/5/2019',
        cantMaquinas: 5,
      }, {
        id: 2,
        nombre: 'Ricardo',
        fecha: '1/2/2019',
        cantMaquinas: 6,
      }],
    };
    this.togglePopup = this.togglePopup.bind(this);
  }

  togglePopup() {
    const { createGamePopup } = this.state;
    this.setState({
      createGamePopup: !createGamePopup,
    });
  }

  renderTableData() {
    return this.state.data.map((user) => {
      const { id, nombre, fecha, cantMaquinas } = user;
      return (
        <tr key={id}>
          <td>{nombre}</td>
          <td>{fecha}</td>
          <td>{cantMaquinas}</td>
          <td>
            <button type="submit">◄</button>
            <button type="submit">☒</button>
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
        {this.state.createGamePopup ? <CreateGame closePopup={this.togglePopup} />
          : null
        }
      </div>
    );
  }
}
