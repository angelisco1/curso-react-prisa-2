import React, { Component } from 'react'
import Tarea from './Tarea';
import { connect } from 'react-redux';

class ListaTareas extends Component {
  render() {
    const listaTareas = this.props.tareas.map(t => (<Tarea key={t.id} tarea={t} />));
    return (
      <div>
        {listaTareas}
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    tareas: state.listaTareas
  }
}

const withProps = connect(mapStateToProps);

export default withProps(ListaTareas)