import React from 'react';
import axios from 'axios';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import './Login.css';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ username: event.target.value });
  }

  handleSubmit(event) {
    axios.post('http://localhost:8080/users', { username: 'Pepe' })
      .then((res) => {
        console.info(res.data);
      })
      .catch(error => console.info(error));
    event.preventDefault();
  }

  render() {
    return (
      <div id="LoginForm">
        <div className="row header-container">
          <h1>Revolución Industrial</h1>
        </div>
        <ValidatorForm className="login-panel row col-4 offset-md-4" onSubmit={this.handleSubmit}>
          <h4 className="row">Ingreso al juego</h4>
          <TextValidator
            className="row form-control"
            type="text"
            placeholder="Ingrese su usuario"
            value={this.state.username}
            onChange={this.handleChange}
            validators={['required']}
            errorMessages={['El campo no puede estar vacio']}
          />
          <button type="submit" className="row btn btn-secondary">Ingresar</button>
        </ValidatorForm>
      </div>
    );
  }
}
