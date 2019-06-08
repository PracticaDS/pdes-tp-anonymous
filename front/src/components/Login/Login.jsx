import React from 'react';
import './Login.css';

const Login = () => (
  <div id="LoginForm">
    <div className="row header-container">
      <h1>Revolución Industrial</h1>
    </div>

    <div className="login-panel row col-4 offset-md-4">
      <h4 className="row">Ingreso al juego</h4>
      <input type="text" className="row form-control" id="user" placeholder="Ingrese su usuario" />
      <button type="submit" className="row btn btn-secondary">Ingresar</button>
    </div>
  </div>
);

export default Login;
