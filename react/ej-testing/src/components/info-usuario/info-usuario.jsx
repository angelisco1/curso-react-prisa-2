import React from 'react';

class InfoUsuario extends React.Component {
  constructor() {
    super();
    this.renderInfo = this.renderInfo.bind(this);
    this.renderLogin = this.renderLogin.bind(this);
  }

  renderInfo() {
    return (
      <div>
        <h1>Usuario logueado</h1>
        <p>El usuario es: { this.props.usuario }</p>
      </div>
    );
  }

  renderLogin() {
    return (
      <div>
        <h1>Usuario no logueado</h1>
        <p>Por favor, logueate</p>
      </div>
    );
  }

  render() {
    const cmp = this.props.logueado ? this.renderInfo() : this.renderLogin();
    return (
      cmp
    );
  }
}

export default InfoUsuario;