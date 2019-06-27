import React, { Component } from 'react'
import { connect } from 'react-redux';
import { borrarTarea, editarTarea } from '../store/lista-tareas/actions';

class Tarea extends Component {
  constructor(props) {
    super(props);
    this.editar = this.editar.bind(this);
    this.borrar = this.borrar.bind(this);
  }

  editar() {
    this.props.editarTarea({
      ...this.props.tarea,
      completada: !this.props.tarea.completada
    });
  }

  borrar() {
    this.props.borrarTarea(this.props.tarea.id)
  }

  render() {
    return (
      <div>
        <p>{this.props.tarea.nombre}</p>
        <button type="button" onClick={this.editar}>{this.props.tarea.completada ? 'Deshacer' : 'Hacer'}</button>
        <button type="button" onClick={this.borrar}>Eliminar</button>
      </div>
    )
  }
}

const mapDispatchToProps = {
  borrarTarea: borrarTarea,
  editarTarea: editarTarea
}

const withProps = connect(null, mapDispatchToProps);

export default withProps(Tarea);