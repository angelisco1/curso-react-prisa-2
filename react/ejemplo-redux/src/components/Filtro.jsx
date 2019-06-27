import React, { Component } from 'react'
import { connect } from 'react-redux';
import { filtrarTareas } from '../store/lista-tareas/actions';

class Filtro extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.filtrar(event.target.value);
  }

  render() {
    return (
      <div>
        <label htmlFor="filtro">Filtro:</label>
        <input type="text" id="filtro" value={this.props.txtFiltro} onChange={this.handleChange} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    txtFiltro: state.filtro
  }
}

const mapDispatchToProps = {
  filtrar: filtrarTareas
}

const withProps = connect(mapStateToProps, mapDispatchToProps);

export default withProps(Filtro);