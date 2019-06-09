import React from 'react';
import './Login.css';
import axios from 'axios';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      usernameError: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ username: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const isValidate = this.validate();
    if (isValidate) {
      axios.post('http://localhost:8080/users', { username: this.state.username })
        .then((res) => {
          console.info(res.data);
        })
        .catch(error => console.info(error));
    }
  }

  validate() {
    if (this.state.username.length === 0) {
      this.setState({ usernameError: 'Debe completar este campo' });
      return false;
    }

    return true;
  }

  render() {
    return (
      <div id="LoginForm">
        <div className="row header-container">
          <h1>Revolución Industrial</h1>
        </div>
        <form
          className="login-panel row col-4 offset-md-4"
          onSubmit={this.handleSubmit}
          noValidate
        >
          <h4 className="row">Ingreso al juego</h4>
          <input
            className="row form-control"
            type="text"
            placeholder="Ingrese su usuario"
            value={this.state.username}
            onChange={this.handleChange}
            required
          />
          <div className="row col-12" style={{ color: 'red', fontSize: 13 }}>{this.state.usernameError}</div>
          <button type="submit" className="row col-5 btn btn-secondary">Ingresar</button>
        </form>
      </div>
    );
  }
}
