import React from 'react';

class FormCard extends React.Component {
  constructor() {
    super();
    this.state = {
       titulo: '',
       texto: '',
       urlImg: ''
    }
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

  render() {
    return (
      <form onSubmit={this.enviarDatos}>
        <div>
          <label htmlFor="titulo">Título:</label>
          <input type="text" id="titulo" name="titulo" value={this.state.titulo} onChange={this.handleChange} />
        </div>
        <div>
          <label htmlFor="texto">Texto:</label>
          <input type="text" id="texto" name="texto" value={this.state.texto} onChange={this.handleChange} />
        </div>
        <div>
          <label htmlFor="imagen">Imagen:</label>
          <input type="text" id="imagen" name="urlImg" value={this.state.urlImg} onChange={this.handleChange} />
        </div>
        <button type="submit">Guardar</button>
      </form>
    )
  }
}

export default FormCard;