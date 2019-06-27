import React, { Component } from 'react'
import { crearTarea } from '../store/lista-tareas/actions';
import { connect } from 'react-redux';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: '',
      completada: false
    }
    this.guardar = this.guardar.bind(this);
    this.handleChangeForm = this.handleChangeForm.bind(this);
  }

  handleChangeForm(event) {
    this.setState({
      [event.target.id]: event.target.type === 'text' ? event.target.value : event.target.checked
    })
  }

  guardar(event) {
    event.preventDefault();
    this.props.crearTarea(this.state);
    // const action = crearTarea(this.state);
    // this.props.store.dispatch(action)
  }

  render() {
    return (
      <form onSubmit={this.guardar}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" value={this.state.nombre} onChange={this.handleChangeForm} />
        </div>
        <div>
          <label htmlFor="completada">Completada:</label>
          <input type="checkbox" id="completada" checked={this.state.completada} onChange={this.handleChangeForm} />
        </div>
        <button type="submit">Guardar</button>
      </form>
    )
  }
}

const mapDispatchToProps = {
  crearTarea: crearTarea
}

const withProps = connect(null, mapDispatchToProps);

export default withProps(Form);