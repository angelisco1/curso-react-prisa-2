import React from 'react';

class Formularios extends React.Component {
  constructor() {
    super();
    this.state = {
       usuario: '',
       password: ''
    }
    // this.handleChangeUsuario = this.handleChangeUsuario.bind(this);
    // this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.enviarDatos = this.enviarDatos.bind(this);
  }

  enviarDatos(event) {
    event.preventDefault();
    console.log(this.state);
    console.log('Datos enviados...');
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  // handleChangeUsuario(event) {
  //   this.setState({
  //     usuario: event.target.value
  //   })
  // }

  // handleChangePassword(event) {
  //   this.setState({
  //     password: event.target.value
  //   })
  // }

  render() {
    return (
      <form onSubmit={this.enviarDatos}>
        <div>
          <label htmlFor="usuario">Usuario:</label>
          <input type="text" id="usuario" name="usuario" value={this.state.usuario} onChange={this.handleChange} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={this.state.password} onChange={this.handleChange} />
        </div>
        <button type="submit">Enviar datos</button>
      </form>
    )
  }
}

export default Formularios;