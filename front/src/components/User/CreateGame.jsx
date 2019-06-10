import React from 'react';
import './CreateGame.css';

export default class CreateGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameName: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  handleChange(event) {
    this.setState({ gameName: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.closePopup();
  }

  cancel(event) {
    event.preventDefault();
    this.props.closePopup();
  }

  render() {
    return (
      <form className="createGame col-sm-4" onSubmit={this.handleSubmit}>
        <h4 className="row">Nuevo juego</h4>
        <input
          className="gameName row col-sm-11"
          type="text"
          placeholder="Ingrese el nombre"
          value={this.state.gameName}
          onChange={this.handleChange}
          required
        />
        <button type="submit" className="row btn btn-secondary">Ingresar</button>
        <button type="button" className="cancel row btn btn-secondary" onClick={this.cancel}>Cancelar</button>
      </form>
    );
  }
}
